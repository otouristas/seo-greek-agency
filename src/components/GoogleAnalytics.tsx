import Script from 'next/script'

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-T3P95HHDJ6"
        strategy="lazyOnload"
        defer
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-T3P95HHDJ6', {
            send_page_view: false
          });
          gtag('event', 'page_view');
        `}
      </Script>
    </>
  )
}
