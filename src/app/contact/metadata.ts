import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Expert SEO Services',
  description: 'Ready to improve your search rankings? Contact SEO Greek Agency today for a consultation and discover how we can help grow your online presence.',
  alternates: {
    canonical: 'https://kasiotisg.com/contact',
  },
  openGraph: {
    title: 'Contact Us | Expert SEO Services',
    description: 'Ready to improve your search rankings? Contact SEO Greek Agency today for a consultation and discover how we can help grow your online presence.',
    type: 'website',
    url: '/contact',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SEO Greek Agency Contact',
      },
    ],
  },
  twitter: {
    title: 'Contact Us | Expert SEO Services',
    description: 'Ready to improve your search rankings? Contact SEO Greek Agency today for a consultation and discover how we can help grow your online presence.',
    card: 'summary_large_image',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SEO Greek Agency Contact',
      },
    ],
  },
}
