import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import Hero from '@/components/Hero'

interface Service {
  title: string;
  description: string;
  features: string[];
  icon: string;
  href: string;
}

export const metadata: Metadata = {
  title: 'Our SEO Services | Professional SEO Solutions',
  description: 'Comprehensive SEO services tailored to your business needs. From technical SEO to content optimization, we help you achieve sustainable organic growth.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Our SEO Services | Professional SEO Solutions',
    description: 'Comprehensive SEO services tailored to your business needs. From technical SEO to content optimization, we help you achieve sustainable organic growth.',
  },
  twitter: {
    title: 'Our SEO Services | Professional SEO Solutions',
    description: 'Comprehensive SEO services tailored to your business needs. From technical SEO to content optimization, we help you achieve sustainable organic growth.',
  }
}

export default function ServicesPage() {
  const services: Service[] = [
    {
      title: 'Keyword Research & Strategy',
      description: 'Discover untapped opportunities and outrank competitors with our data-driven keyword research methodology.',
      features: [
        'Competitor keyword analysis',
        'Long-tail keyword opportunities',
        'Search intent optimization',
        'Keyword difficulty assessment'
      ],
      icon: '🎯',
      href: '/services/keyword-research'
    },
    {
      title: 'On-Page SEO',
      description: 'Transform your content into a ranking powerhouse with our expert on-page optimization techniques.',
      features: [
        'Title tag optimization',
        'Meta description optimization',
        'Header structure',
        'Internal linking strategy'
      ],
      icon: '📝',
      href: '/services/on-page-seo'
    },
    {
      title: 'Off-Page SEO (Link Building)',
      description: 'Build authority and trust through strategic partnerships and high-quality backlinks.',
      features: [
        'Quality link prospecting',
        'Digital PR campaigns',
        'Content outreach',
        'Brand mentions monitoring'
      ],
      icon: '🔗',
      href: '/services/off-page-seo'
    },
    {
      title: 'Local SEO',
      description: 'Dominate your local market and attract more customers from your area with targeted optimization.',
      features: [
        'Google Business Profile optimization',
        'Local citation building',
        'Review management',
        'Local content strategy'
      ],
      icon: '📍',
      href: '/services/local-seo'
    },
    {
      title: 'Technical SEO',
      description: 'Ensure peak performance with comprehensive technical optimization and monitoring.',
      features: [
        'Site speed optimization',
        'Mobile responsiveness',
        'XML sitemap management',
        'Robots.txt configuration'
      ],
      icon: '⚙️',
      href: '/services/technical-seo'
    },
    {
      title: 'Content Marketing',
      description: 'Create engaging, SEO-optimized content that converts visitors into loyal customers.',
      features: [
        'Content strategy development',
        'Blog post creation',
        'Content optimization',
        'Content performance tracking'
      ],
      icon: '✍️',
      href: '/services/content-marketing'
    },
    {
      title: 'E-commerce SEO',
      description: 'Boost your online store\'s visibility and sales with specialized e-commerce optimization.',
      features: [
        'Product page optimization',
        'Category page structure',
        'Schema markup implementation',
        'Shopping feed optimization'
      ],
      icon: '🛍️',
      href: '/services/ecommerce-seo'
    },
    {
      title: 'SEO Audits',
      description: 'Get a comprehensive analysis of your website\'s SEO performance and growth opportunities.',
      features: [
        'Technical audit',
        'Content audit',
        'Competitor analysis',
        'Action plan development'
      ],
      icon: '📊',
      href: '/services/seo-audits'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Make data-driven decisions with clear, actionable insights and detailed reporting.',
      features: [
        'Custom dashboard setup',
        'Monthly performance reports',
        'ROI tracking',
        'Goal monitoring'
      ],
      icon: '📈',
      href: '/services/analytics-reporting'
    }
  ]

  return (
    <div className="pb-20">
      <Hero 
        title="Elevate Your Digital Presence with SEO"
        description="Comprehensive SEO solutions tailored to your business needs, from technical optimization to content strategy."
        height="large"
      />

      {/* Quick Stats */}
      <div className="container mx-auto px-4 -mt-20 relative z-10">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-1 text-blue-600">9+</div>
              <div className="text-sm text-gray-600">Core Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1 text-blue-600">300%</div>
              <div className="text-sm text-gray-600">Traffic Growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1 text-blue-600">24/7</div>
              <div className="text-sm text-gray-600">Support & Monitoring</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    href={service.href}
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
