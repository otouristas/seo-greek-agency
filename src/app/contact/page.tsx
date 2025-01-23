import { Metadata } from 'next'
import dynamic from 'next/dynamic'

const ContactPage = dynamic(() => import('./ContactPage'), { ssr: false })

export const metadata: Metadata = {
  title: 'Contact Us | Get in Touch with Another SEO Guru',
  description: 'Have questions or ready to get started? Contact Another SEO Guru today. We\'re here to help you achieve your SEO goals.',
  alternates: {
    canonical: 'https://kasiotisg.com/contact',
  },
  openGraph: {
    title: 'Contact Us | Get in Touch with Another SEO Guru',
    description: 'Have questions or ready to get started? Contact Another SEO Guru today. We\'re here to help you achieve your SEO goals.',
    type: 'website',
    url: 'https://kasiotisg.com/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Get in Touch with Another SEO Guru',
    description: 'Have questions or ready to get started? Contact Another SEO Guru today. We\'re here to help you achieve your SEO goals.',
  }
}

export default function Page() {
  return <ContactPage />
}
