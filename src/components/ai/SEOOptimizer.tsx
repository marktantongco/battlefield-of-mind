'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Search, Loader2, Copy, Check } from 'lucide-react'
import { copyToClipboard } from '@/lib/utils'
import type { SEOSuggestion } from '@/types/ai'

interface SEOOptimizerProps {
  content: string
  currentTitle?: string
}

export function SEOOptimizer({ content, currentTitle }: SEOOptimizerProps) {
  const [suggestion, setSuggestion] = useState<SEOSuggestion | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const handleOptimize = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/ai/optimize-seo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content, currentTitle }),
      })

      const data = await response.json()
      setSuggestion(data)
    } catch (error) {
      console.error('Error optimizing SEO:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCopy = async (text: string, field: string) => {
    const success = await copyToClipboard(text)
    if (success) {
      setCopiedField(field)
      setTimeout(() => setCopiedField(null), 2000)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Search className="h-5 w-5 text-blue-500" />
          SEO Optimizer
        </CardTitle>
        <CardDescription>
          Generate SEO-optimized titles, descriptions, and keywords
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button onClick={handleOptimize} disabled={isLoading || !content} className="w-full">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Analyzing Content...
            </>
          ) : (
            'Optimize for SEO'
          )}
        </Button>

        {suggestion && (
          <div className="space-y-4 mt-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Optimized Title</label>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleCopy(suggestion.title, 'title')}
                >
                  {copiedField === 'title' ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <p className="text-sm bg-muted p-3 rounded-md">{suggestion.title}</p>
              <p className="text-xs text-muted-foreground">
                {suggestion.title.length} characters
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Meta Description</label>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleCopy(suggestion.metaDescription, 'description')}
                >
                  {copiedField === 'description' ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <p className="text-sm bg-muted p-3 rounded-md">{suggestion.metaDescription}</p>
              <p className="text-xs text-muted-foreground">
                {suggestion.metaDescription.length} characters
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">URL Slug</label>
              <p className="text-sm bg-muted p-3 rounded-md font-mono">{suggestion.slug}</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Focus Keyphrase</label>
              <p className="text-sm bg-muted p-3 rounded-md">{suggestion.focusKeyphrase}</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Recommended Keywords</label>
              <div className="flex flex-wrap gap-2">
                {suggestion.keywords.map((keyword, index) => (
                  <Badge key={index} variant="secondary">
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
