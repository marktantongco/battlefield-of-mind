import { getPosts } from '@/lib/wordpress'
import { BlogCard } from '@/components/BlogCard'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { DonationWidget } from '@/components/monetization/DonationWidget'
import { NewsletterSignup } from '@/components/NewsletterSignup'
import Link from 'next/link'

export default async function Home() {
  // Safely fetch posts, fallback to empty array if WordPress not configured
  let posts = []
  try {
    posts = await getPosts()
  } catch (error) {
    console.log('WordPress not configured, showing demo content')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI-Powered Blog Platform
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Empowering Philippine creators with AI-enhanced content creation, 
            SEO optimization, and smart monetization strategies.
          </p>
        </section>

        {/* Newsletter Signup */}
        <section className="mb-12">
          <NewsletterSignup />
        </section>

        {/* Battlefield App Highlight */}
        <section className="mb-12 bg-gradient-to-br from-amber-500/10 to-orange-600/10 border border-amber-500/20 rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              🧠 Battlefield of the Mind
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              An interactive journey through personal conflict resolution and mental transformation. 
              Transform limiting thoughts into winning stories.
            </p>
            <Link 
              href="/battlefield"
              className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-105"
            >
              Start Your Journey →
            </Link>
          </div>
        </section>

        {/* Blog Posts Grid */}
        {posts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* Donation Widget */}
        <section className="mb-12">
          <DonationWidget />
        </section>
      </main>

      <Footer />
    </div>
  )
}
