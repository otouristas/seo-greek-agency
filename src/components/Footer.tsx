import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const sections = [
    {
      title: 'Services',
      links: [
        { label: 'All Services', href: '/services' },
        { label: 'Keyword Research', href: '/services/keyword-research' },
        { label: 'On-Page SEO', href: '/services/on-page-seo' },
        { label: 'Off-Page SEO', href: '/services/off-page-seo' },
        { label: 'Local SEO', href: '/services/local-seo' },
        { label: 'Technical SEO', href: '/services/technical-seo' },
        { label: 'Content Marketing', href: '/services/content-marketing' },
        { label: 'E-commerce SEO', href: '/services/ecommerce-seo' },
        { label: 'SEO Audits', href: '/services/seo-audits' },
        { label: 'Analytics & Reporting', href: '/services/analytics-reporting' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Portfolio', href: '/portfolio' },
        { label: 'Clients', href: '/clients' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Free SEO Audit', href: '/free-seo-audit' },
        { label: 'FAQs', href: '/faq' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'SEO Tools', href: '/tools' },
        { label: 'Blog', href: '/blog' }
      ]
    }
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-4 md:col-span-2">
            <div className="mb-6">
              <Image
                src="/logo.svg"
                alt="Another SEO Guru"
                width={180}
                height={45}
                className="brightness-200"
              />
            </div>
            <p className="mb-6 text-gray-400 max-w-md">
              Empowering businesses with data-driven SEO strategies and proven results. 
              Your success is our priority.
            </p>
            <div className="space-x-4">
              {/* Social Media Icons */}
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="inline-block text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-block text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="inline-block text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services - Wider Column */}
          <div className="lg:col-span-3 md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">{sections[0].title}</h3>
            <ul className="space-y-2">
              {sections[0].links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Resources - Regular Columns */}
          {sections.slice(1).map((section, index) => (
            <div key={index} className="lg:col-span-2 md:col-span-1">
              <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              &copy; {currentYear} Another SEO Guru. All rights reserved.
            </div>
            <div className="space-x-6">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
