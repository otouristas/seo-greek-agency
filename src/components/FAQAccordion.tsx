'use client'

import { useEffect } from 'react'

interface FAQ {
  category: string;
  questions: {
    question: string;
    answer: string;
  }[];
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  return (
    <div className="max-w-4xl mx-auto space-y-16">
      {faqs.map((category, categoryIndex) => (
        <div 
          key={categoryIndex}
          id={category.category.toLowerCase().replace(/\s+/g, '-')}
          className="scroll-mt-20"
        >
          <h2 className="text-3xl font-bold mb-8">{category.category}</h2>
          <div className="space-y-6">
            {category.questions.map((faq, faqIndex) => (
              <div
                key={faqIndex}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer p-6">
                    <h3 className="text-xl font-semibold pr-8">{faq.question}</h3>
                    <span className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 sm:ml-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-180"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">
                    {faq.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
