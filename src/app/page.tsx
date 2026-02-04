import { getPosts } from '@/lib/wordpress'
import { BlogCard } from '@/components/BlogCard'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { DonationWidget } from '@/components/monetization/DonationWidget'
import { NewsletterSignup } from '@/components/NewsletterSignup'

export default async function Home() {
  const posts = await getPosts()

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

        {/* Blog Posts Grid */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        {/* Donation Widget */}
        <section className="mb-12">
          <DonationWidget />
        </section>
      </main>

      <Footer />
    </div>
  )
}
