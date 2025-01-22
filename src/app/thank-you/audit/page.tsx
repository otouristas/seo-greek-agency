import Image from 'next/image'
import Link from 'next/link'

export default function ThankYouAuditPage() {
  export const metadata: Metadata = {
    title: 'Thank You | SEO Audit Request Received',
    description: 'Thank you for requesting an SEO audit. We\'ll analyze your website and get back to you with our findings.',
    alternates: {
      canonical: '/thank-you/audit',
    },
    openGraph: {
      title: 'Thank You | SEO Audit Request Received',
      description: 'Thank you for requesting an SEO audit. We\'ll analyze your website and get back to you with our findings.',
    },
  };

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
            Thank You for Requesting Your Free SEO Audit!
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            We've received your request and our team of SEO experts is already working
            on your comprehensive website audit. You'll receive your personalized report
            within the next 24-48 hours.
          </p>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">What's Next?</h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  1
                </div>
                <div>
                  <h3 className="font-semibold">Audit Preparation</h3>
                  <p className="text-gray-600">
                    Our team will analyze your website's current SEO performance
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  2
                </div>
                <div>
                  <h3 className="font-semibold">Report Generation</h3>
                  <p className="text-gray-600">
                    We'll create a detailed report with actionable recommendations
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  3
                </div>
                <div>
                  <h3 className="font-semibold">Email Delivery</h3>
                  <p className="text-gray-600">
                    You'll receive your audit report via email within 24-48 hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600">
              While you wait, why not check out our latest SEO insights?
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/blog"
                className="px-6 py-3 bg-white text-blue-600 rounded-full border-2 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                Read Our Blog
              </Link>
              <Link
                href="/portfolio"
                className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
