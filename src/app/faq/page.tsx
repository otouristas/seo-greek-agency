import Image from 'next/image'
import Hero from '@/components/Hero'
import FAQAccordion from '@/components/FAQAccordion'

interface FAQ {
  category: string;
  questions: {
    question: string;
    answer: string;
  }[];
}

export default function FAQPage() {
  const faqs: FAQ[] = [
    {
      category: 'General SEO',
      questions: [
        {
          question: 'What is SEO and why is it important?',
          answer: 'SEO (Search Engine Optimization) is the practice of optimizing your website to increase its visibility in organic search results. It\'s important because it helps drive targeted traffic to your website, increases brand awareness, and can lead to higher conversions and revenue.'
        },
        {
          question: 'How long does it take to see results from SEO?',
          answer: 'SEO is a long-term strategy, typically taking 3-6 months to see significant results. However, this can vary depending on factors like your website\'s current status, competition level, and the aggressiveness of your SEO strategy.'
        },
        {
          question: 'What makes Another SEO Guru different from other agencies?',
          answer: 'We combine data-driven strategies with personalized service. Our team stays ahead of industry trends, uses advanced analytics, and provides transparent reporting. We focus on delivering measurable results and maintaining clear communication throughout our partnership.'
        }
      ]
    },
    {
      category: 'Services & Pricing',
      questions: [
        {
          question: 'What services do you offer?',
          answer: 'We offer comprehensive SEO services including keyword research, on-page optimization, technical SEO, content marketing, link building, local SEO, e-commerce SEO, and analytics reporting. Each service can be customized to meet your specific needs.'
        },
        {
          question: 'How much do your services cost?',
          answer: 'Our pricing varies based on your specific needs, website size, and goals. We offer flexible packages starting from basic SEO audits to comprehensive monthly services. Contact us for a customized quote based on your requirements.'
        },
        {
          question: 'Do you require long-term contracts?',
          answer: 'While we recommend a minimum 6-month commitment for optimal results, we offer flexible contract terms. We\'re confident in our ability to deliver results and want to build long-term partnerships based on success, not contractual obligations.'
        }
      ]
    },
    {
      category: 'Process & Methodology',
      questions: [
        {
          question: 'What is your SEO process?',
          answer: 'Our process begins with a comprehensive audit, followed by strategy development, implementation, and ongoing optimization. We focus on technical improvements, content optimization, link building, and continuous monitoring and adjustment based on performance data.'
        },
        {
          question: 'How do you measure success?',
          answer: 'We track multiple KPIs including organic traffic growth, keyword rankings, conversion rates, and ROI. We provide detailed monthly reports showing your progress across all key metrics and explain what the numbers mean for your business.'
        },
        {
          question: 'Do you follow Google\'s guidelines?',
          answer: 'Absolutely! We strictly adhere to Google\'s webmaster guidelines and employ only white-hat SEO techniques. Our goal is to build sustainable, long-term success for your website while avoiding any practices that could risk penalties.'
        }
      ]
    },
    {
      category: 'Technical Questions',
      questions: [
        {
          question: 'Will I need to make changes to my website?',
          answer: 'Some technical changes may be necessary to optimize your website for search engines. Our team will guide you through any required changes and can either implement them directly or provide detailed instructions for your development team.'
        },
        {
          question: 'How do you handle website security during optimization?',
          answer: 'We follow strict security protocols and best practices when working on your website. We use secure access methods, maintain backups, and ensure all optimizations are implemented safely without compromising your website\'s security.'
        },
        {
          question: 'Can you help with mobile optimization?',
          answer: 'Yes! Mobile optimization is crucial for SEO success. We ensure your website performs well on all devices through responsive design optimization, mobile-first indexing preparation, and speed optimization for mobile users.'
        }
      ]
    }
  ]

  return (
    <div className="pb-20">
      <Hero 
        title="Frequently Asked Questions"
        description="Find answers to common questions about our SEO services, process, and methodology."
        height="large"
        showCTA={true}
        ctaText="Get Started"
        ctaLink="/free-seo-audit"
        secondaryCTA={{
          text: "Contact Us",
          link: "/contact"
        }}
      />

      {/* Category Quick Links */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {faqs.map((category, index) => (
              <a
                key={index}
                href={`#${category.category.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-6 py-2 bg-white rounded-full border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                {category.category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Can't find the answer you're looking for? Our team is here to help!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/free-seo-audit"
                className="px-8 py-3 bg-white text-blue-600 rounded-full border-2 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                Get Free SEO Audit
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
