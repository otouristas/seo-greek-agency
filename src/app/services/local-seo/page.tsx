import Image from 'next/image'
import Hero from '@/components/Hero'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Local SEO Services | Dominate Your Local Market',
  description: 'Attract local customers and dominate your city\'s search results with our targeted local SEO services. Optimize your Google My Business and local citations.',
  alternates: {
    canonical: 'https://kasiotisg.com/services/local-seo',
  }
}

export default function LocalSEOPage() {
  const features = [
    {
      title: 'Google Business Profile',
      description: 'Optimize your GBP listing for maximum local visibility',
      icon: '/icons/google-business.svg'
    },
    {
      title: 'Local Citations',
      description: 'Build consistent NAP across local directories',
      icon: '/icons/citations.svg'
    },
    {
      title: 'Local Link Building',
      description: 'Earn backlinks from local businesses and organizations',
      icon: '/icons/local-links.svg'
    },
    {
      title: 'Review Management',
      description: 'Monitor and respond to customer reviews effectively',
      icon: '/icons/reviews.svg'
    },
    {
      title: 'Local Content',
      description: 'Create location-specific content that resonates',
      icon: '/icons/local-content.svg'
    },
    {
      title: 'Local Schema',
      description: 'Implement local business schema markup',
      icon: '/icons/schema.svg'
    }
  ]

  const benefits = [
    'Increased local search visibility',
    'Higher conversion rates from local customers',
    'Better presence in Google Maps',
    'Improved customer trust and loyalty',
    'Enhanced mobile search performance',
    'More foot traffic to physical locations',
    'Better local brand awareness',
    'Higher quality customer reviews'
  ]

  return (
    <div className="pb-20">
      <Hero 
        title="Local SEO Services"
        description="Dominate your local market and attract nearby customers"
        height="small"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Connect with Local Customers When They Need You Most
          </h2>
          <p className="text-lg text-gray-600">
            Our local SEO services help your business stand out in local search results,
            Google Maps, and local directories, making it easier for nearby customers
            to find and choose your business.
          </p>
        </div>

        {/* Local Search Visualization */}
        <div className="relative h-[500px] mb-20">
          <Image
            src="/services/local-search-visualization.svg"
            alt="Local Search Results"
            fill
            className="object-contain"
          />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="relative w-16 h-16 mb-6">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Map Ranking Demo */}
        <div className="bg-gray-50 rounded-2xl p-12 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Improve Your Google Maps Rankings
              </h3>
              <p className="text-gray-600 mb-8">
                See how our local SEO services can improve your visibility in Google Maps
                and local search results, driving more customers to your business.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/services/google-maps-ranking.svg"
                alt="Google Maps Ranking"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Local Directories */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-12">
            Your Business Across Local Directories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-lg flex items-center justify-center">
              <Image
                src="/logos/google-my-business-logo.svg"
                alt="Google My Business"
                width={150}
                height={50}
                className="object-contain"
              />
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg flex items-center justify-center">
              <Image
                src="/logos/yelp-svgrepo-com.svg"
                alt="Yelp"
                width={150}
                height={50}
                className="object-contain"
              />
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg flex items-center justify-center">
              <Image
                src="/logos/icons8-facebook.svg"
                alt="Facebook"
                width={150}
                height={50}
                className="object-contain"
              />
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg flex items-center justify-center">
              <Image
                src="/logos/google.svg"
                alt="Bing"
                width={150}
                height={50}
                className="object-contain"
              />
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg flex items-center justify-center">
              <Image
                src="/logos/icons8-telegram.svg"
                alt="Telegram"
                width={150}
                height={50}
                className="object-contain"
              />
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg flex items-center justify-center">
              <Image
                src="/logos/icons8-maps.svg"
                alt="Google Maps"
                width={150}
                height={50}
                className="object-contain"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
