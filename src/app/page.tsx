import { getPosts } from '@/lib/wordpress'
import { BlogCard } from '@/components/BlogCard'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Brain, Sparkles, Zap, TrendingUp, Users, BookOpen } from 'lucide-react'

export default async function Home() {
  // Safely fetch posts, fallback to empty array if WordPress not configured
  let posts = []
  try {
    posts = await getPosts()
  } catch (error) {
    console.log('WordPress not configured, showing demo content')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section - Dual Theme */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center max-w-5xl mx-auto mb-16">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                Transform Your Mind.
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-500 bg-clip-text text-transparent">
                Create with AI.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Where mental transformation meets AI-powered creativity. 
              A synergized platform for personal growth and content innovation.
            </p>
          </div>

          {/* Dual Theme Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Battlefield Theme */}
            <Link href="/battlefield" className="group">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-red-500/10 border-2 border-amber-500/20 hover:border-amber-500/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated Background Patterns */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-10 right-10 w-32 h-32 bg-amber-500 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-10 left-10 w-40 h-40 bg-orange-500 rounded-full blur-3xl"></div>
                </div>

                <div className="relative p-8 md:p-12">
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <div className="ml-4">
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Battlefield of the Mind
                      </h2>
                      <p className="text-amber-600 dark:text-amber-400 font-medium">Mental Transformation</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                    Navigate your inner landscape. Transform limiting beliefs into empowering truths through interactive exercises and proven frameworks.
                  </p>

                  <div className="space-y-3 mb-8">
                    {[
                      'Identify & reframe limiting thoughts',
                      '4-step relationship repair process',
                      'Transform scars into bridges',
                      'Build your mission architecture'
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center text-gray-600 dark:text-gray-400">
                        <Zap className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-amber-600 dark:text-amber-400 group-hover:translate-x-2 transition-transform duration-300">
                      Start Your Journey →
                    </span>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-500">Personal Growth</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* AI Blog Theme */}
            <Link href="/ai-tools" className="group">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-teal-500/10 border-2 border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated Background Patterns */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-10 left-10 w-40 h-40 bg-cyan-500 rounded-full blur-3xl"></div>
                </div>

                <div className="relative p-8 md:p-12">
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <div className="ml-4">
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        AI Creation Studio
                      </h2>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">Content Innovation</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                    Harness AI to amplify your creativity. Generate ideas, optimize content, and build your digital presence with cutting-edge tools.
                  </p>

                  <div className="space-y-3 mb-8">
                    {[
                      'AI-powered content generation',
                      'SEO optimization tools',
                      'Multi-language translation',
                      'Smart monetization strategies'
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center text-gray-600 dark:text-gray-400">
                        <Sparkles className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-2 transition-transform duration-300">
                      Explore AI Tools →
                    </span>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-500">Creator Tools</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Synergy Statement */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full mb-6">
              <div className="flex items-center space-x-3">
                <Brain className="w-6 h-6 text-purple-600" />
                <span className="text-2xl">+</span>
                <Sparkles className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              The Perfect Synergy
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Inner transformation fuels outer creation. Master your mindset through the Battlefield, 
              then channel that clarity into powerful content with AI tools. 
              <span className="font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {" "}Transform yourself, transform your world.
              </span>
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        {posts.length > 0 && (
          <section className="container mx-auto px-4 mb-20">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  Latest Insights
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Explore articles on personal growth and AI innovation
                </p>
              </div>
              <Link 
                href="/blog"
                className="hidden md:flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium"
              >
                <BookOpen className="w-5 h-5" />
                <span>View All</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.slice(0, 6).map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Begin?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Choose your path: Transform your mind or unleash your creativity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/battlefield"
                className="px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
              >
                Start Battlefield Journey
              </Link>
              <Link
                href="/ai-tools"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/20 transition-all hover:scale-105 border-2 border-white/30"
              >
                Explore AI Tools
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
