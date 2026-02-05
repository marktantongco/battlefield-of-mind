import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { generatePageMetadata } from '@/lib/seo';
import { FileText, CheckCircle, AlertTriangle } from 'lucide-react';

export const metadata = generatePageMetadata({
  title: 'Terms of Service - MindScape AI',
  description: 'Terms and conditions for using MindScape AI platform. Read our terms of service, user agreements, and guidelines.',
  keywords: ['terms of service', 'terms and conditions', 'user agreement', 'legal'],
  path: '/terms-of-service',
});

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20">
      <Navigation />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <FileText className="w-16 h-16 text-purple-600 mx-auto mb-4" />
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 space-y-8">
            
            {/* Introduction */}
            <section>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Welcome to MindScape AI. By accessing or using our platform, you agree to be bound by these Terms of Service. Please read them carefully.
              </p>
            </section>

            {/* Acceptance */}
            <section>
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">1. Acceptance of Terms</h2>
              </div>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  By accessing and using MindScape AI, you accept and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our service.
                </p>
              </div>
            </section>

            {/* Description of Service */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Description of Service</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>MindScape AI provides:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Mental transformation tools (Battlefield of the Mind)</li>
                  <li>Mood tracking and emotional wellness features</li>
                  <li>AI-powered content creation tools</li>
                  <li>Personal growth resources and frameworks</li>
                </ul>
              </div>
            </section>

            {/* User Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. User Responsibilities</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>You agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate information when using our services</li>
                  <li>Use the platform for lawful purposes only</li>
                  <li>Respect intellectual property rights</li>
                  <li>Not attempt to hack, disrupt, or abuse our systems</li>
                  <li>Not use the platform to harm others</li>
                  <li>Take responsibility for your own mental health decisions</li>
                </ul>
              </div>
            </section>

            {/* Not Medical Advice */}
            <section className="bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl p-6 border-2 border-yellow-300 dark:border-yellow-700">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Medical Disclaimer</h2>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">
                      MindScape AI is NOT a substitute for professional mental health care.
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Our tools are for personal growth and self-reflection only</li>
                      <li>We do not provide medical, psychological, or therapeutic advice</li>
                      <li>Always consult qualified healthcare professionals for mental health concerns</li>
                      <li>In case of emergency, contact local emergency services immediately</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Data and Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Data and Privacy</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  Your data is primarily stored locally in your browser:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Battlefield responses are stored locally on your device</li>
                  <li>Mood tracker entries remain on your device</li>
                  <li>We collect anonymized analytics for service improvement</li>
                  <li>See our Privacy Policy for complete details</li>
                </ul>
              </div>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Intellectual Property</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  All content, features, and functionality of MindScape AI are owned by us and protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p>
                  You may not:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Copy, modify, or distribute our content without permission</li>
                  <li>Use our branding or logos without authorization</li>
                  <li>Reverse engineer or attempt to extract source code</li>
                </ul>
              </div>
            </section>

            {/* AI-Generated Content */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. AI-Generated Content</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  For AI tools:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Content generated is provided "as is"</li>
                  <li>You are responsible for reviewing and editing AI output</li>
                  <li>We do not guarantee accuracy or quality of AI content</li>
                  <li>You retain rights to content you create using our tools</li>
                </ul>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Limitation of Liability</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  To the maximum extent permitted by law:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We provide the service "as is" without warranties</li>
                  <li>We are not liable for indirect, incidental, or consequential damages</li>
                  <li>We do not guarantee uninterrupted or error-free service</li>
                  <li>You use the service at your own risk</li>
                </ul>
              </div>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Modifications to Service</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We reserve the right to modify, suspend, or discontinue any part of our service at any time with or without notice. We will not be liable for any modification, suspension, or discontinuance.
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Termination</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  We may terminate or suspend your access to our service:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>For violations of these Terms</li>
                  <li>For abusive or harmful behavior</li>
                  <li>At our discretion for any reason</li>
                </ul>
              </div>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Governing Law</h2>
              <p className="text-gray-700 dark:text-gray-300">
                These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">12. Changes to Terms</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We may update these Terms of Service from time to time. We will notify you of material changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of the service constitutes acceptance of the updated terms.
              </p>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl p-6 border-2 border-purple-300 dark:border-purple-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Email: <a href="mailto:legal@mindscape-ai.com" className="text-purple-600 dark:text-purple-400 font-medium hover:underline">legal@mindscape-ai.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
