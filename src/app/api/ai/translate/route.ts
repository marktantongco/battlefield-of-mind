import { NextRequest, NextResponse } from 'next/server'
import { translateContent } from '@/lib/ai-helpers'
import type { TranslationRequest } from '@/types/ai'

export async function POST(request: NextRequest) {
  try {
    const body: TranslationRequest = await request.json()

    if (!body.text) {
      return NextResponse.json(
        { error: 'Text is required' },
        { status: 400 }
      )
    }

    const translation = await translateContent(body)

    return NextResponse.json({ translation })
  } catch (error) {
    console.error('Error in translate API:', error)
    return NextResponse.json(
      { error: 'Failed to translate content' },
      { status: 500 }
    )
  }
}
