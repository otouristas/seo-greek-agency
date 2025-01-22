import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.kasiotisg.com'
  
  const routes = [
    '',
    '/services',
    '/services/technical-seo',
    '/services/on-page-seo',
    '/services/off-page-seo',
    '/services/local-seo',
    '/services/ecommerce-seo',
    '/services/content-marketing',
    '/services/keyword-research',
    '/services/seo-audits',
    '/services/analytics-reporting',
    '/blog',
    '/contact',
    '/free-seo-audit',
    '/pricing',
    '/portfolio',
    '/about',
    '/privacy-policy',
    '/terms-of-service'
  ]

  const blogPosts = [
    '/blog/local-seo-strategies-2025',
    '/blog/future-of-seo-ai-machine-learning',
    '/blog/effective-link-building-strategies',
    '/blog/core-web-vitals-guide',
    '/blog/content-optimization-ecommerce'
  ]

  const staticPages = routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8
  }))

  const blogPages = blogPosts.map(post => ({
    url: `${baseUrl}${post}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }))

  return [...staticPages, ...blogPages]
}
