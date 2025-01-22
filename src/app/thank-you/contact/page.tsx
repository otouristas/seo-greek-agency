import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export default function ThankYouContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 mx-auto mb-8 bg-green-100 rounded-full flex items-center justify-center">
            <svg
              className="w-10 h-10 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-4xl font-bold mb-6">
            Thank You for Contacting Us!
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            We've received your message and appreciate you reaching out. One of our
            SEO experts will get back to you within 24 hours.
          </p>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">What to Expect</h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  1
                </div>
                <div>
                  <h3 className="font-semibold">Initial Review</h3>
                  <p className="text-gray-600">
                    Our team will review your inquiry and prepare relevant information
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  2
                </div>
                <div>
                  <h3 className="font-semibold">Personal Response</h3>
                  <p className="text-gray-600">
                    An SEO expert will contact you to discuss your needs in detail
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  3
                </div>
                <div>
                  <h3 className="font-semibold">Custom Solution</h3>
                  <p className="text-gray-600">
                    We'll provide tailored recommendations for your business
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-gray-600">
              In the meantime, explore how we've helped other businesses succeed:
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/portfolio"
                className="px-6 py-3 bg-white text-blue-600 rounded-full border-2 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                View Our Portfolio
              </Link>
              <Link
                href="/case-studies"
                className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                Read Case Studies
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t">
              <p className="text-gray-600 mb-4">
                Need immediate assistance? Reach out directly:
              </p>
              <div className="flex flex-wrap gap-6 justify-center">
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +1 (555) 123-4567
                </a>
                <a
                  href="mailto:info@anotherseo.guru"
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  info@anotherseo.guru
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Thank You | Message Received',
  description: 'Thank you for contacting SEO Greek Agency. We\'ll get back to you shortly.',
  alternates: {
    canonical: '/thank-you/contact',
  },
  openGraph: {
    title: 'Thank You | Message Received',
    description: 'Thank you for contacting SEO Greek Agency. We\'ll get back to you shortly.',
    type: 'website',
    url: '/thank-you/contact',
    images: [
      {
        url: '/images/thank-you-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Thank You for Contacting Us',
      },
    ],
  },
}
