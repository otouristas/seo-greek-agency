'use client'

import { CheckIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  price: number;
  period?: string;
  currency?: string;
  features: PricingFeature[];
  limits: string[];
  highlighted?: boolean;
}

export default function PricingCard({
  name,
  price,
  period = "per month",
  currency = "USD",
  features,
  limits,
  highlighted = false
}: PricingCardProps) {
  return (
    <div className={`relative rounded-2xl p-8 ${
      highlighted 
        ? 'bg-gradient-to-b from-blue-600 to-blue-700 text-white shadow-xl scale-105' 
        : 'bg-white text-gray-900 border border-gray-200'
    }`}>
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">{name}</h3>
        <div className="mb-6">
          <span className="text-sm">{currency}</span>
          <span className="text-5xl font-bold mx-1">{price}</span>
          <span className="text-gray-500">{period}</span>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        {limits.map((limit, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="text-xl">ﭶ</span>
            <span className={highlighted ? 'text-gray-100' : 'text-gray-700'}>
              {limit}
            </span>
          </div>
        ))}
      </div>

      <div className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <CheckIcon className={`w-5 h-5 ${
              feature.included 
                ? highlighted ? 'text-white' : 'text-blue-600'
                : 'text-gray-400'
            }`} />
            <span className={`${
              feature.included 
                ? highlighted ? 'text-white' : 'text-gray-900'
                : 'text-gray-400'
            }`}>
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      <Link
        href="/contact"
        className={`block text-center py-3 px-6 rounded-full font-semibold transition-colors ${
          highlighted
            ? 'bg-white text-blue-600 hover:bg-gray-100'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        Get Started Free
      </Link>
    </div>
  )
}
