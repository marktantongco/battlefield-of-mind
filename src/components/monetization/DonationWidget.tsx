'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, Coffee } from 'lucide-react'
import { formatCurrency } from '@/lib/utils'

const DONATION_AMOUNTS = [
  { value: 50, label: '₱50', description: 'Buy me a coffee' },
  { value: 100, label: '₱100', description: 'Support my work' },
  { value: 250, label: '₱250', description: 'Generous support' },
  { value: 500, label: '₱500', description: 'Amazing support!' },
]

export function DonationWidget() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState('')

  const handleDonate = () => {
    const amount = selectedAmount || parseInt(customAmount)
    if (!amount || amount < 10) {
      alert('Please select or enter a valid amount (minimum ₱10)')
      return
    }

    // TODO: Integrate with Stripe payment
    console.log('Processing donation:', amount)
    alert(`Thank you for your ₱${amount} donation! Payment integration coming soon.`)
  }

  return (
    <Card className="bg-gradient-to-br from-pink-50 to-red-50 dark:from-pink-950 dark:to-red-950">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2">
          <Heart className="h-6 w-6 text-red-500 fill-red-500" />
          Support This Blog
        </CardTitle>
        <CardDescription>
          Love the content? Buy me a coffee and help keep this blog running! ☕
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {DONATION_AMOUNTS.map((amount) => (
            <Button
              key={amount.value}
              variant={selectedAmount === amount.value ? 'default' : 'outline'}
              onClick={() => {
                setSelectedAmount(amount.value)
                setCustomAmount('')
              }}
              className="flex flex-col h-auto py-3"
            >
              <Coffee className="h-4 w-4 mb-1" />
              <span className="font-bold">{amount.label}</span>
              <span className="text-xs opacity-70">{amount.description}</span>
            </Button>
          ))}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Or enter custom amount (₱)</label>
          <input
            type="number"
            min="10"
            placeholder="Enter amount"
            className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value)
              setSelectedAmount(null)
            }}
          />
        </div>

        <Button onClick={handleDonate} className="w-full" size="lg">
          <Heart className="mr-2 h-4 w-4" />
          Donate Now
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          Secure payment via Stripe • Your support keeps this content free for everyone
        </p>
      </CardContent>
    </Card>
  )
}
