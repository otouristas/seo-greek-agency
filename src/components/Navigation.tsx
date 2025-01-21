'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

const services = [
  { name: 'Keyword Research & Strategy', href: '/services/keyword-research' },
  { name: 'On-Page SEO', href: '/services/on-page-seo' },
  { name: 'Off-Page SEO', href: '/services/off-page-seo' },
  { name: 'Local SEO', href: '/services/local-seo' },
  { name: 'Technical SEO', href: '/services/technical-seo' },
  { name: 'Content Marketing', href: '/services/content-marketing' },
  { name: 'E-commerce SEO', href: '/services/ecommerce-seo' },
  { name: 'SEO Audits', href: '/services/seo-audits' },
  { name: 'Analytics & Reporting', href: '/services/analytics-reporting' }
]

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'Services', 
    href: '/services',
    submenu: services
  },
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Clients', href: '/clients' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' }
]

export default function Navigation() {
  const [showServices, setShowServices] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowServices(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.svg"
              alt="Another SEO Guru"
              width={180}
              height={45}
              priority
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              item.submenu ? (
                <div key={item.name} className="relative" ref={dropdownRef}>
                  <button
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setShowServices(!showServices)}
                  >
                    {item.name}
                    <ChevronDownIcon className={`w-4 h-4 ml-1 transition-transform ${showServices ? 'rotate-180' : ''}`} />
                  </button>

                  {showServices && (
                    <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
                      <div className="grid grid-cols-1 gap-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            onClick={() => setShowServices(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/free-seo-audit"
            className="hidden md:inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-colors"
          >
            Free SEO Audit
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16m-16 6h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg py-4 px-4 z-50">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                item.submenu ? (
                  <div key={item.name}>
                    <button
                      className="flex items-center justify-between w-full text-gray-600"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    >
                      {item.name}
                      <ChevronDownIcon className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileServicesOpen && (
                      <div className="mt-2 ml-4 flex flex-col space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                            onClick={() => {
                              setMobileMenuOpen(false)
                              setMobileServicesOpen(false)
                            }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <Link
                href="/free-seo-audit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Free SEO Audit
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
