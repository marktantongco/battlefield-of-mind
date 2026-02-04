import { getPostBySlug, getAllPostSlugs } from '@/lib/wordpress'
import { notFound } from 'next/navigation'
import { ArticleJsonLd, NextSeo } from 'next-seo'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { DonationWidget } from '@/components/monetization/DonationWidget'
import { AffiliateDisclosure } from '@/components/monetization/AffiliateLink'
import { SponsoredBadge } from '@/components/monetization/SponsoredBadge'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, User, Share2 } from 'lucide-react'
import { formatDate, calculateReadingTime } from '@/lib/utils'
import { generateBlogPostingJsonLd } from '@/lib/seo-config'
import Image from 'next/image'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      images: post.featuredImage ? [post.featuredImage.url] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.featuredImage ? [post.featuredImage.url] : [],
    },
  }
}

export default async function BlogPost({ params }: PageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const readingTime = calculateReadingTime(post.content)
  const jsonLd = generateBlogPostingJsonLd({
    title: post.title,
    excerpt: post.excerpt,
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.slug}`,
    imageUrl: post.featuredImage?.url,
    publishDate: post.date,
    authorName: post.author.name,
    keywords: post.tags,
  })

  // Example: Check if post has affiliate links or is sponsored
  const hasAffiliateLinks = post.content.includes('affiliate') || post.tags.some(tag => 
    tag.toLowerCase().includes('review') || tag.toLowerCase().includes('product')
  )
  const sponsorship = {
    isSponsored: false, // Set based on your post metadata
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <article className="container mx-auto px-4 py-8 max-w-4xl">
            {/* Featured Image */}
            {post.featuredImage && (
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
                <Image
                  src={post.featuredImage.url}
                  alt={post.featuredImage.alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((category) => (
                <Badge key={category} variant="secondary">
                  {category}
                </Badge>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6 pb-6 border-b">
              <div className="flex items-center gap-2">
                {post.author.avatar && (
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                )}
                <span className="font-medium">{post.author.name}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{readingTime} min read</span>
              </div>
            </div>

            {/* Sponsored Badge */}
            <SponsoredBadge sponsorship={sponsorship} />

            {/* Content */}
            <div 
              className="prose prose-lg dark:prose-invert max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Affiliate Disclosure */}
            {hasAffiliateLinks && <AffiliateDisclosure />}

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mb-8">
                <h3 className="text-sm font-semibold mb-3">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Donation Widget */}
            <div className="my-12">
              <DonationWidget />
            </div>

            {/* Share Buttons */}
            <div className="border-t pt-8">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Share2 className="h-5 w-5" />
                Share this article
              </h3>
              <div className="flex gap-2">
                {/* Add social share buttons here */}
                <p className="text-sm text-muted-foreground">
                  Share buttons coming soon...
                </p>
              </div>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  )
}
