import Image from 'next/image'
import Hero from '@/components/Hero'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

export default function TechnicalSEOPage() {
  const services = [
    {
      title: 'Site Architecture',
      description: 'Optimize your website structure for better crawling and indexing',
      icon: '/icons/site-architecture.svg'
    },
    {
      title: 'Page Speed',
      description: 'Improve loading times across all devices',
      icon: '/icons/page-speed.svg'
    },
    {
      title: 'Mobile Optimization',
      description: 'Ensure perfect performance on all mobile devices',
      icon: '/icons/mobile.svg'
    },
    {
      title: 'Schema Markup',
      description: 'Implement structured data for rich snippets',
      icon: '/icons/schema-markup.svg'
    },
    {
      title: 'XML Sitemaps',
      description: 'Create and optimize sitemaps for better indexing',
      icon: '/icons/sitemap.svg'
    },
    {
      title: 'Security (HTTPS)',
      description: 'Ensure your site is secure and trusted',
      icon: '/icons/security.svg'
    },
    {
      title: 'Crawl Optimization',
      description: 'Optimize crawl budget and efficiency',
      icon: '/icons/crawl.svg'
    },
    {
      title: 'Core Web Vitals',
      description: 'Meet Google\'s page experience signals',
      icon: '/icons/core-web-vitals.svg'
    }
  ]

  const metrics = [
    {
      label: 'LCP',
      title: 'Largest Contentful Paint',
      target: '< 2.5s',
      icon: '/icons/lcp.svg'
    },
    {
      label: 'FID',
      title: 'First Input Delay',
      target: '< 100ms',
      icon: '/icons/fid.svg'
    },
    {
      label: 'CLS',
      title: 'Cumulative Layout Shift',
      target: '< 0.1',
      icon: '/icons/cls.svg'
    }
  ]

  return (
    <div className="pb-20">
      <Hero 
        title="Technical SEO Services"
        description="Build a strong technical foundation for your website's success"
        height="small"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Optimize Your Website's Technical Performance
          </h2>
          <p className="text-lg text-gray-600">
            Our technical SEO services ensure your website meets and exceeds modern
            technical standards, providing the best possible experience for both
            users and search engines.
          </p>
        </div>

        {/* Technical Audit Visualization */}
        <div className="relative h-[400px] mb-20">
          <Image
            src="/services/tech-audit-viz.svg"
            alt="Technical SEO Audit"
            fill
            className="object-contain"
          />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="relative w-16 h-16 mb-6">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Core Web Vitals Section */}
        <div className="bg-gray-50 rounded-2xl p-12 mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">
            Core Web Vitals Optimization
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <Image
                    src={metric.icon}
                    alt={metric.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {metric.label}
                </div>
                <h4 className="text-lg font-semibold mb-2">{metric.title}</h4>
                <p className="text-green-500 font-semibold">Target: {metric.target}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools We Use */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-12">
            Professional Tools We Use
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-lg flex items-center justify-center">
              <Image
                src="/logos/Screaming Frog.svg"
                alt="Screaming Frog"
                width={150}
                height={50}
                className="object-contain"
              />
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg flex items-center justify-center">
              <Image
                src="/logos/google_analytics.svg"
                alt="Google Analytics"
                width={150}
                height={50}
                className="object-contain"
              />
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg flex items-center justify-center">
              <Image
                src="/logos/google-pagespeed-insights-icon-2021-.svg"
                alt="PageSpeed Insights"
                width={150}
                height={50}
                className="object-contain"
              />
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg flex items-center justify-center">
              <Image
                src="/logos/google-search-console.svg"
                alt="Google Search Console"
                width={150}
                height={50}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Schema Markup Example */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12">
            Schema Markup Implementation
          </h3>
          <div className="bg-gray-900 text-gray-300 p-6 rounded-xl">
            <pre className="overflow-x-auto">
              <code>{`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Your Business Name",
  "image": "https://example.com/image.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Example St",
    "addressLocality": "City",
    "addressRegion": "State",
    "postalCode": "12345",
    "addressCountry": "US"
  }
}`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
