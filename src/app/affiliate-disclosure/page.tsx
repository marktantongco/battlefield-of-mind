import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { generatePageMetadata } from '@/lib/seo';
import { DollarSign, ExternalLink } from 'lucide-react';

export const metadata = generatePageMetadata({
  title: 'Affiliate Disclosure - MindScape AI',
  description: 'Learn about our affiliate partnerships and how we earn commissions from recommended products and services.',
  keywords: ['affiliate disclosure', 'partnerships', 'commissions', 'transparency'],
  path: '/affiliate-disclosure',
});

export default function AffiliateDisclosurePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20">
      <Navigation />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <DollarSign className="w-16 h-16 text-purple-600 mx-auto mb-4" />
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Affiliate Disclosure
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Transparency in our partnerships
            </p>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 space-y-8">
            
            {/* Introduction */}
            <section>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                MindScape AI is committed to transparency. This page discloses our affiliate relationships and how we may earn commissions from products and services we recommend.
              </p>
            </section>

            {/* What Are Affiliates */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What Are Affiliate Links?</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  Affiliate links are special tracking URLs that allow us to earn a commission when you purchase products or services through our recommendations. These commissions come at no additional cost to you.
                </p>
                <p>
                  When you click an affiliate link and make a purchase, the company pays us a small percentage of the sale. This helps support our platform and allows us to continue providing valuable content and tools.
                </p>
              </div>
            </section>

            {/* Our Commitment */}
            <section className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl p-6 border-2 border-purple-300 dark:border-purple-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Commitment to You</h2>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <ExternalLink className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong className="text-gray-900 dark:text-white">Honest Recommendations:</strong> We only recommend products and services we genuinely believe in and would use ourselves.</span>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong className="text-gray-900 dark:text-white">No Extra Cost:</strong> Affiliate commissions never increase the price you pay.</span>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong className="text-gray-900 dark:text-white">Full Disclosure:</strong> We clearly mark affiliate links when applicable.</span>
                </li>
                <li className="flex items-start">
                  <ExternalLink className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong className="text-gray-900 dark:text-white">Independent Reviews:</strong> Our opinions are not influenced by affiliate commissions.</span>
                </li>
              </ul>
            </section>

            {/* Where We Use Affiliates */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Where We Use Affiliate Links</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>You may find affiliate links in:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Blog posts and articles</li>
                  <li>Resource recommendations</li>
                  <li>Tool comparisons and reviews</li>
                  <li>AI service recommendations</li>
                  <li>Educational content</li>
                </ul>
              </div>
            </section>

            {/* Current Partnerships */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Current Affiliate Partnerships</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  We maintain affiliate relationships with various platforms and services that align with our mission. These may include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>AI writing and content creation tools</li>
                  <li>Mental health and wellness resources</li>
                  <li>Educational platforms and courses</li>
                  <li>Productivity and business tools</li>
                  <li>Web hosting and technical services</li>
                </ul>
                <p className="italic">
                  Note: This list is not exhaustive and may change over time.
                </p>
              </div>
            </section>

            {/* FTC Compliance */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">FTC Compliance</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  In accordance with FTC guidelines (16 CFR Part 255), we disclose that we may receive compensation for our recommendations. We comply with:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>The Federal Trade Commission's guidelines on endorsements</li>
                  <li>Requirements for clear and conspicuous disclosure</li>
                  <li>Truth-in-advertising standards</li>
                </ul>
              </div>
            </section>

            {/* Your Choice */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Your Choice</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  Using our affiliate links is entirely optional. You can:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Choose to support us by using our affiliate links</li>
                  <li>Navigate directly to the provider's website instead</li>
                  <li>Search for alternative products or services</li>
                </ul>
                <p>
                  Either way, we appreciate your trust in our recommendations and your support of our platform.
                </p>
              </div>
            </section>

            {/* Questions */}
            <section className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-300 dark:border-blue-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Questions?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you have questions about our affiliate relationships or this disclosure, please contact us:
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Email: <a href="mailto:affiliates@mindscape-ai.com" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">affiliates@mindscape-ai.com</a>
              </p>
            </section>

            {/* Thank You */}
            <section className="text-center">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Thank you for supporting MindScape AI. Your trust enables us to continue providing valuable resources for mental transformation and creative growth.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
