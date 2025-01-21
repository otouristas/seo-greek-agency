import Image from 'next/image'
import { Metadata } from 'next'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'Our Clients | Businesses We\'ve Helped Succeed',
  description: 'See the diverse range of businesses we\'ve helped achieve their online goals with our expert SEO services.',
  openGraph: {
    title: 'Our Clients | Businesses We\'ve Helped Succeed',
    description: 'See the diverse range of businesses we\'ve helped achieve their online goals with our expert SEO services.',
  },
  twitter: {
    title: 'Our Clients | Businesses We\'ve Helped Succeed',
    description: 'See the diverse range of businesses we\'ve helped achieve their online goals with our expert SEO services.',
  },
  alternates: {
    canonical: 'https://www.anotherseoguru.com/clients',
  }
}

interface Client {
  name: string;
  industry: string;
  logo: string;
  testimonial?: {
    text: string;
    author: string;
    position: string;
    image: string;
  };
}

export default function ClientsPage() {
  const clients: Client[] = [
    {
      name: 'TechStart Solutions',
      industry: 'Technology',
      logo: '/portfolio/techstart-logo.svg',
      testimonial: {
        text: 'Another SEO Guru transformed our online presence. Their data-driven approach and deep understanding of technical SEO helped us achieve remarkable growth in organic traffic.',
        author: 'John Smith',
        position: 'CEO',
        image: '/testimonials/john-smith.jpg'
      }
    },
    {
      name: 'Green Living Co',
      industry: 'Eco-Friendly Products',
      logo: '/portfolio/greenliving-logo.svg',
      testimonial: {
        text: "The team's expertise in e-commerce SEO and local search optimization has been invaluable. Our online sales have grown significantly since partnering with them.",
        author: 'Sarah Chen',
        position: 'Marketing Director',
        image: '/testimonials/sarah-chen.jpg'
      }
    },
    {
      name: 'FinPro Advisors',
      industry: 'Financial Services',
      logo: '/portfolio/finpro-logo.svg',
      testimonial: {
        text: 'Working with Another SEO Guru has been a game-changer. Their content strategy helped us establish authority in the financial sector and drive qualified leads.',
        author: 'Michael Ross',
        position: 'Founder',
        image: '/testimonials/michael-ross.jpg'
      }
    },
    {
      name: 'HealthTech Plus',
      industry: 'Healthcare',
      logo: '/clients/healthtech-logo.svg'
    },
    {
      name: 'Urban Eats',
      industry: 'Restaurant Chain',
      logo: '/clients/urbaneats-logo.svg'
    },
    {
      name: 'EduLearn',
      industry: 'Education',
      logo: '/clients/edulearn-logo.svg'
    },
    {
      name: 'FitLife Gear',
      industry: 'Fitness Equipment',
      logo: '/clients/fitlife-logo.svg'
    },
    {
      name: 'Travel Wise',
      industry: 'Travel & Tourism',
      logo: '/clients/travelwise-logo.svg'
    },
    {
      name: 'Pet Paradise',
      industry: 'Pet Care',
      logo: '/clients/petparadise-logo.svg'
    }
  ]

  const industries = Array.from(new Set(clients.map(client => client.industry)))

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
                Trusted by Industry<br />Leaders Worldwide
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
                Join hundreds of successful businesses who have transformed 
                their digital presence with Another SEO Guru.
              </p>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">500+</div>
                <div className="text-sm text-blue-200">Happy Clients</div>
              </div>
              <div className="text-center relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-px h-12 bg-gradient-to-b from-transparent via-blue-400 to-transparent"></div>
                <div className="text-3xl font-bold mb-1">12+</div>
                <div className="text-sm text-blue-200">Industries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">98%</div>
                <div className="text-sm text-blue-200">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clients.filter(client => client.testimonial).map((client, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 relative">
                {/* Quote Icon */}
                <div className="absolute -top-4 right-8 text-5xl text-blue-500 opacity-50">
                  "
                </div>
                
                <div className="relative mb-6">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={120}
                    height={40}
                    className="object-contain"
                  />
                </div>

                <p className="text-gray-600 mb-6">{client.testimonial!.text}</p>

                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={client.testimonial!.image}
                      alt={client.testimonial!.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{client.testimonial!.author}</div>
                    <div className="text-sm text-gray-500">
                      {client.testimonial!.position}, {client.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logo Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Valued Clients</h2>
          
          {/* Industry Filter */}
          <div className="flex justify-center mb-12">
            <select className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">All Industries</option>
              {industries.map((industry, index) => (
                <option key={index} value={industry}>{industry}</option>
              ))}
            </select>
          </div>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="aspect-video bg-white rounded-lg shadow-md p-8 flex items-center justify-center group hover:shadow-lg transition-shadow"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    className="object-contain filter group-hover:brightness-110 transition-all"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
