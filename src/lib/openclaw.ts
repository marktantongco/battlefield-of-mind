/**
 * OpenClaw API Integration
 * https://openclaw.ai
 * 
 * OpenClaw provides AI assistance through Claude via a unified API
 * This helper module handles all OpenClaw API interactions
 */

const OPENCLAW_API_KEY = process.env.OPENCLAW_API_KEY || '';
const OPENCLAW_API_URL = process.env.OPENCLAW_API_URL || 'https://api.openclaw.ai';

export interface OpenClawMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface OpenClawRequest {
  messages: OpenClawMessage[];
  model?: string;
  temperature?: number;
  max_tokens?: number;
  stream?: boolean;
}

export interface OpenClawResponse {
  id: string;
  model: string;
  content: string;
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

/**
 * Send a message to OpenClaw API
 */
export async function sendToOpenClaw(
  messages: OpenClawMessage[],
  options?: {
    model?: string;
    temperature?: number;
    max_tokens?: number;
  }
): Promise<OpenClawResponse> {
  if (!OPENCLAW_API_KEY) {
    throw new Error('OPENCLAW_API_KEY environment variable is not set');
  }

  const request: OpenClawRequest = {
    messages,
    model: options?.model || 'claude-3-5-sonnet-20241022',
    temperature: options?.temperature || 0.7,
    max_tokens: options?.max_tokens || 2000,
  };

  const response = await fetch(`${OPENCLAW_API_URL}/v1/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENCLAW_API_KEY}`,
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`OpenClaw API error: ${response.status} - ${error}`);
  }

  const data = await response.json();
  
  return {
    id: data.id,
    model: data.model,
    content: data.choices?.[0]?.message?.content || data.content || '',
    usage: data.usage,
  };
}

/**
 * Generate content ideas using OpenClaw
 */
export async function generateContentIdeas(topic: string, count: number = 5): Promise<string[]> {
  const response = await sendToOpenClaw([
    {
      role: 'system',
      content: 'You are a creative content strategist. Generate engaging blog post ideas.',
    },
    {
      role: 'user',
      content: `Generate ${count} unique and engaging blog post ideas about: ${topic}. Return only the titles, one per line.`,
    },
  ]);

  return response.content
    .split('\n')
    .filter(line => line.trim())
    .map(line => line.replace(/^\d+\.\s*/, '').trim())
    .slice(0, count);
}

/**
 * Optimize content for SEO using OpenClaw
 */
export async function optimizeForSEO(content: string, keywords: string[]): Promise<{
  optimizedContent: string;
  suggestions: string[];
  metaDescription: string;
}> {
  const response = await sendToOpenClaw([
    {
      role: 'system',
      content: 'You are an SEO expert. Optimize content while maintaining quality and readability.',
    },
    {
      role: 'user',
      content: `Optimize this content for SEO with keywords: ${keywords.join(', ')}\n\nContent:\n${content}\n\nProvide:\n1. Optimized content\n2. SEO suggestions\n3. Meta description`,
    },
  ], {
    max_tokens: 4000,
  });

  // Parse response (simplified - adjust based on actual response format)
  const lines = response.content.split('\n');
  
  return {
    optimizedContent: response.content,
    suggestions: [
      'Use keywords naturally in headings',
      'Add internal links',
      'Optimize images with alt text',
    ],
    metaDescription: lines.find(l => l.toLowerCase().includes('description'))?.substring(0, 160) || '',
  };
}

/**
 * Translate content using OpenClaw
 */
export async function translateContent(
  content: string,
  targetLanguage: string
): Promise<string> {
  const response = await sendToOpenClaw([
    {
      role: 'system',
      content: `You are a professional translator. Translate content to ${targetLanguage} while preserving tone and meaning.`,
    },
    {
      role: 'user',
      content: `Translate this content to ${targetLanguage}:\n\n${content}`,
    },
  ], {
    max_tokens: 4000,
  });

  return response.content;
}

/**
 * Generate SEO tags using OpenClaw
 */
export async function generateSEOTags(content: string): Promise<{
  title: string;
  description: string;
  keywords: string[];
}> {
  const response = await sendToOpenClaw([
    {
      role: 'system',
      content: 'You are an SEO expert. Generate optimized meta tags for web content.',
    },
    {
      role: 'user',
      content: `Generate SEO meta tags for this content:\n\n${content}\n\nProvide: title (60 chars), description (155 chars), and 5 keywords.`,
    },
  ]);

  // Parse response (simplified)
  const lines = response.content.split('\n');
  
  return {
    title: lines.find(l => l.toLowerCase().includes('title'))?.split(':')[1]?.trim() || 'Blog Post',
    description: lines.find(l => l.toLowerCase().includes('description'))?.split(':')[1]?.trim() || '',
    keywords: lines
      .find(l => l.toLowerCase().includes('keywords'))
      ?.split(':')[1]
      ?.split(',')
      .map(k => k.trim()) || [],
  };
}

export default {
  sendToOpenClaw,
  generateContentIdeas,
  optimizeForSEO,
  translateContent,
  generateSEOTags,
};
