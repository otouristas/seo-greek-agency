import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Blog | Insights, Tips & News',
  description: 'Stay up-to-date with the latest SEO trends, tips, and news on the Another SEO Guru blog. Learn how to improve your website\'s search engine performance.',
  openGraph: {
    title: 'SEO Blog | Insights, Tips & News',
    description: 'Stay up-to-date with the latest SEO trends, tips, and news on the Another SEO Guru blog. Learn how to improve your website\'s search engine performance.',
  },
  twitter: {
    title: 'SEO Blog | Insights, Tips & News',
    description: 'Stay up-to-date with the latest SEO trends, tips, and news on the Another SEO Guru blog. Learn how to improve your website\'s search engine performance.',
  },
  alternates: {
    canonical: 'https://www.anotherseoguru.com/blog',
  }
}

interface BlogPost {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  category: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

export default function BlogPage() {
  const blogPosts: BlogPost[] = [
    {
      title: 'The Future of SEO: AI and Machine Learning Impact',
      excerpt: 'Explore how artificial intelligence and machine learning are reshaping the SEO landscape and what it means for your business.',
      slug: 'future-of-seo-ai-machine-learning',
      date: 'January 15, 2025',
      author: {
        name: 'John Smith',
        role: 'CEO',
        image: '/team/john-smith.jpg'
      },
      category: 'SEO Trends',
      readTime: '8 min read',
      image: '/blog/ai-seo-future.jpg',
      featured: true
    },
    {
      title: 'Core Web Vitals: A Complete Guide',
      excerpt: 'Learn everything you need to know about Core Web Vitals and how they affect your website\'s SEO performance.',
      slug: 'core-web-vitals-guide',
      date: 'January 10, 2025',
      author: {
        name: 'Emma Davis',
        role: 'Technical SEO Lead',
        image: '/team/emma-davis.jpg'
      },
      category: 'Technical SEO',
      readTime: '12 min read',
      image: '/blog/core-web-vitals.jpg',
      featured: true
    },
    {
      title: 'Local SEO Strategies for 2025',
      excerpt: 'Discover the latest local SEO strategies that will help your business dominate local search results.',
      slug: 'local-seo-strategies-2025',
      date: 'January 5, 2025',
      author: {
        name: 'Sarah Johnson',
        role: 'Head of SEO Strategy',
        image: '/team/sarah-johnson.jpg'
      },
      category: 'Local SEO',
      readTime: '10 min read',
      image: '/blog/local-seo.jpg'
    },
    {
      title: 'Content Optimization Tips for E-commerce',
      excerpt: 'Learn how to optimize your e-commerce content for better rankings and increased sales.',
      slug: 'content-optimization-ecommerce',
      date: 'December 28, 2024',
      author: {
        name: 'Michael Chen',
        role: 'Content Strategy Director',
        image: '/team/michael-chen.jpg'
      },
      category: 'E-commerce',
      readTime: '15 min read',
      image: '/blog/ecommerce-content.jpg'
    },
    {
      title: 'Link Building Strategies That Actually Work',
      excerpt: 'Discover effective link building strategies that can help improve your website\'s authority and rankings.',
      slug: 'effective-link-building-strategies',
      date: 'December 20, 2024',
      author: {
        name: 'Sarah Johnson',
        role: 'Head of SEO Strategy',
        image: '/team/sarah-johnson.jpg'
      },
      category: 'Link Building',
      readTime: '11 min read',
      image: '/blog/link-building.jpg'
    }
  ]

  const categories = Array.from(new Set(blogPosts.map(post => post.category)))
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-blue-900 to-blue-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/hero-pattern.svg"
            alt="Background Pattern"
            fill
            className="object-cover"
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000" />
          <div className="absolute top-40 right-1/4 w-24 h-24 bg-blue-300/20 rounded-full blur-xl animate-pulse delay-500" />
        </div>

        <div className="container mx-auto px-4 h-full flex items-center relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                SEO Insights &<br />Expert Knowledge
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
                Stay ahead with the latest SEO trends, strategies, 
                and industry insights from our experts.
              </p>
            </div>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2">
                  <svg
                    className="w-6 h-6 text-white/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-6 py-2 rounded-full bg-blue-600 text-white">
              All Posts
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-2 rounded-full border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <div key={index} className="group">
                <a href={`/blog/${post.slug}`} className="block">
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <span className="text-blue-600">{post.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600">{post.excerpt}</p>
                    <div className="flex items-center gap-4">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <Image
                          src={post.author.image}
                          alt={post.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{post.author.name}</div>
                        <div className="text-sm text-gray-600">{post.author.role}</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Posts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group">
                <a href={`/blog/${post.slug}`} className="block">
                  <div className="relative aspect-video">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-4 pt-4 border-t">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden">
                        <Image
                          src={post.author.image}
                          alt={post.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-sm">
                        <div className="font-semibold">{post.author.name}</div>
                        <div className="text-gray-600">{post.author.role}</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter for the latest SEO insights and tips.
            </p>
            <form className="flex gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
      </section>
    </div>
  )
}
