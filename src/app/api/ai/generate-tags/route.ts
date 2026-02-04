import { NextRequest, NextResponse } from 'next/server'
import { generateTags } from '@/lib/ai-helpers'

export async function POST(request: NextRequest) {
  try {
    const { content } = await request.json()

    if (!content) {
      return NextResponse.json(
        { error: 'Content is required' },
        { status: 400 }
      )
    }

    const tags = await generateTags(content)

    return NextResponse.json({ tags })
  } catch (error) {
    console.error('Error in generate-tags API:', error)
    return NextResponse.json(
      { error: 'Failed to generate tags' },
      { status: 500 }
    )
  }
}
