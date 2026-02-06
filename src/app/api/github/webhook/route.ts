import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { spawn } from 'child_process'

const WEBHOOK_SECRET = process.env.GITHUB_WEBHOOK_SECRET
const DEPLOY_SCRIPT = process.env.GITHUB_WEBHOOK_DEPLOY_SCRIPT
const DEPLOY_BRANCH =
  process.env.GITHUB_WEBHOOK_DEPLOY_BRANCH ?? 'refs/heads/main'
const DEPLOY_CWD = process.env.GITHUB_WEBHOOK_DEPLOY_CWD
const DEPLOY_REPO_ALLOWLIST = process.env.GITHUB_WEBHOOK_DEPLOY_REPO
const DEPLOY_TIMEOUT_MS = Number(
  process.env.GITHUB_WEBHOOK_DEPLOY_TIMEOUT_MS ?? '300000'
)

type PushPayload = {
  repository?: { full_name?: string }
  ref?: string
  commits?: Array<unknown>
  pusher?: { name?: string }
}

type PullRequestPayload = {
  action?: string
  repository?: { full_name?: string }
  pull_request?: {
    number?: number
    title?: string
    state?: string
  }
}

async function handlePush(payload: PushPayload) {
  const repo = payload.repository?.full_name ?? 'unknown repo'
  const ref = payload.ref ?? 'unknown ref'
  const commits = payload.commits?.length ?? 0
  const pusher = payload.pusher?.name ?? 'unknown pusher'
  console.log(`Push to ${repo}:${ref} by ${pusher} (${commits} commits)`)

  if (ref !== DEPLOY_BRANCH) {
    return
  }

  if (DEPLOY_REPO_ALLOWLIST && DEPLOY_REPO_ALLOWLIST !== repo) {
    console.warn(`Skipping deploy for ${repo}; not in allowlist`)
    return
  }

  if (!DEPLOY_SCRIPT) {
    console.warn('No deploy script configured; skipping deploy')
    return
  }

  void runDeployScript(repo)
}

async function handlePullRequest(payload: PullRequestPayload) {
  const action = payload.action ?? 'event'
  const repo = payload.repository?.full_name ?? 'unknown repo'
  const number = payload.pull_request?.number
  const title = payload.pull_request?.title
  const state = payload.pull_request?.state
  console.log(
    `PR${number ? ` #${number}` : ''} in ${repo}: ${action} - ${title ?? 'untitled'} (${state ?? 'unknown state'})`
  )
}

function computeSignature(rawBody: Buffer) {
  if (!WEBHOOK_SECRET) {
    throw new Error('GITHUB_WEBHOOK_SECRET is not set')
  }

  const hmac = crypto.createHmac('sha256', WEBHOOK_SECRET)
  hmac.update(rawBody)
  return `sha256=${hmac.digest('hex')}`
}

function verifySignature(rawBody: Buffer, signatureHeader: string) {
  const digest = computeSignature(rawBody)
  const signatureBuffer = Buffer.from(signatureHeader)
  const digestBuffer = Buffer.from(digest)

  if (signatureBuffer.length !== digestBuffer.length) {
    return false
  }

  return crypto.timingSafeEqual(signatureBuffer, digestBuffer)
}

function runDeployScript(repo: string) {
  return new Promise<void>((resolve, reject) => {
    if (!DEPLOY_SCRIPT) {
      reject(new Error('Deploy script is not configured'))
      return
    }

    const child = spawn(DEPLOY_SCRIPT, [repo], {
      cwd: DEPLOY_CWD,
      shell: true,
      stdio: ['ignore', 'pipe', 'pipe'],
    })

    let stdout = ''
    let stderr = ''
    let didTimeout = false

    const timeout = setTimeout(() => {
      didTimeout = true
      child.kill('SIGTERM')
    }, DEPLOY_TIMEOUT_MS)

    child.stdout?.on('data', (chunk) => {
      stdout += chunk.toString()
    })

    child.stderr?.on('data', (chunk) => {
      stderr += chunk.toString()
    })

    child.on('error', (error) => {
      clearTimeout(timeout)
      reject(error)
    })

    child.on('close', (code) => {
      clearTimeout(timeout)
      if (didTimeout) {
        console.error(`Deploy timed out after ${DEPLOY_TIMEOUT_MS}ms`)
        reject(new Error('Deploy timed out'))
        return
      }

      if (code === 0) {
        console.log(`Deployed ${repo}`)
        if (stdout) {
          console.log(stdout.trim())
        }
        resolve()
      } else {
        if (stderr) {
          console.error(stderr.trim())
        }
        reject(new Error(`Deploy failed with exit code ${code}`))
      }
    })
  })
}

export async function POST(request: NextRequest) {
  try {
    const signatureHeader = request.headers.get('x-hub-signature-256')
    const event = request.headers.get('x-github-event')

    if (!signatureHeader || !event) {
      return NextResponse.json(
        { error: 'Missing required headers' },
        { status: 400 }
      )
    }

    const rawBody = Buffer.from(await request.arrayBuffer())

    if (!verifySignature(rawBody, signatureHeader)) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
    }

    const payload = rawBody.length ? JSON.parse(rawBody.toString('utf-8')) : {}

    if (event === 'push') {
      await handlePush(payload as PushPayload)
    } else if (event === 'pull_request') {
      await handlePullRequest(payload as PullRequestPayload)
    }

    return new NextResponse('OK', { status: 200 })
  } catch (error) {
    console.error('Error handling GitHub webhook:', error)
    return NextResponse.json(
      { error: 'Failed to handle webhook' },
      { status: 500 }
    )
  }
}
