import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/Hero'
import CTAButton from '@/components/CTAButton'
import FAQAccordion from '@/components/FAQAccordion'

interface AuditFeature {
  title: string;
  description: string;
  icon: string;
}

export default function FreeSeoAuditPage() {
  const auditFeatures: AuditFeature[] = [
    {
      title: 'Technical SEO Analysis',
      description: 'In-depth analysis of your website\'s technical health, including site speed, mobile-friendliness, and crawlability.',
      icon: '🔍'
    },
    {
      title: 'Keyword Performance',
      description: 'Review of your current keyword rankings and identification of new ranking opportunities.',
      icon: '📈'
    },
    {
      title: 'Content Evaluation',
      description: 'Assessment of your content quality, relevance, and optimization for search engines.',
      icon: '📝'
    },
    {
      title: 'Competitor Analysis',
      description: 'Comparison with your top competitors to identify gaps and opportunities in your SEO strategy.',
      icon: '🎯'
    },
    {
      title: 'Backlink Profile',
      description: 'Review of your backlink profile quality and identification of link-building opportunities.',
      icon: '🔗'
    },
    {
      title: 'Custom Action Plan',
      description: 'Personalized recommendations and actionable steps to improve your search rankings.',
      icon: '📋'
    }
  ]

  return (
    <div className="pb-20">
      <Hero 
        title="Free SEO Audit For Your Website"
        description="Discover your website's true SEO potential with our comprehensive analysis and get actionable insights to improve your rankings."
        height="large"
      />

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Audit Features */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-bold mb-6">What You'll Get</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Our comprehensive SEO audit will provide you with valuable insights
                    and actionable recommendations to improve your website's performance.
                  </p>
                </div>

                <div className="grid gap-8">
                  {auditFeatures.map((feature, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Trust Indicators */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold">Trusted by Leading Brands</h3>
                  <div className="grid grid-cols-3 gap-8">
                    {['techstart', 'greenliving', 'finpro'].map((client) => (
                      <Link key={client} href={`/clients#${client}`} className="relative h-12 opacity-50 hover:opacity-75 transition-opacity">
                        <Image
                          src={`/portfolio/${client}-logo.svg`}
                          alt={`${client} logo`}
                          fill
                          className="object-contain"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Audit Form */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <form className="space-y-6" action="/thank-you/audit">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Website URL*
                    </label>
                    <input
                      type="url"
                      placeholder="https://example.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name*
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Email*
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Main Competitors (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="List your main competitors' websites"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What are your main SEO challenges?
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your current SEO challenges and goals"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>

                  <div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        required
                      />
                      <span className="ml-2 text-sm text-gray-600">
                        I agree to receive the audit report and follow-up communications.
                        View our{' '}
                        <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                          Privacy Policy
                        </Link>
                      </span>
                    </label>
                  </div>

                  <CTAButton href="/thank-you/audit" variant="primary" size="large" className="w-full">
                    Get Your Free SEO Audit
                  </CTAButton>

                  <p className="text-sm text-gray-500 text-center">
                    Your audit report will be delivered within 24-48 hours
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">How It Works</h2>
            <p className="text-lg text-gray-600">
              Get your comprehensive SEO audit in three simple steps
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'Submit Your Website',
                  description: 'Fill out the form with your website details and specific concerns.'
                },
                {
                  step: '2',
                  title: 'We Analyze',
                  description: 'Our experts perform a thorough analysis of your website\'s SEO performance.'
                },
                {
                  step: '3',
                  title: 'Get Your Report',
                  description: 'Receive a detailed report with actionable recommendations within 48 hours.'
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">SEO Website Audit FAQs</h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about our SEO audit process
            </p>
          </div>
          <FAQAccordion
            faqs={[
              {
                category: "SEO Audit Questions",
                questions: [
                  {
                    question: "What is an SEO audit?",
                    answer: "An SEO audit is a comprehensive analysis of your website's search engine optimization health. It examines various factors including technical setup, content quality, backlink profile, user experience, and competitive positioning to identify areas for improvement and opportunities for better search engine rankings."
                  },
                  {
                    question: "Why is an SEO audit important?",
                    answer: "An SEO audit is crucial because it helps identify issues that may be preventing your website from ranking well in search results. It provides a clear roadmap for improvements, helps prioritize SEO efforts, and ensures your website follows current best practices and search engine guidelines."
                  },
                  {
                    question: "What are some common issues found during an SEO audit?",
                    answer: "Common issues include slow page load times, missing meta descriptions, broken links, duplicate content, poor mobile optimization, inadequate keyword targeting, thin content, technical errors in robots.txt or sitemap files, and problems with site structure or navigation."
                  },
                  {
                    question: "What tools can be used to perform an SEO audit?",
                    answer: "We use a combination of industry-leading tools including Google Search Console, Google Analytics, Screaming Frog, Ahrefs, SEMrush, and proprietary tools to perform comprehensive SEO audits. These tools help analyze different aspects of your website's SEO performance."
                  },
                  {
                    question: "How often should an SEO audit be conducted?",
                    answer: "We recommend conducting a comprehensive SEO audit every 6-12 months, with more frequent mini-audits focusing on specific aspects quarterly. However, the frequency may vary depending on your website's size, industry competitiveness, and how frequently you make major changes to your site."
                  },
                  {
                    question: "What are some key elements of an SEO audit?",
                    answer: "Key elements include technical SEO analysis (site speed, mobile-friendliness, indexing), on-page SEO review (content quality, meta tags, internal linking), off-page SEO assessment (backlink quality, social signals), competitive analysis, and user experience evaluation."
                  },
                  {
                    question: "How can an SEO audit improve website traffic?",
                    answer: "An SEO audit helps improve traffic by identifying and fixing issues that may be holding back your rankings, optimizing your content for relevant keywords, improving user experience, and ensuring your website follows SEO best practices. This leads to better visibility in search results and increased organic traffic."
                  },
                  {
                    question: "What are the best practices for conducting an SEO audit?",
                    answer: "Best practices include using multiple tools for comprehensive analysis, prioritizing issues based on impact and effort required, creating a clear action plan, implementing changes systematically, and monitoring results. It's also important to consider both technical and content aspects while maintaining focus on user experience."
                  }
                ]
              }
            ]}
          />
        </div>
      </section>
    </div>
  )
}
