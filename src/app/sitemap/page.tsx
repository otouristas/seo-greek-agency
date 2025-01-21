import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/Hero'

interface SitemapSection {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
}

export default function SitemapPage() {
  const sitemapSections: SitemapSection[] = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Free SEO Audit', href: '/free-seo-audit' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'All Services', href: '/services' },
        { name: 'Keyword Research & Strategy', href: '/services#keyword-research' },
        { name: 'On-Page SEO', href: '/services#on-page-seo' },
        { name: 'Off-Page SEO', href: '/services#off-page-seo' },
        { name: 'Local SEO', href: '/services#local-seo' },
        { name: 'Technical SEO', href: '/services#technical-seo' },
        { name: 'Content Marketing', href: '/services#content-marketing' },
        { name: 'E-commerce SEO', href: '/services#ecommerce-seo' },
        { name: 'SEO Audits', href: '/services#seo-audits' },
        { name: 'Analytics & Reporting', href: '/services#analytics-reporting' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Clients', href: '/clients' },
        { name: 'FAQs', href: '/faq' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms of Service', href: '/terms-of-service' },
        { name: 'Sitemap', href: '/sitemap' }
      ]
    }
  ]

  return (
    <div className="pb-20">
      <Hero 
        title="Sitemap"
        description="Find everything you need on our website"
        height="small"
      />

      {/* Sitemap Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {sitemapSections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link 
                          href={link.href}
                          className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
