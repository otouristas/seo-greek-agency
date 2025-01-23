'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useForm, ValidationError } from '@formspree/react'
import Hero from '@/components/Hero'
import CTAButton from '@/components/CTAButton'
import FAQAccordion from '@/components/FAQAccordion'

interface AuditFeature {
  title: string;
  description: string;
  icon: string;
}

export default function AuditPage() {
  const [state, handleSubmit] = useForm("mldgrlvb")

  const auditFeatures: AuditFeature[] = [
    {
      title: 'Technical SEO Analysis',
      description: 'In-depth analysis of your website\'s technical health, including site speed, mobile-friendliness, and crawlability.',
      icon: '🔍'
    },
    {
      title: 'Keyword Performance',
      description: 'Review of your current keyword rankings and identification of new ranking opportunities.',
      icon: '📈'
    },
    {
      title: 'Content Evaluation',
      description: 'Assessment of your content quality, relevance, and optimization for target keywords.',
      icon: '📝'
    },
    {
      title: 'Competitor Analysis',
      description: 'Comparison with top competitors to identify gaps and opportunities in your SEO strategy.',
      icon: '🎯'
    },
    {
      title: 'Backlink Profile',
      description: 'Review of your backlink profile quality and identification of link building opportunities.',
      icon: '🔗'
    },
    {
      title: 'Local SEO Check',
      description: 'Analysis of your local search presence and optimization for location-based queries.',
      icon: '📍'
    }
  ]

  const faqs = [
    {
      question: "What's included in the free SEO audit?",
      answer: "Our comprehensive SEO audit includes technical analysis, content evaluation, keyword research, competitor analysis, backlink profile review, and local SEO assessment. You'll receive actionable insights and recommendations for improvement."
    },
    {
      question: "How long does the audit take?",
      answer: "We typically complete the audit within 2-3 business days. For larger websites or more complex requirements, it might take a bit longer. We'll keep you updated on the progress."
    },
    {
      question: "Do I need to provide any information?",
      answer: "Just your website URL and basic contact information. If you have specific concerns or focus areas, let us know in the message field, and we'll pay extra attention to those aspects."
    },
    {
      question: "What happens after the audit?",
      answer: "You'll receive a detailed report with our findings and recommendations. We'll schedule a call to walk you through the results and answer any questions. If you'd like our help implementing the recommendations, we can discuss our SEO service packages."
    }
  ]

  if (state.succeeded) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center p-8 bg-green-50 rounded-lg">
          <h3 className="text-2xl font-medium text-green-800 mb-4">Thank you for requesting an SEO audit!</h3>
          <p className="text-green-600 mb-4">We'll analyze your website and get back to you within 2-3 business days with our findings.</p>
          <Link href="/" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50">
      <Hero
        title="Free SEO Audit"
        subtitle="Discover untapped opportunities to improve your website's search performance"
        image="/images/audit-hero.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">What's Included in Your Free Audit</h2>
          <p className="mt-4 text-lg text-gray-600">Get a comprehensive analysis of your website's SEO performance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {auditFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <div className="mt-1">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="john@example.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700">Website URL</label>
                <div className="mt-1">
                  <input
                    type="url"
                    name="website"
                    id="website"
                    required
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="https://example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Additional Information (Optional)</label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Tell us about your specific concerns or goals..."
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {state.submitting ? 'Submitting...' : 'Get Your Free SEO Audit'}
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Ranking Higher?</h2>
          <p className="text-lg text-gray-600 mb-8">Get your free SEO audit today and discover how to outrank your competitors</p>
          <CTAButton href="#audit-form">Request Your Free Audit</CTAButton>
        </div>
      </div>
    </div>
  )
}
