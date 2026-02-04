import { ExternalLink } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { AffiliateLink as AffiliateLinkType } from '@/types/monetization'

interface AffiliateLinkProps {
  link: AffiliateLinkType
  showDisclosure?: boolean
}

export function AffiliateLink({ link, showDisclosure = true }: AffiliateLinkProps) {
  const platformColors = {
    amazon: 'bg-orange-500',
    lazada: 'bg-blue-500',
    shopee: 'bg-orange-600',
  }

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge className={platformColors[link.platform]}>
                {link.platform.toUpperCase()}
              </Badge>
              {showDisclosure && (
                <span className="text-xs text-muted-foreground">Affiliate Link</span>
              )}
            </div>
            <h4 className="font-semibold mb-1">{link.productName}</h4>
            {link.price && (
              <p className="text-lg font-bold text-primary">{link.price}</p>
            )}
          </div>
          {link.imageUrl && (
            <img
              src={link.imageUrl}
              alt={link.productName}
              className="w-20 h-20 object-cover rounded"
            />
          )}
        </div>
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-3"
        >
          View Product <ExternalLink className="h-3 w-3" />
        </a>
      </CardContent>
    </Card>
  )
}

export function AffiliateDisclosure() {
  return (
    <div className="bg-muted/50 border border-border rounded-lg p-4 my-6">
      <p className="text-sm text-muted-foreground">
        <strong>Affiliate Disclosure:</strong> This post contains affiliate links. 
        When you purchase through these links, I may earn a commission at no additional 
        cost to you. I only recommend products and services I personally use and believe 
        will add value to my readers. Your support helps keep this blog running. Thank you! 🙏
      </p>
    </div>
  )
}
