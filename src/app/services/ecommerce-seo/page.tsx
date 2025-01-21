import Image from 'next/image'
import Hero from '@/components/Hero'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

export default function EcommerceSEOPage() {
  const services = [
    {
      title: 'Product Page Optimization',
      description: 'Optimize product pages for maximum visibility and conversions',
      icon: '/icons/product-page.svg'
    },
    {
      title: 'Category Page SEO',
      description: 'Structure and optimize category pages for better rankings',
      icon: '/icons/category-page.svg'
    },
    {
      title: 'Product Schema',
      description: 'Implement rich product schema for enhanced search results',
      icon: '/icons/product-schema.svg'
    },
    {
      title: 'Site Architecture',
      description: 'Optimize your e-commerce site structure for better crawling',
      icon: '/icons/site-structure.svg'
    },
    {
      title: 'Internal Linking',
      description: 'Strategic internal linking for better product discovery',
      icon: '/icons/internal-linking.svg'
    },
    {
      title: 'Conversion Optimization',
      description: 'Improve product page conversion rates',
      icon: '/icons/conversion.svg'
    }
  ]

  const platforms = [
    {
      name: 'Shopify',
      logo: '/platforms/shopify.svg'
    },
    {
      name: 'WooCommerce',
      logo: '/platforms/woocommerce.svg'
    },
    {
      name: 'Magento',
      logo: '/platforms/magento.svg'
    },
    {
      name: 'BigCommerce',
      logo: '/platforms/bigcommerce.svg'
    }
  ]

  const benefits = [
    'Higher product visibility in search results',
    'Increased organic traffic to product pages',
    'Better conversion rates',
    'Improved user experience',
    'Enhanced product rich snippets',
    'Better category page rankings',
    'Reduced cart abandonment',
    'Higher average order value'
  ]

  return (
    <div className="pb-20">
      <Hero 
        title="E-commerce SEO Services"
        description="Drive more sales with optimized product pages and category structures"
        height="small"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Turn Your Online Store into a Sales Machine
          </h2>
          <p className="text-lg text-gray-600">
            Our e-commerce SEO services help you optimize your online store for
            better visibility, higher conversions, and increased sales through
            organic search traffic.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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

        {/* Product Page Example */}
        <div className="bg-gray-50 rounded-2xl p-12 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Optimized Product Pages That Convert
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/services/product-page-example.svg"
                alt="Optimized Product Page Example"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Schema Example */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">
            Rich Product Schema Implementation
          </h3>
          <div className="bg-gray-900 text-gray-300 p-6 rounded-xl">
            <pre className="overflow-x-auto">
              <code>{`{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Example Product",
  "image": "https://example.com/product.jpg",
  "description": "Product description...",
  "brand": {
    "@type": "Brand",
    "name": "Brand Name"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "99.99",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "89"
  }
}`}</code>
            </pre>
          </div>
        </div>

        {/* Platform Support */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-12">
            Supported E-commerce Platforms
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-lg">
                <Image
                  src={platform.logo}
                  alt={platform.name}
                  width={150}
                  height={50}
                  className="mx-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Analytics Dashboard */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">
            Track Your E-commerce Performance
          </h3>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/services/ecommerce-analytics.svg"
              alt="E-commerce Analytics Dashboard"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
