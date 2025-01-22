import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Portfolio | See Our Proven Results',
  description: 'Explore our SEO portfolio and see the results we\'ve achieved for our clients across hospitality, sports retail, health, and automotive industries.',
  robots: {
    index: false,
    follow: false
  },
  openGraph: {
    title: 'SEO Portfolio | See Our Proven Results',
    description: 'Explore our SEO portfolio and see the results we\'ve achieved for our clients across hospitality, sports retail, health, and automotive industries.',
  },
  twitter: {
    title: 'SEO Portfolio | See Our Proven Results',
    description: 'Explore our SEO portfolio and see the results we\'ve achieved for our clients across hospitality, sports retail, health, and automotive industries.',
  }
}

interface PortfolioItem {
  client: string;
  industry: string;
  services: string[];
  results?: {
    metric: string;
    value: string;
  }[];
  logo: string;
  description: string;
}

export default function PortfolioPage() {
  const portfolioItems: PortfolioItem[] = [
    // Hospitality & Tourism
    {
      client: 'Meropi Rooms',
      industry: 'Hospitality & Tourism',
      services: ['Local SEO', 'Google Maps Optimization', 'Content Strategy'],
      logo: '/portfolio/meropirooms.png',
      description: 'Implemented a local SEO strategy focused on increasing visibility in Google Maps and attracting bookings through organic search.'
    },
    {
      client: 'Morpheas Rooms & Apartments',
      industry: 'Hospitality & Tourism',
      services: ['Local SEO', 'Website Optimization', 'Content Marketing'],
      logo: '/portfolio/morpheas-logo.png',
      description: 'Optimized website for relevant keywords like accommodations in the area, significantly improving local search visibility.'
    },
    {
      client: 'ALK Hotel',
      industry: 'Hospitality & Tourism',
      services: ['Mobile SEO', 'Technical SEO', 'Local Search'],
      logo: '/portfolio/alkhotel.png',
      description: 'Implemented a mobile-first SEO strategy to capture the growing number of travelers searching for accommodations on their smartphones.'
    },
    {
      client: 'Greece Cyclades',
      industry: 'Hospitality & Tourism',
      services: ['Technical SEO', 'Content Strategy', 'Performance Optimization'],
      logo: '/portfolio/greece-cyclades-favicon.svg',
      description: 'Implemented technical SEO updates to improve site speed and user experience for this comprehensive travel portal.'
    },
    {
      client: 'Elite Hospitality Services',
      industry: 'Hospitality & Tourism',
      services: ['SEO Consulting', 'Content Strategy', 'Local SEO'],
      logo: '/portfolio/elitehospitality.png',
      description: 'Provided SEO consulting to enhance their online presence and attract high-end clientele.'
    },
    {
      client: 'Villa Clara Olivia',
      industry: 'Hospitality & Tourism',
      services: ['Local SEO', 'Content Marketing', 'Technical SEO'],
      logo: '/portfolio/villa-olivia-clara-logo-768x204.png',
      description: 'Implemented an SEO strategy focused on long-tail keywords related to luxury villa rentals.'
    },
    {
      client: 'Antiparos Rooms',
      industry: 'Hospitality & Tourism',
      services: ['Local SEO', 'Content Strategy', 'Technical SEO'],
      logo: '/portfolio/antiparosrooms.png',
      description: 'Developed and optimized a comprehensive guide for accommodations in Antiparos.'
    },
    {
      client: 'Antiparos Transfer',
      industry: 'Hospitality & Tourism',
      services: ['Local SEO', 'Google Maps Optimization', 'Content Marketing'],
      logo: '/portfolio/antiparostransfer.png',
      description: 'Provided local SEO services to improve visibility for travelers searching for transportation options on the island.'
    },
    // Sports & Retail
    {
      client: 'Villarreal CF',
      industry: 'Sports & Retail',
      services: ['International SEO', 'Content Strategy', 'Technical SEO'],
      logo: '/portfolio/logo-villarreal-web.png',
      description: 'Optimized the official website content for international search visibility, focusing on multiple language markets.'
    },
    {
      client: 'JD Sports',
      industry: 'Sports & Retail',
      services: ['E-commerce SEO', 'Multi-region SEO', 'Content Optimization'],
      logo: '/portfolio/jd-desktop-logo.webp',
      description: 'Created targeted landing pages optimized for specific product categories and brands for both Greece and Cyprus domains.'
    },
    {
      client: 'Cosmos Sport',
      industry: 'Sports & Retail',
      services: ['Technical SEO', 'Content Strategy', 'Link Building'],
      logo: '/portfolio/cosmos-sport-logo-17075792651.webp',
      description: 'Implemented a comprehensive SEO strategy that included technical SEO, content optimization, and link building for both Greece and Cyprus.'
    },
    {
      client: 'Sneaker10',
      industry: 'Sports & Retail',
      services: ['E-commerce SEO', 'Product Optimization', 'Technical SEO'],
      logo: '/portfolio/sneaker10-logo-17075791422.webp',
      description: 'Focused on optimizing product pages for high-volume keywords, improving visibility in both Greece and Cyprus markets.'
    },
    {
      client: 'Sports Factory',
      industry: 'Sports & Retail',
      services: ['Content Strategy', 'E-commerce SEO', 'Technical SEO'],
      logo: '/portfolio/sportsfactory-outlet-logo-17153332223.webp',
      description: 'Developed a content strategy focused on creating informative blog posts and buying guides for athletic apparel and footwear.'
    },
    {
      client: 'Run Dome',
      industry: 'Sports & Retail',
      services: ['Local SEO', 'Content Marketing', 'Technical SEO'],
      logo: '/portfolio/rundome-logo-17075791815.webp',
      description: 'Optimized their website for local searches related to running shoes and gear, improving local visibility.'
    },
    {
      client: 'Active Sport',
      industry: 'Sports & Retail',
      services: ['SEO Strategy', 'Content Optimization', 'Technical SEO'],
      logo: '/portfolio/activesport.png',
      description: 'Provided ongoing SEO services, including keyword research, on-page optimization, and performance monitoring.'
    },
    {
      client: 'Slam Dunk',
      industry: 'Sports & Retail',
      services: ['Link Building', 'Content Strategy', 'Technical SEO'],
      logo: '/portfolio/slam-dunk-logo-17075791644.webp',
      description: 'Built a strong backlink profile through outreach to relevant sports blogs and websites.'
    },
    {
      client: 'Box2Box',
      industry: 'Sports & Retail',
      services: ['Local SEO', 'Google Business Profile', 'Technical SEO'],
      logo: '/portfolio/box2box_logo.png',
      description: 'Optimized their Google Business Profile and built local citations to improve their visibility in local search results.'
    },
    // Health & Wellness
    {
      client: 'Αλλάζω Διατροφή',
      industry: 'Health & Wellness',
      services: ['Content Strategy', 'Keyword Research', 'Technical SEO'],
      logo: '/portfolio/allazwdiatrofi.png',
      description: 'Helped improve rankings for competitive keywords related to diet and healthy living through comprehensive content strategy.'
    },
    {
      client: 'Health Assistance',
      industry: 'Health & Wellness',
      services: ['Content Marketing', 'SEO Strategy', 'Technical SEO'],
      logo: '/portfolio/healthassistance.png',
      description: 'Implemented a content marketing strategy focused on creating informative articles about health insurance and related topics.'
    },
    // Car Rental Services
    {
      client: 'Antiparos Rent A Car',
      industry: 'Car Rental',
      services: ['Local SEO', 'Content Optimization', 'Google Maps'],
      logo: '/portfolio/antiparosrentacar.png',
      description: 'Optimized their website for keywords related to car rentals on the island of Antiparos, improving local visibility.'
    },
    {
      client: 'Aggelos Rentals',
      industry: 'Car Rental',
      services: ['Local SEO', 'Content Strategy', 'Technical SEO'],
      logo: '/portfolio/aggelosrentals.png',
      description: 'Implemented a local SEO strategy to attract tourists searching for car rental options.'
    },
    {
      client: 'Rent A Car Antiparos',
      industry: 'Car Rental',
      services: ['Local SEO', 'Citation Building', 'Technical SEO'],
      logo: '/portfolio/rentacarantiparos.png',
      description: 'Improved their online visibility through targeted keyword optimization and local citation building.'
    },
    {
      client: 'RAC SA',
      industry: 'Car Rental',
      services: ['Technical SEO', 'Performance Optimization', 'Local SEO'],
      logo: '/portfolio/rac sa.jpg',
      description: 'Provided technical SEO services to enhance website performance and improve search engine crawlability.'
    },
    {
      client: 'Athens Rent A Car',
      industry: 'Car Rental',
      services: ['Local SEO', 'Content Strategy', 'Technical SEO'],
      logo: '/portfolio/athensrentacar.png',
      description: 'Focused on optimizing for long-tail keywords related to specific car models and rental durations in Athens.'
    },
    // Education & Other
    {
      client: 'Planetarium of Athens / Eugenides Foundation',
      industry: 'Education & Other',
      services: ['Content Strategy', 'Technical SEO', 'Local SEO'],
      logo: '/portfolio/eefedu.png',
      description: 'Optimized their website content to attract prospective students searching for educational programs in Greece.'
    },
    {
      client: 'The Agency PR',
      industry: 'Education & Other',
      services: ['Content Strategy', 'Technical SEO', 'Link Building'],
      logo: '/portfolio/theagencylogo.png',
      description: 'Developed a content strategy to showcase their expertise and attract new clients in the PR industry.'
    },
    {
      client: 'Petsville',
      industry: 'Education & Other',
      services: ['E-commerce SEO', 'Content Strategy', 'Technical SEO'],
      logo: '/portfolio/petsville.png',
      description: 'Implemented e-commerce SEO best practices to improve product page rankings and drive sales for this online pet store.'
    }
  ]

  const industries = Array.from(new Set(portfolioItems.map(item => item.industry)))

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-blue-900 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/hero-pattern.svg"
            alt="Background Pattern"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000" />
          <div className="absolute top-40 right-1/4 w-24 h-24 bg-blue-300/20 rounded-full blur-xl animate-pulse delay-500" />
        </div>

        <div className="container mx-auto px-4 h-full flex items-center relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                Our Success Stories
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
                Explore how we've helped businesses across various industries achieve remarkable growth through strategic SEO.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">30+</div>
                <div className="text-sm text-blue-200">Active Clients</div>
              </div>
              <div className="text-center relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-px h-12 bg-gradient-to-b from-transparent via-blue-400 to-transparent"></div>
                <div className="text-3xl font-bold mb-1">4</div>
                <div className="text-sm text-blue-200">Industries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">12+</div>
                <div className="text-sm text-blue-200">Countries</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
      </section>

      {/* Industry Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <select className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">All Industries</option>
              {industries.map((industry, index) => (
                <option key={index} value={industry}>{industry}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {industries.map((industry) => (
            <div key={industry} className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">{industry}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioItems
                  .filter(item => item.industry === industry)
                  .map((item, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                      <div className="p-8">
                        <div className={`relative h-16 mb-6 ${item.client === 'Greece Cyclades' ? 'scale-150' : ''}`}>
                          <Image
                            src={item.logo}
                            alt={`${item.client} logo`}
                            fill
                            className={`object-contain p-2 ${
                              item.client === 'Meropi Rooms' || item.client === 'Morpheas Rooms & Apartments'
                                ? '[filter:invert(27%)_sepia(51%)_saturate(2878%)_hue-rotate(210deg)_brightness(104%)_contrast(97%)]'
                                : ''
                            }`}
                          />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{item.client}</h3>
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
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
