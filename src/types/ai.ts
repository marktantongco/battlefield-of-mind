export interface ContentIdeaRequest {
  topic?: string
  keywords?: string[]
  language: 'en' | 'fil'
  tone: 'professional' | 'casual' | 'inspirational' | 'technical'
}

export interface ContentIdea {
  title: string
  description: string
  keywords: string[]
  outline: string[]
}

export interface SEOSuggestion {
  title: string
  metaDescription: string
  keywords: string[]
  slug: string
  focusKeyphrase: string
}

export interface TagSuggestion {
  tag: string
  confidence: number
  category: string
}

export interface TranslationRequest {
  text: string
  from: 'en' | 'fil'
  to: 'en' | 'fil'
}

export interface ContentSummary {
  summary: string
  keyPoints: string[]
  readingTime: number
  shareableTweet: string
}

export interface AIWritingAssistantProps {
  onContentGenerated: (content: string) => void
  initialPrompt?: string
}
