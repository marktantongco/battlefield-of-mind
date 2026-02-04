'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Languages, Loader2, ArrowLeftRight } from 'lucide-react'

export function ContentTranslator() {
  const [sourceText, setSourceText] = useState('')
  const [translatedText, setTranslatedText] = useState('')
  const [sourceLang, setSourceLang] = useState<'en' | 'fil'>('en')
  const [targetLang, setTargetLang] = useState<'en' | 'fil'>('fil')
  const [isLoading, setIsLoading] = useState(false)

  const handleTranslate = async () => {
    if (!sourceText.trim()) return

    setIsLoading(true)
    try {
      const response = await fetch('/api/ai/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: sourceText,
          from: sourceLang,
          to: targetLang,
        }),
      })

      const data = await response.json()
      setTranslatedText(data.translation || '')
    } catch (error) {
      console.error('Error translating:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const swapLanguages = () => {
    setSourceLang(targetLang)
    setTargetLang(sourceLang)
    setSourceText(translatedText)
    setTranslatedText(sourceText)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Languages className="h-5 w-5 text-green-500" />
          Content Translator
        </CardTitle>
        <CardDescription>
          Translate between English and Filipino/Tagalog
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">
              From: {sourceLang === 'en' ? 'English' : 'Filipino'}
            </label>
            <textarea
              className="w-full min-h-[150px] rounded-md border border-input bg-background px-3 py-2 text-sm"
              placeholder="Enter text to translate..."
              value={sourceText}
              onChange={(e) => setSourceText(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              To: {targetLang === 'en' ? 'English' : 'Filipino'}
            </label>
            <textarea
              className="w-full min-h-[150px] rounded-md border border-input bg-muted px-3 py-2 text-sm"
              placeholder="Translation will appear here..."
              value={translatedText}
              readOnly
            />
          </div>
        </div>

        <div className="flex gap-2">
          <Button onClick={handleTranslate} disabled={isLoading || !sourceText.trim()} className="flex-1">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Translating...
              </>
            ) : (
              'Translate'
            )}
          </Button>
          <Button variant="outline" onClick={swapLanguages}>
            <ArrowLeftRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
