import Image from 'next/image'
import { Metadata } from 'next'
import { format } from 'date-fns'
import BlogLayout from '@/components/BlogLayout'

export const metadata: Metadata = {
  title: 'Core Web Vitals Guide: Optimize Your Website Performance',
  description: 'Complete guide to Core Web Vitals. Learn how to measure and improve LCP, FID, and CLS for better user experience and SEO performance.',
  alternates: {
    canonical: '/blog/core-web-vitals-guide',
  },
  openGraph: {
    title: 'Core Web Vitals: A Complete Guide',
    description: 'A comprehensive guide to Core Web Vitals (LCP, FID, CLS). Learn how to optimize these key metrics for improved SEO performance and a better user experience.',
  },
  twitter: {
    title: 'Core Web Vitals: A Complete Guide',
    description: 'A comprehensive guide to Core Web Vitals (LCP, FID, CLS). Learn how to optimize these key metrics for improved SEO performance and a better user experience.',
  },
  keywords: 'Core Web Vitals, LCP, FID, CLS, SEO, Page Experience, Google, User Experience, Web Performance, Page Speed, Optimization, Website Optimization, Ranking Factors'
}

const tableOfContents = [
  { title: 'Introduction', id: 'introduction' },
  { title: 'Understanding Core Web Vitals', id: 'understanding' },
  { title: 'The Three Pillars', id: 'three-pillars' },
  { title: 'Largest Contentful Paint (LCP)', id: 'lcp' },
  { title: 'First Input Delay (FID)', id: 'fid' },
  { title: 'Cumulative Layout Shift (CLS)', id: 'cls' },
  { title: 'Measuring Core Web Vitals', id: 'measuring' },
  { title: 'Impact on SEO', id: 'impact' },
  { title: 'Conclusion', id: 'conclusion' }
]

const relatedPosts = [
  {
    title: 'Link Building Strategies That Actually Work',
    slug: 'effective-link-building-strategies',
    image: '/blog/link-building.jpg'
  },
  {
    title: 'Content Optimization Tips for E-commerce',
    slug: 'content-optimization-ecommerce',
    image: '/blog/ecommerce-content.jpg'
  },
  {
    title: 'Local SEO Strategies for 2025',
    slug: 'local-seo-strategies-2025',
    image: '/blog/local-seo.jpg'
  }
]

export default function BlogPost() {
  return (
    <BlogLayout
      author={{
        name: 'George K.',
        role: 'CEO',
        image: '/team/george-k.svg'
      }}
      date={format(new Date('2025-01-10'), 'MMMM d, yyyy')}
      tableOfContents={tableOfContents}
      relatedPosts={relatedPosts}
    >
      <article>
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Core Web Vitals: A Complete Guide
          </h1>

          {/* Featured Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
            <Image
              src="/blog/core-web-vitals.jpg"
              alt="Core Web Vitals Guide"
              fill
              className="object-cover"
              priority
            />
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <h2 id="introduction" className="scroll-mt-20">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            In today's fast-paced digital world, user experience is paramount. Google has recognized this by introducing Core Web Vitals, a set of metrics that are critical to a website's overall user experience. As a website owner or SEO professional, understanding and optimizing for Core Web Vitals is essential for maintaining strong search rankings and providing a positive experience for your visitors.
          </p>

          <h2 id="understanding" className="scroll-mt-20">Understanding Core Web Vitals</h2>
          <p className="text-gray-700 leading-relaxed">
            Core Web Vitals are a set of specific factors that Google considers important in a webpage's overall user experience. They are a subset of Google's larger Page Experience signals, which combine Core Web Vitals with other metrics like mobile-friendliness, safe-browsing, HTTPS, and intrusive interstitial guidelines.
          </p>

          <h2 id="three-pillars" className="scroll-mt-20">The Three Pillars of Core Web Vitals</h2>
          <p className="text-gray-700 leading-relaxed">
            Core Web Vitals currently consist of three main metrics: Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS). Each metric measures a distinct aspect of the user experience related to loading speed, interactivity, and visual stability.
          </p>

          <h2 id="lcp" className="scroll-mt-20">1. Largest Contentful Paint (LCP): Measuring Loading Performance</h2>
          <div className="bg-blue-50 rounded-xl p-6 my-8">
            <p className="mb-4">
              <strong>Target:</strong> To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading.
            </p>
            <h4 className="font-semibold mb-3">How to Optimize LCP</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>Optimize Server Response Times:</strong> A faster server response time directly improves all page load metrics, including LCP.</div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>Implement Efficient Caching:</strong> Browser caching can store page resources on the user's device.</div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>Optimize and Compress Images:</strong> Use appropriate formats (WebP) and responsive images.</div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>Minify CSS and JavaScript:</strong> Reduce file sizes to speed up download and parsing time.</div>
              </li>
            </ul>
          </div>

          <h2 id="fid" className="scroll-mt-20">2. First Input Delay (FID): Measuring Interactivity</h2>
          <div className="bg-blue-50 rounded-xl p-6 my-8">
            <p className="mb-4">
              <strong>Target:</strong> Pages should have an FID of 100 milliseconds or less.
            </p>
            <h4 className="font-semibold mb-3">Improving FID</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>Minimize JavaScript Execution Time:</strong> Optimize code efficiency and defer non-critical JavaScript.</div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>Break Up Long Tasks:</strong> Split complex JavaScript tasks into smaller, asynchronous tasks.</div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>Use Web Workers:</strong> Run scripts in background threads to improve responsiveness.</div>
              </li>
            </ul>
          </div>

          <h2 id="cls" className="scroll-mt-20">3. Cumulative Layout Shift (CLS): Measuring Visual Stability</h2>
          <div className="bg-blue-50 rounded-xl p-6 my-8">
            <p className="mb-4">
              <strong>Target:</strong> Pages should maintain a CLS score of 0.1 or less.
            </p>
            <h4 className="font-semibold mb-3">Reducing Layout Shifts</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>Include Size Attributes:</strong> Always specify dimensions for images and videos.</div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>Reserve Space for Ads:</strong> Allocate space for ad slots in your layout.</div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>Use transform Animations:</strong> Prefer CSS transform properties over layout-triggering properties.</div>
              </li>
            </ul>
          </div>

          <h2 id="measuring" className="scroll-mt-20">Measuring Core Web Vitals</h2>
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold mb-3">Google Tools</h4>
              <ul className="space-y-2">
                <li>Google Search Console</li>
                <li>PageSpeed Insights</li>
                <li>Chrome DevTools</li>
                <li>Lighthouse</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold mb-3">Key Features</h4>
              <ul className="space-y-2">
                <li>Real-user measurements</li>
                <li>Lab data analysis</li>
                <li>Performance monitoring</li>
                <li>Optimization suggestions</li>
              </ul>
            </div>
          </div>

          <h2 id="impact" className="scroll-mt-20">Impact on SEO</h2>
          <div className="bg-yellow-50 rounded-xl p-6 my-8">
            <p className="text-gray-800">
              Core Web Vitals are a confirmed ranking factor in Google's search algorithm. Sites that meet Google's benchmarks for these metrics will have a competitive advantage in search results. Prioritizing Core Web Vitals optimization can lead to:
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Improved search rankings
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Increased organic traffic
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Better user experience
              </li>
            </ul>
          </div>

          <h2 id="conclusion" className="scroll-mt-20">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed">
            Core Web Vitals are essential metrics for any website aiming to provide a great user experience and maintain strong search rankings. Regular monitoring and optimization of LCP, FID, and CLS should be an integral part of your ongoing SEO and website maintenance strategy. By focusing on these metrics, you can create a faster, more interactive, and visually stable website that both users and search engines will love.
          </p>

          {/* Tags */}
          <div className="mt-12 pt-6 border-t">
            <h4 className="text-sm font-semibold text-gray-600 mb-3">Keywords</h4>
            <div className="flex flex-wrap gap-2">
              {metadata.keywords?.toString().split(', ').map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </BlogLayout>
  )
}
