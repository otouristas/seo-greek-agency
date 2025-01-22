import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import OrganizationSchema from '@/components/schemas/OrganizationSchema'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import CookieConsent from '@/components/CookieConsent'
import ChatAgent from '@/components/chat/ChatAgent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://kasiotisg.com'),
  title: {
    template: '%s | SEO Greek Agency',
    default: 'SEO Greek Agency | Expert SEO Services'
  },
  description: 'Expert SEO services to help your business grow online. We specialize in technical SEO, content optimization, and link building strategies.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SEO Greek Agency | Expert SEO Services',
    description: 'Expert SEO services to help your business grow online. We specialize in technical SEO, content optimization, and link building strategies.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.kasiotisg.com',
    siteName: 'SEO Greek Agency',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SEO Greek Agency'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Greek Agency | Expert SEO Services',
    description: 'Expert SEO services to help your business grow online. We specialize in technical SEO, content optimization, and link building strategies.',
    site: '@kasiotisg',
    creator: '@kasiotisg'
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'your-google-verification-code',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <OrganizationSchema />
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
        <CookieConsent />
        <ChatAgent />
      </body>
    </html>
  )
}
