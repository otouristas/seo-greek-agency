import Image from 'next/image'
import Hero from '@/components/Hero'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

export default function AnalyticsReportingPage() {
  const features = [
    {
      title: 'Custom Dashboards',
      description: 'Personalized dashboards showing your most important metrics',
      icon: '/icons/dashboard.svg'
    },
    {
      title: 'Real-Time Tracking',
      description: 'Monitor your website performance as it happens',
      icon: '/icons/real-time.svg'
    },
    {
      title: 'Conversion Tracking',
      description: 'Track goals, sales, and other important conversions',
      icon: '/icons/conversion-tracking.svg'
    },
    {
      title: 'Traffic Analysis',
      description: 'Detailed insights into your traffic sources and patterns',
      icon: '/icons/traffic-analysis.svg'
    },
    {
      title: 'User Behavior',
      description: 'Understand how visitors interact with your site',
      icon: '/icons/user-behavior.svg'
    },
    {
      title: 'ROI Reporting',
      description: 'Measure the return on your SEO investment',
      icon: '/icons/roi-reporting.svg'
    }
  ]

  const metrics = [
    {
      label: 'Organic Traffic',
      value: '+127%',
      period: 'Year over Year',
      icon: '/icons/organic-traffic.svg'
    },
    {
      label: 'Conversion Rate',
      value: '+45%',
      period: 'Quarter over Quarter',
      icon: '/icons/conversion-rate.svg'
    },
    {
      label: 'Rankings',
      value: '+89',
      period: 'Keywords in Top 10',
      icon: '/icons/rankings.svg'
    },
    {
      label: 'ROI',
      value: '312%',
      period: 'Return on Investment',
      icon: '/icons/roi.svg'
    }
  ]

  const reportTypes = [
    {
      title: 'Monthly Performance Reports',
      items: [
        'Organic traffic growth',
        'Keyword rankings progress',
        'Conversion metrics',
        'Technical SEO health',
        'Content performance',
        'Backlink acquisition'
      ]
    },
    {
      title: 'Quarterly Strategy Reports',
      items: [
        'Competitive analysis',
        'Market opportunity assessment',
        'Strategic recommendations',
        'ROI calculations',
        'Future roadmap planning',
        'Resource allocation'
      ]
    }
  ]

  return (
    <div className="pb-20">
      <Hero 
        title="Analytics & Reporting"
        description="Turn data into actionable insights for your business"
        height="small"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Data-Driven Decisions for Better Results
          </h2>
          <p className="text-lg text-gray-600">
            Our analytics and reporting services provide clear, actionable insights
            into your website's performance, helping you make informed decisions
            to improve your SEO results.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="relative h-[500px] mb-20 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/services/analytics-dashboard.svg"
            alt="Analytics Dashboard"
            fill
            className="object-contain"
          />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="relative w-16 h-16 mb-6">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Key Metrics */}
        <div className="bg-gray-50 rounded-2xl p-12 mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">
            Key Performance Metrics
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <Image
                    src={metric.icon}
                    alt={metric.label}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold mb-2">{metric.label}</div>
                <div className="text-sm text-gray-600">{metric.period}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Report Types */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {reportTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">{type.title}</h3>
              <ul className="space-y-4">
                {type.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center space-x-3">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tools Integration */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-12">
            Analytics Tools We Use
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Image
              src="/tools/google-analytics.svg"
              alt="Google Analytics"
              width={150}
              height={50}
              className="mx-auto"
            />
            <Image
              src="/tools/data-studio.svg"
              alt="Google Data Studio"
              width={150}
              height={50}
              className="mx-auto"
            />
            <Image
              src="/tools/search-console.svg"
              alt="Google Search Console"
              width={150}
              height={50}
              className="mx-auto"
            />
            <Image
              src="/tools/tag-manager.svg"
              alt="Google Tag Manager"
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
