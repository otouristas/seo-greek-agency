import Script from 'next/script'

interface BlogPostSchemaProps {
  title: string
  description: string
  datePublished: string
  dateModified: string
  author: {
    name: string
    url?: string
  }
  image?: string
  url: string
}

export default function BlogPostSchema({
  title,
  description,
  datePublished,
  dateModified,
  author,
  image,
  url
}: BlogPostSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    author: {
      '@type': 'Person',
      name: author.name,
      url: author.url
    },
    image: image || 'https://www.kasiotisg.com/og-image.jpg',
    url: url,
    datePublished: datePublished,
    dateModified: dateModified,
    publisher: {
      '@type': 'Organization',
      name: 'Another SEO Guru',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.kasiotisg.com/logo.svg'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    }
  }

  return (
    <Script id={`blog-post-schema-${title.toLowerCase().replace(/\s+/g, '-')}`} type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
  )
}
