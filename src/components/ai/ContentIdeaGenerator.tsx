'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Lightbulb, Loader2 } from 'lucide-react'
import type { ContentIdea } from '@/types/ai'

export function ContentIdeaGenerator() {
  const [topic, setTopic] = useState('')
  const [language, setLanguage] = useState<'en' | 'fil'>('en')
  const [tone, setTone] = useState<'professional' | 'casual' | 'inspirational' | 'technical'>('casual')
  const [ideas, setIdeas] = useState<ContentIdea[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleGenerate = async () => {
    if (!topic.trim()) return

    setIsLoading(true)
    try {
      const response = await fetch('/api/ai/generate-ideas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, language, tone }),
      })

      const data = await response.json()
      setIdeas(data.ideas || [])
    } catch (error) {
      console.error('Error generating ideas:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-yellow-500" />
          AI Content Idea Generator
        </CardTitle>
        <CardDescription>
          Generate blog post ideas tailored for Philippine creators
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Topic or Keywords</label>
          <Input
            placeholder="e.g., AI technology in Philippines, remote work tips"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleGenerate()}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Language</label>
            <select
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'en' | 'fil')}
            >
              <option value="en">English</option>
              <option value="fil">Filipino</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Tone</label>
            <select
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
              value={tone}
              onChange={(e) => setTone(e.target.value as any)}
            >
              <option value="casual">Casual</option>
              <option value="professional">Professional</option>
              <option value="inspirational">Inspirational</option>
              <option value="technical">Technical</option>
            </select>
          </div>
        </div>

        <Button onClick={handleGenerate} disabled={isLoading || !topic.trim()} className="w-full">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating Ideas...
            </>
          ) : (
            'Generate Ideas'
          )}
        </Button>

        {ideas.length > 0 && (
          <div className="space-y-4 mt-6">
            <h3 className="font-semibold">Generated Ideas:</h3>
            {ideas.map((idea, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{idea.title}</CardTitle>
                  <CardDescription>{idea.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm font-medium">Keywords:</p>
                      <p className="text-sm text-muted-foreground">{idea.keywords.join(', ')}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Outline:</p>
                      <ul className="text-sm text-muted-foreground list-disc list-inside">
                        {idea.outline.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
