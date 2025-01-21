import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Portfolio | See Our Proven Results',
  description: 'Explore our SEO portfolio and see the results we\'ve achieved for our clients. View case studies and examples of our successful SEO campaigns.',
  openGraph: {
    title: 'SEO Portfolio | See Our Proven Results',
    description: 'Explore our SEO portfolio and see the results we\'ve achieved for our clients. View case studies and examples of our successful SEO campaigns.',
  },
  twitter: {
    title: 'SEO Portfolio | See Our Proven Results',
    description: 'Explore our SEO portfolio and see the results we\'ve achieved for our clients. View case studies and examples of our successful SEO campaigns.',
  },
  alternates: {
    canonical: 'https://www.kasiotisg.com/portfolio',
  }
}

interface PortfolioItem {
  client: string;
  industry: string;
  services: string[];
  results: {
    metric: string;
    value: string;
  }[];
  logo: string;
  website: string;
  description: string;
}

export default function PortfolioPage() {
  const portfolioItems: PortfolioItem[] = [
    {
      client: 'TechStart Solutions',
      industry: 'Technology',
      services: ['Technical SEO', 'Content Marketing', 'Link Building'],
      results: [
        { metric: 'Organic Traffic', value: '+245%' },
        { metric: 'Keyword Rankings', value: 'Top 3' },
        { metric: 'Conversion Rate', value: '+75%' }
      ],
      logo: '/portfolio/techstart-logo.svg',
      website: 'https://techstart.example.com',
      description: 'Comprehensive SEO strategy that transformed their online presence and established them as an industry leader.'
    },
    {
      client: 'Green Living Co',
      industry: 'Eco-Friendly Products',
      services: ['Local SEO', 'E-commerce SEO', 'Content Strategy'],
      results: [
        { metric: 'Online Sales', value: '+180%' },
        { metric: 'Local Visibility', value: '+200%' },
        { metric: 'Organic Traffic', value: '+150%' }
      ],
      logo: '/portfolio/greenliving-logo.svg',
      website: 'https://greenliving.example.com',
      description: 'Targeted local SEO campaign that dramatically increased their visibility in eco-conscious markets.'
    },
    {
      client: 'FinPro Advisors',
      industry: 'Financial Services',
      services: ['Content Marketing', 'Technical SEO', 'Analytics'],
      results: [
        { metric: 'Lead Generation', value: '+120%' },
        { metric: 'Domain Authority', value: '+15' },
        { metric: 'Page Speed', value: '95/100' }
      ],
      logo: '/portfolio/finpro-logo.svg',
      website: 'https://finpro.example.com',
      description: 'Content-focused SEO strategy that established them as a trusted voice in financial advisory services.'
    }
  ]

  const industries = Array.from(new Set(portfolioItems.map(item => item.industry)))
  const services = Array.from(new Set(portfolioItems.flatMap(item => item.services)))

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-blue-900 to-blue-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/hero-pattern.svg"
            alt="Background Pattern"
            fill
            className="object-cover"
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000" />
          <div className="absolute top-40 right-1/4 w-24 h-24 bg-blue-300/20 rounded-full blur-xl animate-pulse delay-500" />
        </div>

        <div className="container mx-auto px-4 h-full flex items-center relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                Our Success Stories<br />& Case Studies
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
                Discover how we've helped businesses like yours achieve 
                remarkable growth through strategic SEO.
              </p>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">50+</div>
                <div className="text-sm text-blue-200">Active Clients</div>
              </div>
              <div className="text-center relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-px h-12 bg-gradient-to-b from-transparent via-blue-400 to-transparent"></div>
                <div className="text-3xl font-bold mb-1">200%</div>
                <div className="text-sm text-blue-200">Average Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">15+</div>
                <div className="text-sm text-blue-200">Industries Served</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <select className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">All Industries</option>
              {industries.map((industry, index) => (
                <option key={index} value={industry}>{industry}</option>
              ))}
            </select>
            <select className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">All Services</option>
              {services.map((service, index) => (
                <option key={index} value={service}>{service}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="relative h-16 mb-6">
                    <Image
                      src={item.logo}
                      alt={`${item.client} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{item.client}</h3>
                  <p className="text-blue-600 mb-4">{item.industry}</p>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  
                  {/* Services */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">Services Provided</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.services.map((service, serviceIndex) => (
                        <span
                          key={serviceIndex}
                          className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {item.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{result.value}</div>
                        <div className="text-sm text-gray-500">{result.metric}</div>
                      </div>
                    ))}
                  </div>

                  {/* View Case Study Button */}
                  <a
                    href={item.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    View Case Study
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
