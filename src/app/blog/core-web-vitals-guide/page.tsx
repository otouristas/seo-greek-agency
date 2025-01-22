import { Metadata } from 'next'
import BlogPostLayout from '@/components/BlogPostLayout'

export const metadata: Metadata = {
  title: 'Core Web Vitals: A Complete Guide | SEO Greek Agency',
  description: 'Learn everything you need to know about Core Web Vitals and how they affect your website\'s SEO performance. Master LCP, FID, and CLS metrics.',
  openGraph: {
    title: 'Core Web Vitals: A Complete Guide',
    description: 'Learn everything you need to know about Core Web Vitals and how they affect your website\'s SEO performance.',
    type: 'article',
    publishedTime: '2025-01-10T00:00:00Z',
    authors: ['Emma Davis'],
    images: [
      {
        url: 'https://www.kasiotisg.com/blog/core-web-vitals.jpg',
        width: 1200,
        height: 630,
        alt: 'Core Web Vitals Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Core Web Vitals: A Complete Guide',
    description: 'Learn everything you need to know about Core Web Vitals and how they affect your website\'s SEO performance.',
    images: ['https://www.kasiotisg.com/blog/core-web-vitals.jpg'],
  },
  alternates: {
    canonical: 'https://www.kasiotisg.com/blog/core-web-vitals-guide',
  }
}

const content = `
  <h2>Understanding Core Web Vitals</h2>
  <p>Core Web Vitals are a set of specific factors that Google considers important in a webpage's overall user experience. They are part of Google's Page Experience signals.</p>

  <h2>Largest Contentful Paint (LCP)</h2>
  <p>LCP measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading.</p>

  <h3>How to Optimize LCP</h3>
  <ul>
    <li>Optimize server response times</li>
    <li>Implement efficient caching</li>
    <li>Optimize and compress images</li>
    <li>Minify CSS and JavaScript</li>
  </ul>

  <h2>First Input Delay (FID)</h2>
  <p>FID measures interactivity. Pages should have an FID of 100 milliseconds or less to ensure good user experience.</p>

  <h3>Improving FID</h3>
  <ul>
    <li>Minimize JavaScript execution time</li>
    <li>Break up long tasks</li>
    <li>Optimize your page for interaction readiness</li>
    <li>Use a web worker</li>
  </ul>

  <h2>Cumulative Layout Shift (CLS)</h2>
  <p>CLS measures visual stability. Pages should maintain a CLS of 0.1 or less to ensure a good user experience.</p>

  <h3>Reducing Layout Shifts</h3>
  <ul>
    <li>Always include size attributes on images and videos</li>
    <li>Reserve space for ads</li>
    <li>Avoid inserting content above existing content</li>
    <li>Use transform animations instead of properties that trigger layout changes</li>
  </ul>

  <h2>Measuring Core Web Vitals</h2>
  <p>There are several tools available to measure Core Web Vitals:</p>
  <ul>
    <li>Google Search Console</li>
    <li>PageSpeed Insights</li>
    <li>Chrome DevTools</li>
    <li>Lighthouse</li>
  </ul>

  <h2>Impact on SEO</h2>
  <p>Core Web Vitals are now a ranking factor in Google's algorithm. Sites that meet these thresholds have a competitive advantage in search results.</p>

  <h2>Conclusion</h2>
  <p>Core Web Vitals are essential metrics for any website looking to provide a great user experience and maintain strong search rankings. Regular monitoring and optimization of these metrics should be part of your ongoing SEO strategy.</p>
`

export default function BlogPost() {
  return (
    <BlogPostLayout
      title="Core Web Vitals: A Complete Guide"
      excerpt="Learn everything you need to know about Core Web Vitals and how they affect your website's SEO performance."
      content={content}
      date="2025-01-10"
      author={{
        name: "Emma Davis",
        role: "Technical SEO Lead",
        image: "/team/emma-davis.jpg"
      }}
      category="Technical SEO"
      readTime="12 min read"
      image="/blog/core-web-vitals.jpg"
      slug="core-web-vitals-guide"
    />
  )
}
