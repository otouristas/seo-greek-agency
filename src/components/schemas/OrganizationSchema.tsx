import Script from 'next/script'

export default function OrganizationSchema() {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SEO Greek Agency',
    url: 'https://www.kasiotisg.com',
    logo: 'https://www.kasiotisg.com/logo.svg',
    description: 'Expert SEO services to help your business grow online. We specialize in technical SEO, content optimization, and link building strategies.',
    sameAs: [
      'https://twitter.com/kasiotisg',
      'https://www.linkedin.com/in/kasiotisg',
      'https://www.facebook.com/kasiotisg',
      'https://www.instagram.com/kasiotisg'
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 SEO Street',
      addressLocality: 'Athens',
      addressRegion: 'Attica',
      postalCode: '12345',
      addressCountry: 'GR'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+30-123-456-7890',
      email: 'seo@kasiotisg.com'
    }
  }

  return (
    <Script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
    />
  )
}
