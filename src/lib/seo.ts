import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://mindscape-ai.vercel.app';
const siteName = 'MindScape AI';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'MindScape AI - Transform Your Mind, Create with AI',
    template: '%s | MindScape AI',
  },
  description: 'Where mental transformation meets AI-powered creativity. Track your moods, transform limiting beliefs, and create content with cutting-edge AI tools.',
  keywords: [
    'mental health',
    'personal growth',
    'AI tools',
    'content creation',
    'mood tracker',
    'battlefield of mind',
    'transformation',
    'self-improvement',
    'AI writing',
    'emotional wellness',
  ],
  authors: [{ name: 'MindScape AI Team' }],
  creator: 'MindScape AI',
  publisher: 'MindScape AI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName,
    title: 'MindScape AI - Transform Your Mind, Create with AI',
    description: 'Synergized platform for mental transformation and AI-powered content creation.',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'MindScape AI - Mental Transformation meets AI Creativity',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MindScape AI - Transform & Create',
    description: 'Mental transformation meets AI-powered creativity',
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  image,
  path = '',
}: {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  path?: string;
}): Metadata {
  const url = `${siteUrl}${path}`;
  const ogImage = image || `${siteUrl}/og-image.png`;

  return {
    title,
    description,
    keywords: [...defaultMetadata.keywords as string[], ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

// Structured Data (JSON-LD)
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description: 'Platform for mental transformation and AI-powered creativity',
  sameAs: [
    // Add social media links here when available
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteName,
  url: siteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export const breadcrumbSchema = (items: { name: string; item: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${siteUrl}${item.item}`,
  })),
});
