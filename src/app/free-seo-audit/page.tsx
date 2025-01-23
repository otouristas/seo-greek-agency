import { Metadata } from 'next'
import dynamic from 'next/dynamic'

const AuditPage = dynamic(() => import('./AuditPage'), { ssr: false })

export const metadata: Metadata = {
  title: 'Free SEO Audit | Discover Your Website\'s Potential',
  description: 'Get a free comprehensive SEO audit of your website. Uncover opportunities for improvement and see how you can outrank your competitors.',
  alternates: {
    canonical: 'https://kasiotisg.com/free-seo-audit',
  },
  openGraph: {
    title: 'Free SEO Audit | Discover Your Website\'s Potential',
    description: 'Get a free comprehensive SEO audit of your website. Uncover opportunities for improvement and see how you can outrank your competitors.',
    type: 'website',
    url: 'https://kasiotisg.com/free-seo-audit',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free SEO Audit | Discover Your Website\'s Potential',
    description: 'Get a free comprehensive SEO audit of your website. Uncover opportunities for improvement and see how you can outrank your competitors.',
  }
}

export default function Page() {
  return <AuditPage />
}
