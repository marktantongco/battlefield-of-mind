import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { generatePageMetadata } from '@/lib/seo';
import { Brain, Sparkles, Heart, Target, Users, Zap } from 'lucide-react';

export const metadata = generatePageMetadata({
  title: 'About MindScape AI - Our Mission & Vision',
  description: 'Learn about MindScape AI - where mental transformation meets AI-powered creativity. Discover our mission to empower individuals through synergized personal growth and content creation.',
  keywords: ['about us', 'mission', 'vision', 'mental health platform', 'AI tools'],
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20">
      <Navigation />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              About MindScape AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Where mental transformation meets AI-powered creativity
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 mb-12">
            <div className="flex items-center mb-6">
              <Target className="w-12 h-12 text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              At MindScape AI, we believe that true success comes from the synergy between <span className="font-bold text-purple-600 dark:text-purple-400">inner transformation</span> and <span className="font-bold text-blue-600 dark:text-blue-400">outer creation</span>.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Our platform empowers individuals to master their mindset through proven psychological frameworks while leveraging cutting-edge AI tools to amplify their creative potential. We don't just provide tools – we facilitate transformation.
            </p>
          </div>

          {/* Core Values */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: Brain,
                title: 'Mental Transformation',
                description: 'Navigate the battlefield of your mind. Transform limiting beliefs into empowering truths through interactive frameworks.',
                gradient: 'from-purple-500 to-pink-500',
              },
              {
                icon: Sparkles,
                title: 'AI-Powered Creation',
                description: 'Harness artificial intelligence to amplify your creativity. Generate, optimize, and publish content at scale.',
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                icon: Heart,
                title: 'Emotional Wellness',
                description: 'Track your moods, build self-awareness, and gain insights into your emotional patterns over time.',
                gradient: 'from-pink-500 to-rose-500',
              },
              {
                icon: Zap,
                title: 'Continuous Growth',
                description: 'Build sustainable habits through daily tracking, progress monitoring, and personalized insights.',
                gradient: 'from-orange-500 to-amber-500',
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${value.gradient} mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* The Synergy */}
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-3xl p-8 md:p-12 border-2 border-purple-300 dark:border-purple-700 mb-12">
            <div className="flex items-center justify-center mb-6">
              <Brain className="w-8 h-8 text-purple-600" />
              <span className="text-2xl mx-4">+</span>
              <Sparkles className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
              The Perfect Synergy
            </h2>
            <p className="text-lg text-center text-gray-700 dark:text-gray-300 leading-relaxed">
              Inner transformation fuels outer creation. Master your mindset through the Battlefield, track your emotional wellness with the Mood Tracker, then channel that clarity into powerful content with AI tools. <span className="font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Transform yourself, transform your world.</span>
            </p>
          </div>

          {/* Who We Serve */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center mb-6">
              <Users className="w-12 h-12 text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Who We Serve</h2>
            </div>
            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
              <p>
                <span className="font-bold text-purple-600 dark:text-purple-400">Content Creators</span> who want to scale their output while maintaining authenticity and mental wellness.
              </p>
              <p>
                <span className="font-bold text-blue-600 dark:text-blue-400">Personal Growth Seekers</span> who are ready to transform limiting beliefs and build sustainable mental health practices.
              </p>
              <p>
                <span className="font-bold text-pink-600 dark:text-pink-400">Entrepreneurs & Innovators</span> who understand that success starts from within and amplifies outward.
              </p>
              <p>
                <span className="font-bold text-orange-600 dark:text-orange-400">Anyone</span> committed to becoming the best version of themselves while leveraging technology to maximize their impact.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
