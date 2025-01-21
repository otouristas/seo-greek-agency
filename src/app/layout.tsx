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
  title: 'Another SEO Guru | Dominate Search & Grow Your Business',
  description: 'Another SEO Guru provides expert SEO services to boost your rankings, drive organic traffic, and increase conversions. Get a free SEO audit today!',
  keywords: 'SEO services, search engine optimization, digital marketing, SEO agency, SEO expert',
  openGraph: {
    title: 'Another SEO Guru | Dominate Search & Grow Your Business',
    description: 'Another SEO Guru provides expert SEO services to boost your rankings, drive organic traffic, and increase conversions. Get a free SEO audit today!',
    type: 'website',
    locale: 'en_US',
    siteName: 'Another SEO Guru',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Another SEO Guru | Dominate Search & Grow Your Business',
    description: 'Another SEO Guru provides expert SEO services to boost your rankings, drive organic traffic, and increase conversions. Get a free SEO audit today!',
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
  },
  alternates: {
    canonical: 'https://www.anotherseoguru.com',
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
        <GoogleAnalytics measurementId="G-XXXXXXXXXX" />
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
