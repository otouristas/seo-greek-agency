import Script from 'next/script'

interface ServiceSchemaProps {
  name: string
  description: string
  url: string
  provider?: {
    name: string
    url: string
  }
}

export default function ServiceSchema({ name, description, url, provider }: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: provider || {
      '@type': 'Organization',
      name: 'Another SEO Guru',
      url: 'https://www.anotherseoguru.com'
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 'YOUR_LATITUDE',
        longitude: 'YOUR_LONGITUDE'
      },
      geoRadius: '50000'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'SEO Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: name
          }
        }
      ]
    }
  }

  return (
    <Script id={`service-schema-${name.toLowerCase().replace(/\s+/g, '-')}`} type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
  )
}
