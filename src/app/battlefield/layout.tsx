import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Battlefield of the Mind - Transform Your Thinking',
  description: 'An interactive journey through personal conflict resolution and mental transformation. Move from victim to victor through AI-assisted recovery frameworks.',
  keywords: ['mental health', 'personal growth', 'conflict resolution', 'recovery', 'transformation', 'mindset', 'AI coaching'],
  authors: [{ name: 'Mark Tantongco' }],
  openGraph: {
    title: 'Battlefield of the Mind - Transform Your Thinking',
    description: 'Interactive recovery journey: Transform limiting thoughts into winning stories. Your scars become bridges.',
    type: 'website',
    url: 'https://your-domain.vercel.app/battlefield',
    images: [
      {
        url: '/og-battlefield.png',
        width: 1200,
        height: 630,
        alt: 'Battlefield of the Mind - Transform Your Thinking',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Battlefield of the Mind - Transform Your Thinking',
    description: 'Interactive recovery journey: Transform limiting thoughts into winning stories.',
    images: ['/og-battlefield.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://your-domain.vercel.app/battlefield',
  },
};

export default function BattlefieldLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
