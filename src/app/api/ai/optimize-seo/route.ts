import { NextRequest, NextResponse } from 'next/server'
import { generateSEOSuggestions } from '@/lib/ai-helpers'

export async function POST(request: NextRequest) {
  try {
    const { content, currentTitle } = await request.json()

    if (!content) {
      return NextResponse.json(
        { error: 'Content is required' },
        { status: 400 }
      )
    }

    const suggestions = await generateSEOSuggestions(content, currentTitle)

    return NextResponse.json(suggestions)
  } catch (error) {
    console.error('Error in optimize-seo API:', error)
    return NextResponse.json(
      { error: 'Failed to optimize SEO' },
      { status: 500 }
    )
  }
}
