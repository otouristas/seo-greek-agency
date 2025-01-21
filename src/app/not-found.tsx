import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found | Even Google Can\'t Find This Page',
  description: 'Oops! Looks like this page is hiding better than a website without SEO. Let us help you find what you\'re looking for.',
}

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-white to-blue-50 px-4">
      <div className="text-center max-w-3xl mx-auto">
        <div className="mb-8 text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          404
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          Page Not Found
        </h1>
        
        <div className="space-y-4 mb-8">
          <p className="text-xl text-gray-600">
            Even our SEO experts couldn't rank this page...
          </p>
          
          {/* SEO Joke Section */}
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 max-w-xl mx-auto">
            <p className="text-gray-700 italic">
              "Why did the 404 page feel lonely? Because it had zero backlinks! 🔗"
            </p>
          </div>
          
          {/* SEO Tips */}
          <div className="text-left bg-white/80 rounded-lg p-6 max-w-xl mx-auto">
            <h2 className="font-semibold text-gray-800 mb-2">Quick SEO Tips While You're Here:</h2>
            <ul className="text-gray-600 space-y-2">
              <li>✓ Always use descriptive URLs</li>
              <li>✓ Create quality content</li>
              <li>✓ Don't forget your meta tags</li>
              <li>✓ Mobile-friendly is not optional</li>
            </ul>
          </div>
        </div>
        
        <div className="space-x-4">
          <Link 
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Back to Homepage
          </Link>
          <Link 
            href="/free-seo-audit"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
          >
            Get a Free SEO Audit
          </Link>
        </div>
        
        {/* Animated Search Bar */}
        <div className="mt-12 max-w-md mx-auto">
          <div className="relative">
            <div className="h-12 bg-white rounded-full border-2 border-gray-300 overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-2 bg-blue-600 animate-[search_2s_ease-in-out_infinite] motion-safe:animate-search"></div>
            </div>
            <div className="absolute right-4 top-3">
              <span className="text-gray-400">searching...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
