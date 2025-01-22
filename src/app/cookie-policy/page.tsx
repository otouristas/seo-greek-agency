export default function CookiePolicy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What are cookies?</h2>
          <p>
            Cookies are small text files that are placed on your device when you visit our website. 
            They help us provide you with a better experience by remembering your preferences, 
            analyzing how you use our site, and potentially serving personalized content and advertisements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Types of cookies we use</h2>
          
          <h3 className="text-xl font-semibold mb-3">1. Necessary Cookies</h3>
          <p className="mb-4">
            These cookies are essential for the website to function properly. They enable basic 
            functions like page navigation and access to secure areas of the website. The website 
            cannot function properly without these cookies.
          </p>

          <h3 className="text-xl font-semibold mb-3">2. Analytics Cookies</h3>
          <p className="mb-4">
            These cookies help us understand how visitors interact with our website by collecting 
            and reporting information anonymously. This helps us improve our website&apos;s structure 
            and content.
          </p>

          <h3 className="text-xl font-semibold mb-3">3. Marketing Cookies</h3>
          <p className="mb-4">
            These cookies are used to track visitors across websites. The intention is to display ads 
            that are relevant and engaging for the individual user.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How to manage cookies</h2>
          <p className="mb-4">
            You can control and/or delete cookies as you wish. You can delete all cookies that are 
            already on your computer and you can set most browsers to prevent them from being placed. 
            However, if you do this, you may have to manually adjust some preferences every time you 
            visit a site and some services and functionalities may not work.
          </p>
          <p>
            You can manage your cookie preferences through your browser settings. Here are links to 
            instructions for common browsers:
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li><a href="https://support.google.com/chrome/answer/95647" className="text-blue-600 hover:text-blue-700">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" className="text-blue-600 hover:text-blue-700">Mozilla Firefox</a></li>
            <li><a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" className="text-blue-600 hover:text-blue-700">Microsoft Edge</a></li>
            <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-blue-600 hover:text-blue-700">Safari</a></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Updates to this policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in technology, 
            legislation, or our data practices. When we make changes to this policy, we will update 
            the &quot;Last updated&quot; date at the top of this policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact us</h2>
          <p className="mb-4">
            If you have any questions about our Cookie Policy, please contact us at{' '}
            <a href="mailto:seo@kasiotisg.com" className="text-blue-600 hover:text-blue-700">
              privacy@kasiotisg.com
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}
