import OpenAI from 'openai'
import type { 
  ContentIdeaRequest, 
  ContentIdea, 
  SEOSuggestion, 
  TagSuggestion,
  TranslationRequest,
  ContentSummary 
} from '@/types/ai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

/**
 * Generate content ideas based on topic and keywords
 */
export async function generateContentIdeas(
  request: ContentIdeaRequest
): Promise<ContentIdea[]> {
  const prompt = `Generate 3 blog post ideas for Philippine creators about ${request.topic || 'technology and AI'}.
  
Language: ${request.language === 'fil' ? 'Filipino/Tagalog' : 'English'}
Tone: ${request.tone}
Keywords to include: ${request.keywords?.join(', ') || 'N/A'}

For each idea, provide:
1. A compelling title
2. A brief description (2-3 sentences)
3. 5 relevant keywords
4. An outline with 4-5 main points

Format as JSON array.`

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        {
          role: 'system',
          content: 'You are a content strategist for Philippine creators, specializing in SEO-optimized blog content.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      response_format: { type: 'json_object' },
    })

    const response = JSON.parse(completion.choices[0].message.content || '{}')
    return response.ideas || []
  } catch (error) {
    console.error('Error generating content ideas:', error)
    return []
  }
}

/**
 * Generate SEO-optimized title and meta description
 */
export async function generateSEOSuggestions(
  content: string,
  currentTitle?: string
): Promise<SEOSuggestion> {
  const prompt = `Analyze this blog post content and generate SEO-optimized suggestions for Philippine audience:

Content: ${content.substring(0, 1000)}...
Current Title: ${currentTitle || 'None'}

Provide:
1. An SEO-optimized title (50-60 characters)
2. Meta description (150-160 characters)
3. 5-7 relevant keywords
4. URL slug
5. Focus keyphrase

Format as JSON.`

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        {
          role: 'system',
          content: 'You are an SEO expert specializing in Philippine market optimization.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      response_format: { type: 'json_object' },
    })

    const response = JSON.parse(completion.choices[0].message.content || '{}')
    return response
  } catch (error) {
    console.error('Error generating SEO suggestions:', error)
    return {
      title: currentTitle || '',
      metaDescription: '',
      keywords: [],
      slug: '',
      focusKeyphrase: '',
    }
  }
}

/**
 * Auto-generate tags for content
 */
export async function generateTags(content: string): Promise<TagSuggestion[]> {
  const prompt = `Analyze this content and suggest relevant tags for categorization:

Content: ${content.substring(0, 1500)}...

Provide 8-10 tags with:
- tag name
- confidence score (0-1)
- category (e.g., 'technology', 'business', 'lifestyle', 'AI', 'Philippines')

Focus on Philippine context and local relevance. Format as JSON array.`

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        {
          role: 'system',
          content: 'You are a content categorization expert for Philippine digital content.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      response_format: { type: 'json_object' },
    })

    const response = JSON.parse(completion.choices[0].message.content || '{}')
    return response.tags || []
  } catch (error) {
    console.error('Error generating tags:', error)
    return []
  }
}

/**
 * Translate content between English and Filipino
 */
export async function translateContent(
  request: TranslationRequest
): Promise<string> {
  const prompt = `Translate the following text from ${request.from === 'en' ? 'English' : 'Filipino/Tagalog'} to ${request.to === 'en' ? 'English' : 'Filipino/Tagalog'}:

${request.text}

Maintain the tone, cultural context, and ensure natural-sounding translation appropriate for Philippine audience.`

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        {
          role: 'system',
          content: 'You are a professional translator specializing in English-Filipino translation with deep understanding of Philippine culture.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
    })

    return completion.choices[0].message.content || ''
  } catch (error) {
    console.error('Error translating content:', error)
    return request.text
  }
}

/**
 * Generate content summary for social sharing
 */
export async function generateContentSummary(
  content: string
): Promise<ContentSummary> {
  const wordCount = content.split(/\s+/).length
  const readingTime = Math.ceil(wordCount / 200) // Average reading speed

  const prompt = `Create a summary of this blog post for social media sharing:

Content: ${content.substring(0, 2000)}...

Provide:
1. A concise summary (2-3 sentences)
2. 3-5 key points (bullet points)
3. A shareable tweet (max 280 characters with relevant hashtags)

Format as JSON.`

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        {
          role: 'system',
          content: 'You are a social media expert creating engaging summaries for Philippine audience.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      response_format: { type: 'json_object' },
    })

    const response = JSON.parse(completion.choices[0].message.content || '{}')
    return {
      summary: response.summary || '',
      keyPoints: response.keyPoints || [],
      readingTime,
      shareableTweet: response.shareableTweet || '',
    }
  } catch (error) {
    console.error('Error generating content summary:', error)
    return {
      summary: '',
      keyPoints: [],
      readingTime,
      shareableTweet: '',
    }
  }
}
