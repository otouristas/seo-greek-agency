import Image from 'next/image'
import Hero from '@/components/Hero'

export default function TermsOfServicePage() {
  return (
    <div className="pb-20">
      <Hero 
        title="Terms of Service"
        description="Last updated: January 21, 2025"
        height="small"
      />

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Agreement to Terms</h2>
            <p>
              These Terms of Service constitute a legally binding agreement made between you and Another SEO Guru
              concerning your use of our website and services. By accessing or using our services, you agree
              to be bound by these Terms.
            </p>

            <h2>Services</h2>
            <p>
              Another SEO Guru provides search engine optimization (SEO) and related digital marketing services.
              Our services may include but are not limited to:
            </p>
            <ul>
              <li>Keyword research and strategy</li>
              <li>On-page and technical SEO</li>
              <li>Content optimization</li>
              <li>Link building</li>
              <li>Local SEO</li>
              <li>SEO audits and reporting</li>
            </ul>

            <h2>Service Engagement</h2>
            <p>
              All services require a separate service agreement detailing the scope of work, deliverables,
              timeline, and fees. These Terms of Service govern your use of our website and general
              relationship with us.
            </p>

            <h2>Your Obligations</h2>
            <p>You agree to:</p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your account</li>
              <li>Promptly notify us of any security breaches</li>
              <li>Use our services in compliance with all applicable laws</li>
              <li>Not engage in any activity that interferes with our services</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              The website content, logos, designs, and service marks are owned by or licensed to Another SEO Guru.
              You may not use, copy, reproduce, or modify any of our intellectual property without explicit
              permission.
            </p>

            <h2>Payment Terms</h2>
            <p>
              Payment terms for specific services will be outlined in your service agreement. For any
              applicable fees:
            </p>
            <ul>
              <li>Payment is required as specified in the service agreement</li>
              <li>All fees are non-refundable unless otherwise stated</li>
              <li>Late payments may incur additional charges</li>
              <li>We reserve the right to suspend services for non-payment</li>
            </ul>

            <h2>Limitation of Liability</h2>
            <p>
              Another SEO Guru shall not be liable for any indirect, incidental, special, consequential,
              or punitive damages resulting from your use or inability to use our services.
            </p>

            <h2>Disclaimer of Warranties</h2>
            <p>
              Our services are provided "as is" and "as available" without any warranties of any kind,
              either express or implied. We do not guarantee specific results from the use of our services.
            </p>

            <h2>Termination</h2>
            <p>
              We reserve the right to terminate or suspend your access to our services immediately,
              without prior notice, for any breach of these Terms.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. Your continued use of our services following any
              changes indicates your acceptance of the modified Terms.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction
              where Another SEO Guru is registered, without regard to its conflict of law provisions.
            </p>

            <h2>Contact Information</h2>
            <p>
              Questions about these Terms should be sent to us at:
            </p>
            <ul>
              <li>Email: legal@anotherseo.guru</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 SEO Street, Digital City, DC 12345</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
