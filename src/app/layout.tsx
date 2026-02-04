import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { DefaultSeo } from 'next-seo'
import { SEO_CONFIG } from '@/lib/seo-config'
import { Analytics } from '@/components/Analytics'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_SITE_NAME || 'AI Blog Platform',
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'AI-powered blog for Philippine creators',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics />
        <DefaultSeo {...SEO_CONFIG} />
        {children}
        <VercelAnalytics />
      </body>
    </html>
  )
}
