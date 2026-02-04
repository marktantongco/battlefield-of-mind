export interface DonationAmount {
  value: number
  label: string
  description?: string
}

export interface AffiliateLink {
  url: string
  platform: 'amazon' | 'lazada' | 'shopee'
  productName: string
  price?: string
  imageUrl?: string
}

export interface SponsoredPost {
  isSponsored: boolean
  sponsorName?: string
  sponsorLogo?: string
  disclosureText?: string
}

export interface MonetizationConfig {
  donations: {
    enabled: boolean
    amounts: DonationAmount[]
    stripeEnabled: boolean
  }
  affiliates: {
    enabled: boolean
    platforms: ('amazon' | 'lazada' | 'shopee')[]
    disclosureText: string
  }
  newsletter: {
    enabled: boolean
    paidTier: boolean
    price?: number
  }
}
