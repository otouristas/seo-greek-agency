import Image from 'next/image'
import { Metadata } from 'next'
import TestimonialCarousel from '@/components/TestimonialCarousel'

export const metadata: Metadata = {
  title: 'Our Clients | SEO Greek Agency Success Stories',
  description: 'Discover how we\'ve helped businesses across hospitality, sports retail, health, and automotive industries achieve remarkable growth through SEO.',
  openGraph: {
    title: 'Our Clients | SEO Greek Agency Success Stories',
    description: 'Discover how we\'ve helped businesses across hospitality, sports retail, health, and automotive industries achieve remarkable growth through SEO.',
  },
  twitter: {
    title: 'Our Clients | SEO Greek Agency Success Stories',
    description: 'Discover how we\'ve helped businesses across hospitality, sports retail, health, and automotive industries achieve remarkable growth through SEO.',
  },
  alternates: {
    canonical: 'https://www.kasiotisg.com/clients',
  }
}

const testimonials = [
  {
    name: 'Meropi Rooms',
    position: 'Hospitality',
    content: 'The SEO strategy implemented by the team significantly improved our visibility in Google Maps and increased our direct bookings.'
  },
  {
    name: 'JD Sports Greece',
    position: 'Sports Retail',
    content: 'Their expertise in e-commerce SEO helped us optimize our product pages and improve our search rankings across multiple regions.'
  },
  {
    name: 'Αλλάζω Διατροφή',
    position: 'Health & Wellness',
    content: 'Outstanding results in helping us rank for competitive health and nutrition keywords. Our organic traffic has grown significantly.'
  },
  {
    name: 'Antiparos Rent A Car',
    position: 'Car Rental',
    content: 'Local SEO expertise that delivered real results. Our visibility for car rental searches in Antiparos has improved dramatically.'
  },
  {
    name: 'Cosmos Sport',
    position: 'Sports Retail',
    content: 'Comprehensive SEO strategy that helped us compete effectively in both Greek and Cypriot markets.'
  },
  {
    name: 'Villa Clara Olivia',
    position: 'Hospitality',
    content: 'Excellent work on optimizing our villa rental listings. We\'ve seen a significant increase in direct bookings.'
  }
]

interface Industry {
  name: string;
  clients: {
    name: string;
    logo: string;
  }[];
}

export default function ClientsPage() {
  const industries: Industry[] = [
    {
      name: 'Hospitality & Tourism',
      clients: [
        { name: 'Meropi Rooms', logo: '/portfolio/meropirooms.png' },
        { name: 'Morpheas Rooms', logo: '/portfolio/morpheas-logo.png' },
        { name: 'ALK Hotel', logo: '/portfolio/alkhotel.png' },
        { name: 'Greece Cyclades', logo: '/portfolio/greece-cyclades-favicon.svg' },
        { name: 'Elite Hospitality', logo: '/portfolio/elitehospitality.png' },
        { name: 'Villa Clara Olivia', logo: '/portfolio/villa-olivia-clara-logo-768x204.png' },
        { name: 'Antiparos Rooms', logo: '/portfolio/antiparosrooms.png' },
        { name: 'Antiparos Transfer', logo: '/portfolio/antiparostransfer.png' }
      ]
    },
    {
      name: 'Sports & Retail',
      clients: [
        { name: 'Villarreal CF', logo: '/portfolio/logo-villarreal-web.png' },
        { name: 'JD Sports', logo: '/portfolio/jd-desktop-logo.webp' },
        { name: 'Cosmos Sport', logo: '/portfolio/cosmos-sport-logo-17075792651.webp' },
        { name: 'Sneaker10', logo: '/portfolio/sneaker10-logo-17075791422.webp' },
        { name: 'Sports Factory', logo: '/portfolio/sportsfactory-outlet-logo-17153332223.webp' },
        { name: 'Run Dome', logo: '/portfolio/rundome-logo-17075791815.webp' },
        { name: 'Active Sport', logo: '/portfolio/activesport.png' },
        { name: 'Slam Dunk', logo: '/portfolio/slam-dunk-logo-17075791644.webp' },
        { name: 'Box2Box', logo: '/portfolio/box2box_logo.png' }
      ]
    },
    {
      name: 'Health & Wellness',
      clients: [
        { name: 'Αλλάζω Διατροφή', logo: '/portfolio/allazwdiatrofi.png' },
        { name: 'Health Assistance', logo: '/portfolio/healthassistance.png' }
      ]
    },
    {
      name: 'Car Rental',
      clients: [
        { name: 'Antiparos Rent A Car', logo: '/portfolio/antiparosrentacar.png' },
        { name: 'Aggelos Rentals', logo: '/portfolio/aggelosrentals.png' },
        { name: 'Rent A Car Antiparos', logo: '/portfolio/rentacarantiparos.png' },
        { name: 'RAC SA', logo: '/portfolio/rac sa.jpg' },
        { name: 'Athens Rent A Car', logo: '/portfolio/athensrentacar.png' }
      ]
    },
    {
      name: 'Education & Other',
      clients: [
        { name: 'Planetarium of Athens / Eugenides Foundation', logo: '/portfolio/eefedu.png' },
        { name: 'The Agency PR', logo: '/portfolio/theagencylogo.png' },
        { name: 'Petsville', logo: '/portfolio/petsville.png' }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Success Stories</h1>
            <p className="text-xl text-gray-200">
              We've helped businesses across various industries achieve remarkable growth through strategic SEO.
              Here are some of the companies we're proud to work with.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 text-lg">
              Real feedback from businesses we've helped succeed online
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Client Logos by Industry */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Clients</h2>
            <p className="text-gray-600 text-lg">
              Trusted by businesses across multiple industries
            </p>
          </div>

          <div className="space-y-16">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-8 text-blue-900">{industry.name}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {industry.clients.map((client, clientIndex) => (
                    <div 
                      key={clientIndex} 
                      className="flex items-center justify-center p-4 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-shadow"
                    >
                      <div className="relative h-16 w-full">
                        <Image
                          src={client.logo}
                          alt={`${client.name} logo`}
                          fill
                          className={`object-contain ${
                            client.name === 'Meropi Rooms' || client.name === 'Morpheas Rooms'
                              ? '[filter:invert(27%)_sepia(51%)_saturate(2878%)_hue-rotate(210deg)_brightness(104%)_contrast(97%)]'
                              : ''
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
