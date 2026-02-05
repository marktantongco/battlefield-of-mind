import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { generatePageMetadata } from '@/lib/seo';
import { Shield, Lock, Eye, Database, UserCheck } from 'lucide-react';

export const metadata = generatePageMetadata({
  title: 'Privacy Policy - MindScape AI',
  description: 'Learn how MindScape AI protects your privacy and handles your personal data. Our commitment to transparency and data security.',
  keywords: ['privacy policy', 'data protection', 'GDPR', 'personal information'],
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20">
      <Navigation />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-purple-600 mx-auto mb-4" />
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 space-y-8">
            
            {/* Introduction */}
            <section>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                At MindScape AI, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <div className="flex items-center mb-4">
                <Database className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Information We Collect</h2>
              </div>
              
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Personal Information</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Name and email address (when you contact us)</li>
                    <li>Usage data and analytics</li>
                    <li>Device and browser information</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Local Storage Data</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Battlefield progress and responses (stored locally in your browser)</li>
                    <li>Mood tracker entries (stored locally in your browser)</li>
                    <li>Theme preferences (dark/light mode)</li>
                    <li>This data never leaves your device unless you explicitly export it</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section>
              <div className="flex items-center mb-4">
                <UserCheck className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">How We Use Your Information</h2>
              </div>
              
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>To provide and maintain our service</li>
                <li>To respond to your inquiries and support requests</li>
                <li>To analyze usage patterns and improve our platform</li>
                <li>To send you updates and notifications (with your consent)</li>
                <li>To ensure security and prevent fraud</li>
              </ul>
            </section>

            {/* Data Storage and Security */}
            <section>
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Data Storage and Security</h2>
              </div>
              
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  <strong className="text-gray-900 dark:text-white">Local Storage:</strong> Your Battlefield progress and mood tracker data are stored locally in your browser using localStorage. This means:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Data never leaves your device</li>
                  <li>We cannot access your personal entries</li>
                  <li>You have full control to export or delete your data</li>
                  <li>Data persists across sessions but is specific to your browser</li>
                </ul>
                
                <p>
                  <strong className="text-gray-900 dark:text-white">Analytics:</strong> We use privacy-focused analytics (Google Analytics and Vercel Analytics) to understand usage patterns. These services may use cookies.
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-pink-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Your Rights</h2>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Export your data</li>
                <li>Opt-out of analytics tracking</li>
                <li>Object to data processing</li>
              </ul>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Cookies and Tracking</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  We use cookies and similar tracking technologies to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Remember your preferences (theme selection)</li>
                  <li>Analyze site usage and performance</li>
                  <li>Improve user experience</li>
                </ul>
                <p>
                  You can control cookies through your browser settings. Note that disabling cookies may affect functionality.
                </p>
              </div>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Third-Party Services</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>We use the following third-party services:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-gray-900 dark:text-white">Google Analytics:</strong> For usage analytics</li>
                  <li><strong className="text-gray-900 dark:text-white">Vercel:</strong> For hosting and performance analytics</li>
                  <li><strong className="text-gray-900 dark:text-white">Vercel Analytics:</strong> For website performance monitoring</li>
                </ul>
                <p>
                  These services have their own privacy policies governing their use of your information.
                </p>
              </div>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Children's Privacy</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Our service is not intended for users under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Changes to This Policy</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl p-6 border-2 border-purple-300 dark:border-purple-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Email: <a href="mailto:privacy@mindscape-ai.com" className="text-purple-600 dark:text-purple-400 font-medium hover:underline">privacy@mindscape-ai.com</a>
              </p>
            </section>

            {/* GDPR Notice */}
            <section className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-300 dark:border-blue-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                For European Users (GDPR)
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                If you are located in the European Economic Area (EEA), you have certain data protection rights under GDPR. We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your personal data.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
