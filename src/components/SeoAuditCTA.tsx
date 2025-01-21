interface SeoAuditCTAProps {
  className?: string;
  background?: 'white' | 'gray' | 'blue';
}

export default function SeoAuditCTA({ className = '', background = 'white' }: SeoAuditCTAProps) {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    blue: 'bg-blue-600 text-white'
  }

  return (
    <section className={`${bgClasses[background]} py-20 ${className}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className={`text-3xl font-bold mb-6 ${background === 'blue' ? 'text-white' : 'text-gray-900'}`}>
          Ready to Improve Your SEO?
        </h2>
        <p className={`text-xl mb-8 max-w-2xl mx-auto ${background === 'blue' ? 'text-white/90' : 'text-gray-600'}`}>
          Get your free SEO audit today and discover opportunities for growth
        </p>
        <button 
          className={`${
            background === 'blue' 
              ? 'bg-white text-blue-600 hover:bg-gray-100' 
              : 'bg-blue-600 text-white hover:bg-blue-700'
          } px-8 py-3 rounded-full font-semibold transition-colors`}
        >
          Get Your Free SEO Audit
        </button>
      </div>
    </section>
  )
}
