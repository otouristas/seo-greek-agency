import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kasiotisg.com'
  
  const routes = [
    {
      route: '',
      priority: 1.0,
      changeFrequency: 'weekly'
    },
    {
      route: '/services',
      priority: 0.9,
      changeFrequency: 'weekly'
    },
    {
      route: '/services/seo-audits',
      priority: 0.8,
      changeFrequency: 'weekly'
    },
    {
      route: '/services/technical-seo',
      priority: 0.8,
      changeFrequency: 'weekly'
    },
    {
      route: '/services/on-page-seo',
      priority: 0.8,
      changeFrequency: 'weekly'
    },
    {
      route: '/services/off-page-seo',
      priority: 0.8,
      changeFrequency: 'weekly'
    },
    {
      route: '/services/local-seo',
      priority: 0.8,
      changeFrequency: 'weekly'
    },
    {
      route: '/services/ecommerce-seo',
      priority: 0.8,
      changeFrequency: 'weekly'
    },
    {
      route: '/services/content-marketing',
      priority: 0.8,
      changeFrequency: 'weekly'
    },
    {
      route: '/services/keyword-research',
      priority: 0.8,
      changeFrequency: 'weekly'
    },
    {
      route: '/services/analytics-reporting',
      priority: 0.8,
      changeFrequency: 'weekly'
    },
    {
      route: '/blog',
      priority: 0.8,
      changeFrequency: 'weekly'
    },
    {
      route: '/contact',
      priority: 0.7,
      changeFrequency: 'monthly'
    },
    {
      route: '/free-seo-audit',
      priority: 0.8,
      changeFrequency: 'weekly'
    },
    {
      route: '/pricing',
      priority: 0.8,
      changeFrequency: 'weekly'
    },
    {
      route: '/about',
      priority: 0.7,
      changeFrequency: 'monthly'
    },
    {
      route: '/privacy-policy',
      priority: 0.5,
      changeFrequency: 'monthly'
    },
    {
      route: '/terms-of-service',
      priority: 0.5,
      changeFrequency: 'monthly'
    }
  ]

  // Blog posts with their own configuration
  const blogPosts = [
    '/blog/local-seo-strategies-2025',
    '/blog/future-of-seo-ai-machine-learning',
    '/blog/effective-link-building-strategies',
    '/blog/core-web-vitals-guide',
    '/blog/content-optimization-ecommerce'
  ].map(post => ({
    route: post,
    priority: 0.7,
    changeFrequency: 'monthly' as const
  }))

  // Combine and format all routes
  return [...routes, ...blogPosts].map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: changeFrequency,
    priority: priority
  }))
}
