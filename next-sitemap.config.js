/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.kasiotisg.com',
  generateRobotsTxt: false, // We already have a custom robots.txt
  exclude: ['/thank-you/*', '/admin/*', '/private/*'],
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  transform: async (config, path) => {
    // Custom priority for specific pages
    const priorities = {
      '/': 1.0,
      '/services': 0.9,
      '/about': 0.8,
      '/portfolio': 0.8,
      '/clients': 0.8,
      '/pricing': 0.9,
      '/contact': 0.8,
      '/blog': 0.8
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString()
    }
  }
}
