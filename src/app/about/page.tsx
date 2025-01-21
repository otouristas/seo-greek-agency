import Image from 'next/image'
import { Metadata } from 'next'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'About Another SEO Guru | Your Partner in SEO Success',
  description: 'Learn about Another SEO Guru\'s mission, values, and team of experienced SEO experts dedicated to helping your business achieve online success.',
  openGraph: {
    title: 'About Another SEO Guru | Your Partner in SEO Success',
    description: 'Learn about Another SEO Guru\'s mission, values, and team of experienced SEO experts dedicated to helping your business achieve online success.',
  },
  twitter: {
    title: 'About Another SEO Guru | Your Partner in SEO Success',
    description: 'Learn about Another SEO Guru\'s mission, values, and team of experienced SEO experts dedicated to helping your business achieve online success.',
  },
  alternates: {
    canonical: 'https://www.anotherseoguru.com/about',
  }
}

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: '/team/john-smith.jpg',
      bio: '15+ years of SEO experience, previously led SEO at major tech companies'
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of SEO Strategy',
      image: '/team/sarah-johnson.jpg',
      bio: 'Expert in technical SEO and data analytics with 10+ years experience'
    },
    {
      name: 'Michael Chen',
      role: 'Content Strategy Director',
      image: '/team/michael-chen.jpg',
      bio: 'Content marketing specialist with a background in digital journalism'
    },
    {
      name: 'Emma Davis',
      role: 'Technical SEO Lead',
      image: '/team/emma-davis.jpg',
      bio: 'Certified Google Analytics expert with focus on technical optimization'
    }
  ]

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
                Transforming SEO,<br />One Success at a Time
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
                Meet the team behind Another SEO Guru and discover how we're 
                revolutionizing digital success stories.
              </p>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">10+</div>
                <div className="text-sm text-blue-200">Years Combined Experience</div>
              </div>
              <div className="text-center relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-px h-12 bg-gradient-to-b from-transparent via-blue-400 to-transparent"></div>
                <div className="text-3xl font-bold mb-1">500+</div>
                <div className="text-sm text-blue-200">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">98%</div>
                <div className="text-sm text-blue-200">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Another SEO Guru emerged from a simple yet powerful idea: to make professional SEO services accessible, transparent, and effective for businesses of all sizes. We saw that many businesses were struggling with complex SEO practices and expensive consulting fees that didn't deliver results.
            </p>
            <p className="text-gray-600 mb-6">
              Our mission goes beyond just improving rankings - we're here to transform how businesses approach SEO. By combining technical expertise with clear communication and proven strategies, we help our clients achieve sustainable growth through organic search traffic.
            </p>
            <p className="text-gray-600">
              Today, we're proud to have helped hundreds of businesses not just improve their visibility, but truly understand and harness the power of SEO for long-term success.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Data-Driven Excellence',
                description: 'We make decisions based on real data and proven strategies, not guesswork',
                icon: '📊'
              },
              {
                title: 'Transparent Partnership',
                description: 'Clear communication and complete openness about our methods and results',
                icon: '🤝'
              },
              {
                title: 'Continuous Innovation',
                description: 'Always learning and adapting to stay ahead in the ever-evolving SEO landscape',
                icon: '🚀'
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-blue-100 group-hover:ring-blue-300 transition-all">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Clients Served' },
              { number: '1500+', label: 'Projects Completed' },
              { number: '300%', label: 'Average Traffic Increase' },
              { number: '98%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div key={index} className="p-6 rounded-xl hover:bg-white/5 transition-colors">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
