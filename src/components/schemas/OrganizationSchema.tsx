import Script from 'next/script'

export default function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Another SEO Guru',
    url: 'https://www.kasiotisg.com',
    logo: 'https://www.kasiotisg.com/logo.svg',
    description: 'Another SEO Guru provides expert SEO services to boost your rankings, drive organic traffic, and increase conversions.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Your Street Address',
      addressLocality: 'Your City',
      addressRegion: 'Your State',
      postalCode: 'Your Postal Code',
      addressCountry: 'Your Country'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-234-567-8900',
      contactType: 'customer service',
      email: 'contact@kasiotisg.com'
    },
    sameAs: [
      'https://www.facebook.com/anotherseoguru',
      'https://www.twitter.com/anotherseoguru',
      'https://www.linkedin.com/company/anotherseoguru',
      'https://www.instagram.com/anotherseoguru'
    ]
  }

  return (
    <Script id="organization-schema" type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
  )
}
