'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-white to-red-50 px-4">
      <div className="text-center max-w-3xl mx-auto">
        <div className="mb-8 text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600">
          500
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          Server Error
        </h1>
        
        <div className="space-y-4 mb-8">
          <p className="text-xl text-gray-600">
            Our server is experiencing technical difficulties...
          </p>
          
          {/* SEO Joke Section */}
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 max-w-xl mx-auto">
            <p className="text-gray-700 italic">
              "What's an SEO expert's worst nightmare? A server that doesn't respond... just like your ex! 💔"
            </p>
          </div>
          
          {/* Server Status */}
          <div className="text-left bg-white/80 rounded-lg p-6 max-w-xl mx-auto">
            <h2 className="font-semibold text-gray-800 mb-2">Server Status Report:</h2>
            <div className="space-y-2 text-gray-600">
              <p>✗ Coffee Machine: Offline</p>
              <p>✗ Motivation: Not Found</p>
              <p>✗ Stack: Overflow</p>
              <p>✓ Sense of Humor: Still Working!</p>
            </div>
          </div>
        </div>
        
        <div className="space-x-4">
          <button
            onClick={reset}
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
          <Link 
            href="/"
            className="inline-block bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors"
          >
            Back to Safety
          </Link>
        </div>
        
        {/* Loading Animation */}
        <div className="mt-12 flex justify-center items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-600 animate-bounce"></div>
          <div className="w-3 h-3 rounded-full bg-orange-600 animate-bounce delay-150"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-600 animate-bounce delay-300"></div>
          <span className="ml-2 text-gray-600">Reticulating splines...</span>
        </div>
      </div>
    </div>
  )
}
