import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ContentIdeaGenerator } from '@/components/ai/ContentIdeaGenerator'
import { SEOOptimizer } from '@/components/ai/SEOOptimizer'
import { ContentTranslator } from '@/components/ai/ContentTranslator'
import { Sparkles } from 'lucide-react'

export const metadata = {
  title: 'AI Writing Tools',
  description: 'Free AI-powered tools for content creation, SEO optimization, and translation',
}

export default function AIToolsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AI Writing Tools
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Supercharge your content creation with AI-powered tools designed for Philippine creators
            </p>
          </div>

          {/* Tools */}
          <div className="space-y-8">
            <ContentIdeaGenerator />
            <SEOOptimizer content="" />
            <ContentTranslator />
          </div>

          {/* Info Section */}
          <div className="mt-12 p-6 bg-muted/50 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">How to Use These Tools</h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">📝 Content Idea Generator</h3>
                <p>Enter a topic or keywords, select your language and tone, and let AI generate 3 unique blog post ideas with outlines.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">🔍 SEO Optimizer</h3>
                <p>Paste your content to get SEO-optimized titles, meta descriptions, keywords, and URL slugs tailored for Philippine audience.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">🌐 Content Translator</h3>
                <p>Translate between English and Filipino/Tagalog with cultural context and natural-sounding results.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
