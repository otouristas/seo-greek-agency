import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import BlogPostSchema from './schemas/BlogPostSchema'

interface Author {
  name: string
  role: string
  image: string
}

interface BlogPostLayoutProps {
  title: string
  excerpt: string
  content: string
  date: string
  author: Author
  category: string
  readTime: string
  image: string
  slug: string
}

export default function BlogPostLayout({
  title,
  excerpt,
  content,
  date,
  author,
  category,
  readTime,
  image,
  slug
}: BlogPostLayoutProps) {
  const formattedDate = format(new Date(date), 'MMMM d, yyyy')
  const url = `https://www.anotherseoguru.com/blog/${slug}`

  return (
    <>
      <BlogPostSchema
        title={title}
        description={excerpt}
        datePublished={date}
        dateModified={date}
        author={{
          name: author.name,
          url: 'https://www.anotherseoguru.com/about'
        }}
        image={`https://www.anotherseoguru.com${image}`}
        url={url}
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-blue-600 mb-4">
            <Link 
              href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
              className="hover:text-blue-800"
            >
              {category}
            </Link>
            <span>•</span>
            <span>{readTime}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            {excerpt}
          </p>
          
          <div className="flex items-center gap-4">
            <Image
              src={author.image}
              alt={author.name}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <div className="font-medium text-gray-900">{author.name}</div>
              <div className="text-sm text-gray-600">
                {author.role} • {formattedDate}
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] mb-12">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none prose-blue prose-img:rounded-lg prose-headings:text-gray-900"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* Share Links */}
        <div className="mt-12 pt-8 border-t">
          <h2 className="text-xl font-semibold mb-4">Share this article</h2>
          <div className="flex gap-4">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </article>
    </>
  )
}
