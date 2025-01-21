import Image from 'next/image'
import Hero from '@/components/Hero'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Keyword Research & Strategy | Find Profitable Keywords',
  description: 'Uncover high-value, relevant keywords to target your ideal audience and fuel your SEO strategy. Drive qualified traffic with our expert keyword research.',
  openGraph: {
    title: 'Keyword Research & Strategy | Find Profitable Keywords',
    description: 'Uncover high-value, relevant keywords to target your ideal audience and fuel your SEO strategy. Drive qualified traffic with our expert keyword research.',
  },
  twitter: {
    title: 'Keyword Research & Strategy | Find Profitable Keywords',
    description: 'Uncover high-value, relevant keywords to target your ideal audience and fuel your SEO strategy. Drive qualified traffic with our expert keyword research.',
  },
  alternates: {
    canonical: 'https://www.kasiotisg.com/services/keyword-research',
  }
}

export default function KeywordResearchPage() {
  const benefits = [
    'Data-driven keyword selection process',
    'Competitor keyword gap analysis',
    'Long-tail keyword opportunities',
    'Search intent optimization',
    'Monthly search volume insights',
    'Keyword difficulty assessment',
    'Seasonal trend analysis',
    'ROI-focused keyword prioritization'
  ]

  const process = [
    {
      title: 'Research & Discovery',
      description: 'We analyze your industry, competitors, and target audience to identify potential keyword opportunities.',
      icon: '/icons/research.svg'
    },
    {
      title: 'Data Analysis',
      description: 'Our team evaluates search volumes, competition levels, and user intent for each keyword.',
      icon: '/icons/analysis.svg'
    },
    {
      title: 'Strategy Development',
      description: 'We create a comprehensive keyword strategy aligned with your business goals.',
      icon: '/icons/strategy.svg'
    },
    {
      title: 'Implementation Plan',
      description: 'You receive a detailed roadmap for implementing keywords across your content.',
      icon: '/icons/implementation.svg'
    }
  ]

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <Hero 
        title="Keyword Research & Strategy"
        description="Discover the exact search terms your ideal customers are using"
        height="small"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Drive Targeted Traffic with Strategic Keyword Research
          </h2>
          <p className="text-lg text-gray-600">
            Our data-driven keyword research process uncovers valuable search terms that 
            your potential customers are actively using. We don't just find keywords - 
            we discover opportunities to connect with your audience and drive conversions.
          </p>
        </div>

        {/* Visualization Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Understanding Your Keyword Landscape
            </h3>
            <p className="text-gray-600 mb-8">
              We use advanced tools and methodologies to analyze your market's search behavior,
              identifying patterns and opportunities that give you a competitive edge.
            </p>
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
              src="/services/keyword-research-visualization.svg"
              alt="Keyword Research Visualization"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 rounded-2xl p-12 mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">
            Our Keyword Research Process
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-xl font-semibold mb-4">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">
            Industry-Leading Tools & Technology
          </h3>
          <p className="text-gray-600 mb-12">
            We leverage the most powerful SEO tools in the industry to ensure accurate
            and comprehensive keyword research results.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Image
              src="/tools/semrush-logo.svg"
              alt="SEMrush"
              width={150}
              height={50}
              className="mx-auto"
            />
            <Image
              src="/tools/ahrefs-logo.svg"
              alt="Ahrefs"
              width={150}
              height={50}
              className="mx-auto"
            />
            <Image
              src="/tools/moz-logo.svg"
              alt="Moz"
              width={150}
              height={50}
              className="mx-auto"
            />
            <Image
              src="/tools/google-search-console.svg"
              alt="Google Search Console"
              width={150}
              height={50}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
