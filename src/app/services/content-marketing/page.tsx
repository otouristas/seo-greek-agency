import Image from 'next/image'
import Hero from '@/components/Hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Content Marketing Services | Strategic Content Creation',
  description: 'Expert content marketing services to help you create engaging, SEO-optimized content that drives traffic and conversions.',
  alternates: {
    canonical: '/services/content-marketing',
  },
  openGraph: {
    title: 'Content Marketing Services | Strategic Content Creation',
    description: 'Expert content marketing services to help you create engaging, SEO-optimized content that drives traffic and conversions.',
    url: '/services/content-marketing',
    type: 'website',
    images: [
      {
        url: '/services/content-plan.svg',
        width: 1200,
        height: 630,
        alt: 'Content Marketing Services',
      },
    ],
  },
}

export default function ContentMarketingPage() {
  const contentTypes = [
    {
      title: 'Blog Posts',
      description: 'Engaging, SEO-optimized articles that drive organic traffic',
      icon: '/icons/blog-post.svg'
    },
    {
      title: 'Case Studies',
      description: 'Detailed success stories that build trust and authority',
      icon: '/icons/case-study.svg'
    },
    {
      title: 'Infographics',
      description: 'Visual content that simplifies complex information',
      icon: '/icons/infographic.svg'
    },
    {
      title: 'Whitepapers',
      description: 'In-depth reports that showcase your expertise',
      icon: '/icons/whitepaper.svg'
    },
    {
      title: 'Videos',
      description: 'Engaging video content that captures attention',
      icon: '/icons/video.svg'
    },
    {
      title: 'Newsletters',
      description: 'Regular updates that nurture your audience',
      icon: '/icons/newsletter.svg'
    }
  ]

  const process = [
    {
      title: 'Research',
      description: 'Topic and keyword research to identify opportunities',
      icon: '/icons/research.svg'
    },
    {
      title: 'Strategy',
      description: 'Content planning aligned with your business goals',
      icon: '/icons/strategy.svg'
    },
    {
      title: 'Creation',
      description: 'Professional content creation by industry experts',
      icon: '/icons/creation.svg'
    },
    {
      title: 'Optimization',
      description: 'SEO optimization for maximum visibility',
      icon: '/icons/optimization.svg'
    },
    {
      title: 'Distribution',
      description: 'Strategic content promotion across channels',
      icon: '/icons/distribution.svg'
    },
    {
      title: 'Analysis',
      description: 'Performance tracking and optimization',
      icon: '/icons/analysis.svg'
    }
  ]

  return (
    <div className="pb-20">
      <Hero 
        title="Content Marketing Services"
        description="Create content that engages, converts, and ranks"
        height="small"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Content That Drives Results
          </h2>
          <p className="text-lg text-gray-600">
            Our content marketing services help you create and distribute valuable,
            relevant content that attracts and retains your target audience while
            driving profitable customer action.
          </p>
        </div>

        {/* Content Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {contentTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="relative w-16 h-16 mb-6">
                <Image
                  src={type.icon}
                  alt={type.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">{type.title}</h3>
              <p className="text-gray-600">{type.description}</p>
            </div>
          ))}
        </div>

        {/* Content Strategy Visualization */}
        <div className="bg-gray-50 rounded-2xl p-12 mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">
            Our Content Creation Process
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="relative w-16 h-16 mb-6">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-8 h-8 -mr-4 transform translate-x-1/2">
                    <Image
                      src="/icons/arrow-right.svg"
                      alt="Next Step"
                      width={32}
                      height={32}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content Calendar Example */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">
            Strategic Content Planning
          </h3>
          <div className="relative h-[400px]">
            <Image
              src="/services/content-plan.svg"
              alt="Content Calendar"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Content Performance Metrics */}
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-12">
            Measuring Content Success
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 rounded-xl bg-white shadow-lg">
              <Image
                src="/icons/traffic.svg"
                alt="Traffic"
                width={40}
                height={40}
                className="mx-auto mb-4"
              />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Traffic</h4>
              <p className="text-gray-600 text-sm">Increased organic visitors</p>
            </div>
            <div className="p-6 rounded-xl bg-white shadow-lg">
              <Image
                src="/icons/engagement.svg"
                alt="Engagement"
                width={40}
                height={40}
                className="mx-auto mb-4"
              />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Engagement</h4>
              <p className="text-gray-600 text-sm">Higher user interaction</p>
            </div>
            <div className="p-6 rounded-xl bg-white shadow-lg">
              <Image
                src="/icons/conversions.svg"
                alt="Conversions"
                width={40}
                height={40}
                className="mx-auto mb-4"
              />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Conversions</h4>
              <p className="text-gray-600 text-sm">Better lead generation</p>
            </div>
            <div className="p-6 rounded-xl bg-white shadow-lg">
              <Image
                src="/icons/analysis.svg"
                alt="ROI"
                width={40}
                height={40}
                className="mx-auto mb-4"
              />
              <h4 className="text-xl font-bold text-gray-900 mb-2">ROI</h4>
              <p className="text-gray-600 text-sm">Measurable returns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
