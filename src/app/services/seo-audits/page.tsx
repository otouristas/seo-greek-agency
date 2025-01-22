import Image from 'next/image'
import Hero from '@/components/Hero'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

export default function SEOAuditsPage() {
  const auditAreas = [
    {
      title: 'Technical Analysis',
      description: 'Crawlability, indexing, site structure, and performance issues',
      icon: '/icons/technical-analysis.svg'
    },
    {
      title: 'On-Page Review',
      description: 'Content quality, meta tags, headings, and internal linking',
      icon: '/icons/on-page-review.svg'
    },
    {
      title: 'Off-Page Assessment',
      description: 'Backlink profile, brand mentions, and competitor analysis',
      icon: '/icons/off-page-assessment.svg'
    },
    {
      title: 'User Experience',
      description: 'Mobile-friendliness, page speed, and Core Web Vitals',
      icon: '/icons/user-experience.svg'
    },
    {
      title: 'Content Evaluation',
      description: 'Content quality, relevance, and optimization opportunities',
      icon: '/icons/content-evaluation.svg'
    },
    {
      title: 'Competitive Analysis',
      description: 'Gap analysis and competitor strategy insights',
      icon: '/icons/competitive-analysis.svg'
    }
  ]

  const deliverables = [
    {
      title: 'Executive Summary',
      description: 'High-level overview of findings and priorities',
      icon: '/icons/executive-summary.svg'
    },
    {
      title: 'Technical Report',
      description: 'Detailed technical issues and solutions',
      icon: '/icons/technical-report.svg'
    },
    {
      title: 'Action Plan',
      description: 'Prioritized recommendations and timeline',
      icon: '/icons/action-plan.svg'
    },
    {
      title: 'SEO Roadmap',
      description: 'Long-term strategy and implementation guide',
      icon: '/icons/roadmap.svg'
    }
  ]

  const checklistItems = [
    'Site Architecture Analysis',
    'Mobile Optimization Check',
    'Page Speed Analysis',
    'Content Quality Assessment',
    'Backlink Profile Review',
    'Technical SEO Audit',
    'Competitor Analysis',
    'Local SEO Check',
    'Schema Markup Review',
    'Security Assessment',
    'URL Structure Analysis',
    'Internal Linking Review'
  ]

  return (
    <div className="pb-20">
      <Hero 
        title="SEO Audit Services"
        description="Get a comprehensive analysis of your website's SEO performance"
        height="small"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Uncover Your Website's True SEO Potential
          </h2>
          <p className="text-lg text-gray-600">
            Our comprehensive SEO audit service analyzes over 200+ ranking factors
            to identify issues and opportunities that are affecting your website's
            search performance.
          </p>
        </div>

        {/* Audit Process Visualization */}
        <div className="relative h-[500px] mb-20">
          <Image
            src="/services/seo-audit-process-new.svg"
            alt="SEO Audit Process"
            fill
            className="object-contain"
          />
        </div>

        {/* Audit Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {auditAreas.map((area, index) => (
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

        {/* Audit Report Example */}
        <div className="bg-gray-50 rounded-2xl p-12 mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">
            Comprehensive Audit Deliverables
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliverables.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Checklist Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">
            Our 200+ Point SEO Audit Checklist
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sample Report Preview */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-12">
            Sample Audit Report
          </h3>
          <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/services/seo-audit-report-new.svg"
              alt="Sample SEO Audit Report"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Tools We Use */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-12">
            Professional Audit Tools
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-lg flex items-center justify-center">
              <Image
                src="/logos/Screaming Frog.svg"
                alt="Screaming Frog"
                width={150}
                height={50}
                className="object-contain"
              />
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg flex items-center justify-center">
              <Image
                src="/logos/ahrefs.svg"
                alt="Ahrefs"
                width={150}
                height={50}
                className="object-contain"
              />
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg flex items-center justify-center">
              <Image
                src="/logos/google-search-console.svg"
                alt="Google Search Console"
                width={150}
                height={50}
                className="object-contain"
              />
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg flex items-center justify-center">
              <Image
                src="/logos/google_analytics.svg"
                alt="Google Analytics"
                width={150}
                height={50}
                className="object-contain"
              />
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg flex items-center justify-center">
              <Image
                src="/logos/google_bigquery.svg"
                alt="Google BigQuery"
                width={150}
                height={50}
                className="object-contain"
              />
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg flex items-center justify-center">
              <Image
                src="/logos/semrush.svg"
                alt="SEMrush"
                width={150}
                height={50}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
