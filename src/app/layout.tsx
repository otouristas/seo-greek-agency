import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import OrganizationSchema from '@/components/schemas/OrganizationSchema'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import CookieConsent from '@/components/CookieConsent'
import ChatAgent from '@/components/chat/ChatAgent'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kasiotisg.com'),
  title: {
    template: '%s | Another SEO Guru',
    default: 'Another SEO Guru | Expert SEO Services'
  },
  description: 'Expert SEO services to help your business grow online. We specialize in technical SEO, content optimization, and link building strategies.',
  icons: {
    icon: [
      { url: '/logo.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    title: 'Another SEO Guru | Expert SEO Services',
    description: 'Expert SEO services to help your business grow online. We specialize in technical SEO, content optimization, and link building strategies.',
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Another SEO Guru',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Another SEO Guru'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Another SEO Guru | Expert SEO Services',
    description: 'Expert SEO services to help your business grow online. We specialize in technical SEO, content optimization, and link building strategies.',
    site: '@kasiotisg',
    creator: '@kasiotisg'
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
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
