import Image from 'next/image'
import Link from 'next/link'

interface HeroProps {
  title: string;
  description?: string;
  height?: 'small' | 'medium' | 'large';
  showCTA?: boolean;
  ctaText?: string;
  ctaLink?: string;
  secondaryCTA?: {
    text: string;
    link: string;
  };
}

export default function Hero({
  title,
  description,
  height = 'large',
  showCTA = false,
  ctaText = 'Get Free SEO Audit',
  ctaLink = '/free-seo-audit',
  secondaryCTA
}: HeroProps) {
  const heightClass = {
    small: 'h-[300px]',
    medium: 'h-[400px]',
    large: 'h-[500px]'
  }[height]

  return (
    <section className={`relative ${heightClass} bg-gradient-to-r from-blue-900 to-blue-800 text-white overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/hero-pattern.svg"
          alt="Background Pattern"
          fill
          className="object-cover"
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-40 right-1/4 w-24 h-24 bg-blue-300/20 rounded-full blur-xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 h-full flex items-center relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              {title}
            </h1>
            {description && (
              <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
                {description}
              </p>
            )}
            {showCTA && (
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <Link
                  href={ctaLink}
                  className="px-8 py-3 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-colors"
                >
                  {ctaText}
                </Link>
                {secondaryCTA && (
                  <Link
                    href={secondaryCTA.link}
                    className="px-8 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"
                  >
                    {secondaryCTA.text}
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
    </section>
  )
}
