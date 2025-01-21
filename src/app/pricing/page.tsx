import Image from 'next/image'
import { Metadata } from 'next'
import PricingCard from '@/components/PricingCard'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SEO Pricing Plans | Transparent & Flexible Packages',
  description: 'Choose from our flexible SEO pricing plans designed to fit your business needs and budget. Get started with a free SEO audit today.',
  openGraph: {
    title: 'SEO Pricing Plans | Transparent & Flexible Packages',
    description: 'Choose from our flexible SEO pricing plans designed to fit your business needs and budget. Get started with a free SEO audit today.',
  },
  twitter: {
    title: 'SEO Pricing Plans | Transparent & Flexible Packages',
    description: 'Choose from our flexible SEO pricing plans designed to fit your business needs and budget. Get started with a free SEO audit today.',
  },
  alternates: {
    canonical: 'https://www.anotherseoguru.com/pricing',
  }
}

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

export default function PricingPage() {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-blue-900 to-blue-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/hero-pattern.svg"
            alt="Background Pattern"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Left side decorations */}
          <div className="absolute top-1/4 left-[10%] w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-1/3 left-[15%] w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-700" />
          <div className="absolute top-1/2 left-[5%] w-16 h-16 bg-blue-300/20 rounded-full blur-xl animate-pulse delay-300" />
          
          {/* Right side decorations */}
          <div className="absolute top-1/3 right-[10%] w-28 h-28 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-500" />
          <div className="absolute bottom-1/4 right-[15%] w-36 h-36 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000" />
          <div className="absolute top-1/4 right-[5%] w-20 h-20 bg-blue-300/20 rounded-full blur-xl animate-pulse delay-200" />
          
          {/* Center decorations */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-100" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <span className="text-blue-300 font-semibold mb-4">PRICING PLANS</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Choose Your SEO Success Plan
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Flexible plans designed to scale with your business. Get the tools and support you need to dominate search rankings.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="#pricing-plans" 
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors"
            >
              View Plans
            </Link>
            <Link 
              href="/contact" 
              className="bg-blue-700 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-colors border border-blue-500"
            >
              Contact Sales
            </Link>
          </div>

          {/* Features Pills */}
          <div className="flex flex-wrap gap-4 justify-center mt-12">
            {[
              { text: '14-Day Free Trial', icon: '🎁' },
              { text: 'No Credit Card Required', icon: '💳' },
              { text: '24/7 Support', icon: '🛟' },
              { text: 'Cancel Anytime', icon: '✨' }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm text-sm px-4 py-2 rounded-full flex items-center gap-2"
              >
                <span>{feature.icon}</span>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="pricing-plans" className="container mx-auto px-4 -mt-20">
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
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl text-blue-600">硫</span>
              <div>
                <h3 className="text-xl font-semibold">What types of payment do you accept?</h3>
                <p className="text-gray-600 mt-2">
                  We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans. All transactions are secure and encrypted.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl text-blue-600">硫</span>
              <div>
                <h3 className="text-xl font-semibold">None of your Plans fit my needs. Could you offer a custom Plan?</h3>
                <p className="text-gray-600 mt-2">
                  Absolutely! We understand that every business is unique. Contact us to discuss your specific requirements, and we'll create a custom plan tailored to your needs.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl text-blue-600">免</span>
              <div>
                <h3 className="text-xl font-semibold">How can I cancel my Plan?</h3>
                <p className="text-gray-600 mt-2">
                  You can cancel your subscription at any time through your account dashboard or by contacting our support team. No cancellation fees apply, and you'll retain access until the end of your billing period.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl text-blue-600">喝</span>
              <div>
                <h3 className="text-xl font-semibold">Do I have to sign any contract?</h3>
                <p className="text-gray-600 mt-2">
                  No long-term contracts required. Our plans are subscription-based and billed monthly or annually. You're free to upgrade, downgrade, or cancel at any time.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl text-blue-600">喝</span>
              <div>
                <h3 className="text-xl font-semibold">Do you offer a money back guarantee?</h3>
                <p className="text-gray-600 mt-2">
                  Yes, we offer a 30-day money-back guarantee on all our plans. If you're not completely satisfied with our service, we'll refund your payment, no questions asked.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl text-blue-600">硫</span>
              <div>
                <h3 className="text-xl font-semibold">Is there a free trial available?</h3>
                <p className="text-gray-600 mt-2">
                  Yes, all our plans come with a 14-day free trial. You can test all features without any commitment, and no credit card is required to start.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <Link 
            href="/contact"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
          >
            Contact our support team
            <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
