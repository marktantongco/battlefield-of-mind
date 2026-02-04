import axios from 'axios'
import type { WordPressPost, SimplifiedPost, WordPressCategory, WordPressTag } from '@/types/wordpress'

const WP_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || ''

// Cache duration in seconds
const CACHE_DURATION = 300 // 5 minutes

let postsCache: { data: SimplifiedPost[], timestamp: number } | null = null

/**
 * Fetch posts from WordPress REST API
 */
export async function getPosts(params?: {
  per_page?: number
  page?: number
  categories?: string
  tags?: string
  search?: string
}): Promise<SimplifiedPost[]> {
  // Check cache
  if (postsCache && Date.now() - postsCache.timestamp < CACHE_DURATION * 1000) {
    return postsCache.data
  }

  try {
    const queryParams = new URLSearchParams({
      _embed: 'true',
      per_page: String(params?.per_page || 10),
      page: String(params?.page || 1),
      ...(params?.categories && { categories: params.categories }),
      ...(params?.tags && { tags: params.tags }),
      ...(params?.search && { search: params.search }),
    })

    const response = await axios.get<WordPressPost[]>(
      `${WP_API_URL}/posts?${queryParams.toString()}`
    )

    const simplifiedPosts = response.data.map(post => simplifyPost(post))
    
    // Update cache
    postsCache = {
      data: simplifiedPosts,
      timestamp: Date.now()
    }

    return simplifiedPosts
  } catch (error) {
    console.error('Error fetching posts from WordPress:', error)
    return []
  }
}

/**
 * Fetch a single post by slug
 */
export async function getPostBySlug(slug: string): Promise<SimplifiedPost | null> {
  try {
    const response = await axios.get<WordPressPost[]>(
      `${WP_API_URL}/posts?slug=${slug}&_embed=true`
    )

    if (response.data.length === 0) {
      return null
    }

    return simplifyPost(response.data[0])
  } catch (error) {
    console.error('Error fetching post by slug:', error)
    return null
  }
}

/**
 * Fetch categories
 */
export async function getCategories(): Promise<WordPressCategory[]> {
  try {
    const response = await axios.get<WordPressCategory[]>(
      `${WP_API_URL}/categories?per_page=100`
    )
    return response.data
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

/**
 * Fetch tags
 */
export async function getTags(): Promise<WordPressTag[]> {
  try {
    const response = await axios.get<WordPressTag[]>(
      `${WP_API_URL}/tags?per_page=100`
    )
    return response.data
  } catch (error) {
    console.error('Error fetching tags:', error)
    return []
  }
}

/**
 * Convert WordPress post to simplified format
 */
function simplifyPost(post: WordPressPost): SimplifiedPost {
  const author = post._embedded?.author?.[0]
  const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0]
  const categories = post._embedded?.['wp:term']?.[0] || []
  const tags = post._embedded?.['wp:term']?.[1] || []

  return {
    id: post.id,
    title: post.title.rendered,
    slug: post.slug,
    excerpt: stripHtml(post.excerpt.rendered),
    content: post.content.rendered,
    date: post.date,
    author: {
      name: author?.name || 'Anonymous',
      avatar: author?.avatar_urls?.['96'] || '',
    },
    featuredImage: featuredMedia ? {
      url: featuredMedia.source_url,
      alt: featuredMedia.alt_text || post.title.rendered,
    } : undefined,
    categories: categories.map((cat: any) => cat.name),
    tags: tags.map((tag: any) => tag.name),
  }
}

/**
 * Strip HTML tags from string
 */
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim()
}

/**
 * Get all post slugs for static generation
 */
export async function getAllPostSlugs(): Promise<string[]> {
  try {
    const response = await axios.get<WordPressPost[]>(
      `${WP_API_URL}/posts?per_page=100&_fields=slug`
    )
    return response.data.map(post => post.slug)
  } catch (error) {
    console.error('Error fetching post slugs:', error)
    return []
  }
}
