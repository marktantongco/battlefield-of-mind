import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mood Tracker - MindScape AI',
  description: 'Track your emotional journey and build self-awareness with our beautiful mood tracking tool. Log daily moods, energy levels, and see insights over time.',
  keywords: ['mood tracker', 'mental health', 'emotional wellness', 'self-awareness', 'journaling', 'mood journal'],
  openGraph: {
    title: 'Mood Tracker - Track Your Emotional Journey',
    description: 'Build self-awareness through daily mood tracking with beautiful visualizations and insights.',
    type: 'website',
  },
};

export default function MoodTrackerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
