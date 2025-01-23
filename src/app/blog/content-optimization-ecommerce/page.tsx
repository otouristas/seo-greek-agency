import Image from 'next/image'
import { Metadata } from 'next'
import { format } from 'date-fns'
import BlogLayout from '@/components/BlogLayout'

export const metadata: Metadata = {
  title: 'Content Optimization Tips for E-commerce: Drive Rankings and Sales',
  description: 'Learn how to optimize your e-commerce content for better search rankings and increased sales. Discover tips for product pages, category pages, descriptions, schema markup, and more.',
  alternates: {
    canonical: 'https://kasiotisg.com/blog/content-optimization-ecommerce',
  },
  openGraph: {
    title: 'Content Optimization Tips for E-commerce: Drive Rankings and Sales',
    description: 'Learn how to optimize your e-commerce content for better search rankings and increased sales. Discover tips for product pages, category pages, descriptions, schema markup, and more.',
    images: [
      {
        url: 'https://kasiotisg.com/blog/ecommerce-content.jpg',
        width: 1200,
        height: 630,
        alt: 'E-commerce Content Optimization Guide'
      }
    ]
  },
  twitter: {
    title: 'Content Optimization Tips for E-commerce: Drive Rankings and Sales',
    description: 'Learn how to optimize your e-commerce content for better search rankings and increased sales. Discover tips for product pages, category pages, descriptions, schema markup, and more.',
    images: ['https://kasiotisg.com/blog/ecommerce-content.jpg']
  },
  keywords: 'E-commerce, Content Optimization, SEO, Product Pages, Category Pages, Product Descriptions, Schema Markup, Rich Snippets, Buying Journey, Mobile Optimization, Conversion Rate Optimization, Online Sales'
}

const tableOfContents = [
  { title: 'Introduction', id: 'introduction' },
  { title: 'Importance of Optimization', id: 'importance' },
  { title: 'Product Page Optimization', id: 'product-pages' },
  { title: 'Category Page Optimization', id: 'category-pages' },
  { title: 'Product Description Writing', id: 'descriptions' },
  { title: 'Rich Snippets & Schema', id: 'schema' },
  { title: 'Buying Journey Content', id: 'buying-journey' },
  { title: 'Mobile Optimization', id: 'mobile' },
  { title: 'Conclusion', id: 'conclusion' }
]

const relatedPosts = [
  {
    title: 'Link Building Strategies That Actually Work',
    slug: 'effective-link-building-strategies',
    image: '/blog/link-building.jpg'
  },
  {
    title: 'Core Web Vitals Guide',
    slug: 'core-web-vitals-guide',
    image: '/blog/core-web-vitals.jpg'
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
      date={format(new Date('2025-01-15'), 'MMMM d, yyyy')}
      tableOfContents={tableOfContents}
      relatedPosts={relatedPosts}
      featuredImage="/blog/ecommerce-content.jpg"
    >
      <article>
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Content Optimization Tips for E-commerce: Drive Rankings and Sales
          </h1>

          {/* Featured Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
            <Image
              src="/blog/ecommerce-content.jpg"
              alt="E-commerce Content Optimization"
              fill
              className="object-cover"
              priority
            />
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <h2 id="introduction" className="scroll-mt-20">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            In the fiercely competitive world of e-commerce, your content is your most valuable asset. It's what attracts potential customers, guides them through the buying journey, and ultimately convinces them to make a purchase. Well-optimized content can be the difference between a thriving online store and one that gets lost in the digital noise.
          </p>

          <h2 id="importance" className="scroll-mt-20">The Importance of E-commerce Content Optimization</h2>
          <div className="bg-blue-50 rounded-xl p-6 my-8">
            <h4 className="font-semibold mb-3">Key Benefits</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div>
                  <strong>Improve Search Rankings:</strong> Appear higher in search results for relevant keywords, driving more organic traffic.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div>
                  <strong>Attract & Engage:</strong> Provide valuable information that answers customer questions and builds trust.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div>
                  <strong>Increase Conversions:</strong> Guide visitors through the buying process and persuade them to make a purchase.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div>
                  <strong>Build Authority:</strong> Establish your brand as a trusted source of information in your industry.
                </div>
              </li>
            </ul>
          </div>

          <h2 id="product-pages" className="scroll-mt-20">Product Page Optimization: Your Digital Salespeople</h2>
          <p className="text-gray-700 leading-relaxed">
            Your product pages are the workhorses of your e-commerce site. They are your digital salespeople, responsible for showcasing your products in the best possible light and convincing customers to buy.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold mb-3">Essential Elements</h4>
              <ul className="space-y-2">
                <li>Descriptive, keyword-rich titles</li>
                <li>Unique product descriptions</li>
                <li>High-quality product images</li>
                <li>Detailed specifications</li>
                <li>Customer reviews and ratings</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold mb-3">Conversion Elements</h4>
              <ul className="space-y-2">
                <li>Clear pricing information</li>
                <li>Stock availability status</li>
                <li>Shipping information</li>
                <li>Strong call-to-action buttons</li>
                <li>Trust indicators</li>
              </ul>
            </div>
          </div>

          <h2 id="category-pages" className="scroll-mt-20">Category Page Optimization</h2>
          <div className="bg-green-50 rounded-xl p-6 my-8">
            <h4 className="font-semibold mb-3">Category Page Best Practices</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <div>
                  <strong>Optimized Descriptions:</strong> Write unique and informative category descriptions with relevant keywords.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <div>
                  <strong>Hierarchical Structure:</strong> Organize categories logically for easy navigation.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <div>
                  <strong>Internal Linking:</strong> Connect related categories and products effectively.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <div>
                  <strong>Filtered Navigation:</strong> Implement useful filters for better user experience.
                </div>
              </li>
            </ul>
          </div>

          <h2 id="descriptions" className="scroll-mt-20">Product Description Writing</h2>
          <div className="bg-purple-50 rounded-xl p-6 my-8">
            <h4 className="font-semibold mb-3">Writing Tips</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <div>
                  <strong>Focus on Benefits:</strong> Explain how the product solves problems or improves life.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <div>
                  <strong>Natural Keywords:</strong> Include relevant keywords without stuffing.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <div>
                  <strong>Specific Details:</strong> Include comprehensive product information.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <div>
                  <strong>Audience Focus:</strong> Write in language that resonates with your target market.
                </div>
              </li>
            </ul>
          </div>

          <h2 id="schema" className="scroll-mt-20">Rich Snippets and Schema Markup</h2>
          <div className="bg-yellow-50 rounded-xl p-6 my-8">
            <h4 className="font-semibold mb-3">Essential Schema Types</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium mb-2">Product Schema</h5>
                <ul className="space-y-1 text-sm">
                  <li>Product name</li>
                  <li>Description</li>
                  <li>Images</li>
                  <li>Price</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-2">Additional Schema</h5>
                <ul className="space-y-1 text-sm">
                  <li>Review ratings</li>
                  <li>Availability status</li>
                  <li>Offers</li>
                  <li>Brand information</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 id="buying-journey" className="scroll-mt-20">Content for Different Stages of the Buying Journey</h2>
          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="bg-indigo-50 rounded-xl p-6">
              <h4 className="font-semibold mb-3">Awareness Stage</h4>
              <ul className="space-y-2 text-sm">
                <li>Educational blog posts</li>
                <li>Buying guides</li>
                <li>How-to articles</li>
                <li>Problem-solving content</li>
              </ul>
            </div>
            <div className="bg-indigo-50 rounded-xl p-6">
              <h4 className="font-semibold mb-3">Consideration Stage</h4>
              <ul className="space-y-2 text-sm">
                <li>Comparison guides</li>
                <li>Product specifications</li>
                <li>Feature highlights</li>
                <li>Expert reviews</li>
              </ul>
            </div>
            <div className="bg-indigo-50 rounded-xl p-6">
              <h4 className="font-semibold mb-3">Decision Stage</h4>
              <ul className="space-y-2 text-sm">
                <li>Customer testimonials</li>
                <li>Case studies</li>
                <li>Social proof</li>
                <li>Special offers</li>
              </ul>
            </div>
          </div>

          <h2 id="mobile" className="scroll-mt-20">Mobile Optimization</h2>
          <div className="bg-orange-50 rounded-xl p-6 my-8">
            <h4 className="font-semibold mb-3">Mobile Content Tips</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <div>
                  <strong>Short Paragraphs:</strong> Break content into digestible chunks for mobile reading.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <div>
                  <strong>Expandable Sections:</strong> Use accordions to manage content length.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <div>
                  <strong>Optimized Images:</strong> Ensure fast loading on mobile devices.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <div>
                  <strong>Clear CTAs:</strong> Make buttons easily tappable on mobile.
                </div>
              </li>
            </ul>
          </div>

          <h2 id="conclusion" className="scroll-mt-20">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed">
            E-commerce content optimization is an ongoing process that requires careful planning, execution, and continuous improvement. By implementing these best practices, you can create a more engaging and user-friendly shopping experience, improve your search engine rankings, and ultimately drive more sales.
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
