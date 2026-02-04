import { NextRequest, NextResponse } from 'next/server'
import { generateContentIdeas } from '@/lib/ai-helpers'
import type { ContentIdeaRequest } from '@/types/ai'

export async function POST(request: NextRequest) {
  try {
    const body: ContentIdeaRequest = await request.json()

    const ideas = await generateContentIdeas(body)

    return NextResponse.json({ ideas })
  } catch (error) {
    console.error('Error in generate-ideas API:', error)
    return NextResponse.json(
      { error: 'Failed to generate ideas' },
      { status: 500 }
    )
  }
}
