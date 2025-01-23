import Image from 'next/image'
import Link from 'next/link'
import PricingCard from '@/components/PricingCard'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Another SEO Guru | Expert SEO Services for Business Growth',
  description: 'Transform your online presence with our expert SEO services. We deliver data-driven strategies, technical optimization, and measurable results for sustainable business growth.',
  keywords: 'SEO services, search engine optimization, digital marketing, SEO agency, SEO expert, Another SEO Guru, technical SEO, content optimization, link building',
  alternates: {
    canonical: 'https://kasiotisg.com',
  }
}

export default function Home() {
  const services = [
    {
      id: 'keyword-research',
      icon: '🎯',
      title: 'Keyword Research & Strategy',
      description: 'Discover untapped opportunities and outrank competitors with our data-driven keyword research methodology.',
      href: '/services/keyword-research'
    },
    {
      id: 'technical-seo',
      icon: '⚙️',
      title: 'Technical SEO',
      description: 'Ensure peak performance with comprehensive technical optimization and monitoring.',
      href: '/services/technical-seo'
    },
    {
      id: 'content-marketing',
      icon: '✍️',
      title: 'Content Marketing',
      description: 'Create engaging, SEO-optimized content that converts visitors into loyal customers.',
      href: '/services/content-marketing'
    }
  ]

  const pricingPlans = [
    {
      name: "Lite",
      price: 49,
      limits: [
        "1 Project",
        "1 User",
        "5.000 SERP Weak Spot Analyses",
        "500 Keyword Lookup",
        "50 Keyword Tracking"
      ],
      features: [
        { text: "AI SEO Assistant", included: true },
        { text: "Google Rank Tracking", included: true },
        { text: "Youtube Rank Tracking", included: true },
        { text: "Bing Rank Tracking", included: true },
        { text: "SEO Audit", included: true },
        { text: "Keyword Research", included: true },
        { text: "Backlink Checker", included: true },
        { text: "SEO Checklists", included: true },
        { text: "PDF Reports", included: true }
      ]
    },
    {
      name: "Standard",
      price: 99,
      limits: [
        "5 Projects",
        "3 Users",
        "20.000 SERP Weak Spot Analyses",
        "2.000 Keyword Lookup",
        "200 Keyword Tracking"
      ],
      features: [
        { text: "AI SEO Assistant", included: true },
        { text: "Google Rank Tracking", included: true },
        { text: "Youtube Rank Tracking", included: true },
        { text: "Bing Rank Tracking", included: true },
        { text: "SEO Audit", included: true },
        { text: "Keyword Research", included: true },
        { text: "Backlink Checker", included: true },
        { text: "SEO Checklists", included: true },
        { text: "PDF Reports", included: true }
      ],
      highlighted: true
    },
    {
      name: "Advanced",
      price: 279,
      limits: [
        "15 Projects",
        "5 Users",
        "50.000 SERP Weak Spot Analyses",
        "5.000 Keyword Lookup",
        "500 Keyword Tracking"
      ],
      features: [
        { text: "AI SEO Assistant", included: true },
        { text: "Google Rank Tracking", included: true },
        { text: "Youtube Rank Tracking", included: true },
        { text: "Bing Rank Tracking", included: true },
        { text: "SEO Audit", included: true },
        { text: "Keyword Research", included: true },
        { text: "Backlink Checker", included: true },
        { text: "SEO Checklists", included: true },
        { text: "PDF Reports", included: true }
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image
            src="/hero-pattern.svg"
            alt="Background Pattern"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Dominate Search Results with Another SEO Guru
              </h1>
              <p className="text-xl text-gray-200">
                We craft data-driven SEO strategies that propel your business to the top of search results, 
                driving organic traffic and maximizing your ROI.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/free-seo-audit"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
                >
                  Get Your Free SEO Audit
                </Link>
                <Link 
                  href="/contact"
                  className="inline-block bg-white hover:bg-gray-100 text-blue-900 px-8 py-3 rounded-full font-semibold transition-colors"
                >
                  Contact Us
                </Link>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-blue-700">
                <div>
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-gray-300">Clients Helped</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-gray-300">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">10+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block relative pointer-events-none">
              <Image
                src="/hero-illustration.svg"
                alt="SEO Growth Illustration"
                width={600}
                height={500}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive SEO Solutions
            </h2>
            <p className="text-gray-600 text-lg">
              From technical optimization to content strategy, we provide end-to-end SEO services 
              to boost your online presence.
            </p>
            <div className="mt-6">
              <Link 
                href="/services"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
              >
                View All Services
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link 
                key={index} 
                href={service.href}
                className="block bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="text-4xl mb-4 text-blue-600">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span 
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600">
              Get started with our comprehensive SEO solutions. Select the plan that best fits your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                name={plan.name}
                price={plan.price}
                features={plan.features}
                limits={plan.limits}
                highlighted={plan.highlighted}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/pricing"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              View Full Pricing Details
              <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Another SEO Guru?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: '📊',
                    title: 'Data-Driven Approach',
                    description: 'We make decisions based on real data and analytics, not guesswork.'
                  },
                  {
                    icon: '🎯',
                    title: 'Customized Strategy',
                    description: 'Every business is unique. We create tailored SEO strategies for your specific needs.'
                  },
                  {
                    icon: '🤝',
                    title: 'Transparent Communication',
                    description: 'Regular updates and clear reporting keep you informed every step of the way.'
                  },
                  {
                    icon: '🚀',
                    title: 'Proven Results',
                    description: 'Our track record speaks for itself with consistent top rankings and traffic growth.'
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-2xl text-blue-600">{feature.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/why-choose-us.svg"
                alt="Why Choose Another SEO Guru"
                width={600}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Free SEO Audit Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Discover Your Website's
                <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                  {' '}True SEO Potential
                </span>
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Get a free, comprehensive SEO audit of your website and uncover opportunities for higher rankings and more traffic.
              </p>

              <form 
                action="/free-seo-audit"
                className="flex flex-col sm:flex-row gap-4 max-w-2xl"
              >
                <div className="flex-1">
                  <input
                    type="url"
                    placeholder="Enter your website URL"
                    className="w-full px-6 py-4 rounded-full text-gray-900 bg-white/95 backdrop-blur-sm border-2 border-transparent focus:border-blue-400 focus:outline-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-xl whitespace-nowrap"
                >
                  Analyze Now
                </button>
              </form>

              <div className="mt-8 grid grid-cols-3 gap-6">
                {[
                  { number: '100+', label: 'Checkpoints' },
                  { number: '24h', label: 'Delivery' },
                  { number: 'Free', label: 'No Credit Card' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-blue-200">{stat.number}</div>
                    <div className="text-sm text-blue-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Analytics Graph SVG */}
            <div className="relative">
              <svg
                viewBox="0 0 400 300"
                className="w-full h-auto"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Grid Lines */}
                <g opacity="0.1" stroke="white">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <line
                      key={`horizontal-${i}`}
                      x1="0"
                      y1={60 * i}
                      x2="400"
                      y2={60 * i}
                      strokeDasharray="4 4"
                    />
                  ))}
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <line
                      key={`vertical-${i}`}
                      x1={80 * i}
                      y1="0"
                      x2={80 * i}
                      y2="240"
                      strokeDasharray="4 4"
                    />
                  ))}
                </g>

                {/* Main Graph Line */}
                <path
                  d="M0,240 C80,180 160,220 240,100 S320,60 400,20"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  fill="none"
                />

                {/* Area under the graph */}
                <path
                  d="M0,240 C80,180 160,220 240,100 S320,60 400,20 L400,300 L0,300 Z"
                  fill="url(#areaGradient)"
                  opacity="0.2"
                />

                {/* Data Points */}
                {[
                  { x: 0, y: 240 },
                  { x: 80, y: 180 },
                  { x: 160, y: 220 },
                  { x: 240, y: 100 },
                  { x: 320, y: 60 },
                  { x: 400, y: 20 }
                ].map((point, index) => (
                  <g key={index}>
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r="6"
                      fill="white"
                    />
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r="4"
                      fill="#60A5FA"
                    />
                  </g>
                ))}

                {/* Gradients */}
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#93C5FD" />
                    <stop offset="100%" stopColor="#60A5FA" />
                  </linearGradient>
                  <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Floating Elements */}
              <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-300/20 rounded-full blur-xl animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            What Our Clients Say
          </h2>
          <TestimonialCarousel
            testimonials={[
              {
                name: 'Fotis K.',
                position: 'Rent A Car Owner',
                content: 'The SEO strategy implemented by the team significantly improved our online visibility. We\'ve seen a substantial increase in car rental bookings through our website.'
              },
              {
                name: 'George K.',
                position: 'Hotel Owner',
                content: 'Their expertise in local SEO has helped our hotel gain more visibility in travel searches. We\'ve noticed a significant increase in direct bookings through our website.'
              },
              {
                name: 'Klelia A.',
                position: 'Jewelry Shop Owner',
                content: 'The team\'s understanding of e-commerce SEO has helped us reach more customers. Our online sales have grown consistently since implementing their recommendations.'
              },
              {
                name: 'Thanos K.',
                position: 'Car Repair Shop Owner',
                content: 'Thanks to their local SEO expertise, we\'ve become more visible to customers in our area. The number of service appointments has increased significantly.'
              },
              {
                name: 'Haris G.',
                position: 'Logistics Website Owner',
                content: 'The technical SEO improvements made to our logistics website have resulted in better search rankings and increased client inquiries.'
              },
              {
                name: 'Panagiotis S.',
                position: 'Electrical Engineer',
                content: 'Their SEO services helped establish my engineering consultancy online. I\'m now getting regular project inquiries through my website.'
              },
              {
                name: 'Antonis L.',
                position: 'Personal Portfolio Owner',
                content: 'The team helped optimize my portfolio website, making it more visible to potential clients. I\'ve seen a significant increase in project opportunities.'
              },
              {
                name: 'Afroditi K.',
                position: 'E-commerce Owner',
                content: 'Their comprehensive approach to e-commerce SEO has transformed our online store. Our organic traffic and sales have doubled in just a few months.'
              }
            ]}
          />
        </div>
      </section>
    </div>
  )
}
