'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent')
    if (!hasConsented) {
      setShowConsent(true)
    }
  }, [])

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all')
    setShowConsent(false)
  }

  const handleAcceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary')
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
          <div className="flex-1 pr-4">
            <h3 className="text-lg font-semibold mb-2">We value your privacy</h3>
            <p className="text-gray-600 text-sm mb-2">
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. 
              By clicking "Accept All", you consent to our use of cookies. Read our{' '}
              <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-700 underline">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link href="/cookie-policy" className="text-blue-600 hover:text-blue-700 underline">
                Cookie Policy
              </Link>{' '}
              to learn more.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <button
              onClick={handleAcceptNecessary}
              className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full transition-colors text-sm font-medium"
            >
              Accept Necessary
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors text-sm font-medium"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
