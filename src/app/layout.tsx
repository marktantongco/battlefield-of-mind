import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { Analytics } from '@/components/Analytics'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MindScape AI - Transform & Create',
  description: 'Where mental transformation meets AI-powered creativity. A synergized platform for personal growth and content innovation.',
  keywords: ['mental health', 'personal growth', 'AI tools', 'content creation', 'battlefield of mind', 'transformation'],
  openGraph: {
    title: 'MindScape AI - Transform Your Mind, Create with AI',
    description: 'Where mental transformation meets AI-powered creativity',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Analytics />
        {children}
        <VercelAnalytics />
      </body>
    </html>
  )
}
