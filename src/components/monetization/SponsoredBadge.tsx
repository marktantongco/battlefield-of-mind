import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { AlertCircle } from 'lucide-react'
import type { SponsoredPost } from '@/types/monetization'

interface SponsoredBadgeProps {
  sponsorship: SponsoredPost
}

export function SponsoredBadge({ sponsorship }: SponsoredBadgeProps) {
  if (!sponsorship.isSponsored) return null

  return (
    <div className="space-y-2 my-6">
      <Badge variant="secondary" className="mb-2">
        Sponsored Content
      </Badge>
      
      <Card className="border-l-4 border-l-blue-500">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              {sponsorship.sponsorName && (
                <p className="text-sm font-medium">
                  Sponsored by {sponsorship.sponsorName}
                  {sponsorship.sponsorLogo && (
                    <img
                      src={sponsorship.sponsorLogo}
                      alt={sponsorship.sponsorName}
                      className="inline-block h-5 ml-2"
                    />
                  )}
                </p>
              )}
              <p className="text-xs text-muted-foreground">
                {sponsorship.disclosureText || 
                  'This post is sponsored content. All opinions are my own and I only promote products/services I genuinely recommend.'}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
