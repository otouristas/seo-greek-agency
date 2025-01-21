import Image from 'next/image'
import Hero from '@/components/Hero'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

export default function OffPageSEOPage() {
  const strategies = [
    {
      title: 'Guest Posting',
      description: 'High-quality content placement on authoritative industry websites',
      icon: '/icons/guest-post.svg'
    },
    {
      title: 'Digital PR',
      description: 'Getting your brand featured in online news and media outlets',
      icon: '/icons/digital-pr.svg'
    },
    {
      title: 'Broken Link Building',
      description: 'Identifying and replacing broken links with your content',
      icon: '/icons/broken-link.svg'
    },
    {
      title: 'Resource Link Building',
      description: 'Creating valuable resources that naturally attract links',
      icon: '/icons/resource.svg'
    },
    {
      title: 'Competitor Analysis',
      description: 'Identifying and replicating competitor backlink strategies',
      icon: '/icons/competitor.svg'
    },
    {
      title: 'Brand Mentions',
      description: 'Converting unlinked mentions into valuable backlinks',
      icon: '/icons/mentions.svg'
    }
  ]

  const benefits = [
    'Increased domain authority',
    'Better search engine rankings',
    'Enhanced brand visibility',
    'Referral traffic from quality sites',
    'Industry authority building',
    'Long-term SEO value',
    'Natural link profile growth',
    'Competitive advantage'
  ]

  return (
    <div className="pb-20">
      <Hero 
        title="Off-Page SEO & Link Building"
        description="Build authority and trust through strategic link building"
        height="small"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Build Your Site's Authority with Quality Backlinks
          </h2>
          <p className="text-lg text-gray-600">
            Our comprehensive off-page SEO strategy focuses on earning high-quality 
            backlinks from authoritative websites in your industry, enhancing your 
            site's credibility and search engine rankings.
          </p>
        </div>

        {/* Link Building Process Visualization */}
        <div className="relative h-[400px] mb-20">
          <Image
            src="/services/link-building-process.svg"
            alt="Link Building Process"
            fill
            className="object-contain"
          />
        </div>

        {/* Strategies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {strategies.map((strategy, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="relative w-16 h-16 mb-6">
                <Image
                  src={strategy.icon}
                  alt={strategy.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">{strategy.title}</h3>
              <p className="text-gray-600">{strategy.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-50 rounded-2xl p-12 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                The Power of Quality Backlinks
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/services/backlinks-graph.svg"
                alt="Backlinks Growth Graph"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Quality Metrics */}
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-12">
            Our Link Quality Metrics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 rounded-xl bg-white shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">DA</div>
              <div className="text-gray-600">Domain Authority</div>
            </div>
            <div className="p-6 rounded-xl bg-white shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">TR</div>
              <div className="text-gray-600">Trust Ratio</div>
            </div>
            <div className="p-6 rounded-xl bg-white shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">DR</div>
              <div className="text-gray-600">Domain Rating</div>
            </div>
            <div className="p-6 rounded-xl bg-white shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">TF</div>
              <div className="text-gray-600">Trust Flow</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
