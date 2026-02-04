'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Mail, Check } from 'lucide-react'
import { isValidEmail } from '@/lib/utils'

export function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address')
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubscribed(true)
      setEmail('')
    }, 1000)

    // TODO: Integrate with actual newsletter service (WordPress.com or Mailchimp)
  }

  if (isSubscribed) {
    return (
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
        <CardContent className="flex items-center justify-center gap-2 py-8">
          <Check className="h-6 w-6 text-green-600" />
          <p className="text-lg font-semibold">Thanks for subscribing! Check your email.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Stay Updated</CardTitle>
        <CardDescription>
          Get AI-powered content tips, SEO strategies, and monetization ideas delivered to your inbox.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
              disabled={isLoading}
            />
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
          </div>
          <Button type="submit" disabled={isLoading} className="sm:w-auto">
            <Mail className="h-4 w-4 mr-2" />
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </form>
        <p className="text-xs text-muted-foreground text-center mt-4">
          No spam. Unsubscribe anytime. Free forever.
        </p>
      </CardContent>
    </Card>
  )
}
