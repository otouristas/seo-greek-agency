import Image from 'next/image'
import Hero from '@/components/Hero'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

export default function OnPageSEOPage() {
  const optimizationAreas = [
    {
      title: 'Title Tags & Meta Descriptions',
      description: 'Compelling, keyword-optimized metadata that drives clicks',
      icon: '/icons/meta-tags.svg'
    },
    {
      title: 'Content Optimization',
      description: 'Strategic keyword placement and content structure',
      icon: '/icons/content.svg'
    },
    {
      title: 'URL Structure',
      description: 'Clean, descriptive URLs that users and search engines love',
      icon: '/icons/url.svg'
    },
    {
      title: 'Internal Linking',
      description: 'Strategic link architecture to boost important pages',
      icon: '/icons/internal-links.svg'
    },
    {
      title: 'Image Optimization',
      description: 'Optimized images with proper alt text and compression',
      icon: '/icons/image-opt.svg'
    },
    {
      title: 'Header Tags',
      description: 'Properly structured H1-H6 tags for better readability',
      icon: '/icons/headers.svg'
    }
  ]

  const benefits = [
    'Higher search engine rankings',
    'Improved click-through rates',
    'Better user experience',
    'Increased organic traffic',
    'Higher conversion rates',
    'Lower bounce rates',
    'Improved site engagement',
    'Better content relevancy'
  ]

  return (
    <div className="pb-20">
      <Hero 
        title="On-Page SEO Services"
        description="Optimize every element of your website for maximum visibility"
        height="small"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your Website into an SEO Powerhouse
          </h2>
          <p className="text-lg text-gray-600">
            Our comprehensive on-page SEO service optimizes every element of your website
            to improve search visibility, user experience, and conversion rates.
          </p>
        </div>

        {/* Optimization Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {optimizationAreas.map((area, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="relative w-16 h-16 mb-6">
                <Image
                  src={area.icon}
                  alt={area.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">{area.title}</h3>
              <p className="text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>

        {/* Interactive Example */}
        <div className="bg-gray-50 rounded-2xl p-12 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                See the Difference On-Page SEO Makes
              </h3>
              <div className="relative h-[400px] border rounded-lg overflow-hidden">
                <Image
                  src="/services/on-page-seo-example-new.svg"
                  alt="On-Page SEO Example"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6">Key Benefits</h4>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Before/After Comparison */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12">
            Before & After Optimization
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold mb-4 text-red-500">Before Optimization</h4>
              <div className="relative h-[300px]">
                <Image
                  src="/services/before-optimization-new.svg"
                  alt="Before On-Page SEO"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold mb-4 text-green-500">After Optimization</h4>
              <div className="relative h-[300px]">
                <Image
                  src="/services/after-optimization-new.svg"
                  alt="After On-Page SEO"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
