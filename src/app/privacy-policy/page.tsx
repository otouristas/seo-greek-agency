import Image from 'next/image'
import Hero from '@/components/Hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | SEO Greek Agency',
  description: 'SEO Greek Agency\'s privacy policy. Learn how we collect, use, and protect your personal information.',
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | SEO Greek Agency',
    description: 'SEO Greek Agency\'s privacy policy. Learn how we collect, use, and protect your personal information.',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="pb-20">
      <Hero 
        title="Privacy Policy"
        description="Last updated: January 21, 2025"
        height="small"
      />

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Introduction</h2>
            <p>
              At Another SEO Guru, we take your privacy seriously. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you visit our website or use our services.
              Please read this privacy policy carefully. By using our website and services, you consent to
              the practices described in this policy.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Fill out forms on our website</li>
              <li>Request a free SEO audit</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us</li>
              <li>Request information about our services</li>
            </ul>
            <p>This information may include:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Website URL</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>
              When you visit our website, we automatically collect certain information about your device,
              including:
            </p>
            <ul>
              <li>IP address</li>
              <li>Browser type</li>
              <li>Operating system</li>
              <li>Access times</li>
              <li>Pages visited</li>
              <li>Referring website addresses</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process your requests and transactions</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Respond to your comments and questions</li>
              <li>Analyze website usage and improve our content</li>
              <li>Protect against fraud and unauthorized access</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your
              information with:
            </p>
            <ul>
              <li>Service providers who assist in our operations</li>
              <li>Professional advisors (e.g., lawyers, accountants)</li>
              <li>Law enforcement or regulatory bodies when required by law</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal
              information. However, no method of transmission over the Internet or electronic storage
              is 100% secure.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Withdraw consent</li>
            </ul>

            <h2>Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and store
              certain information. You can instruct your browser to refuse all cookies or to indicate when
              a cookie is being sent.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by
              posting the new privacy policy on this page and updating the "Last updated" date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <ul>
              <li>Email: privacy@anotherseo.guru</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 SEO Street, Digital City, DC 12345</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
