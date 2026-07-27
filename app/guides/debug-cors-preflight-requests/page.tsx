import type { Metadata } from "next";
import InstallButton from "../../InstallButton";
import GuideDropdown from "../../GuideDropdown";

const pageUrl = "https://headeroverride.com/guides/debug-cors-preflight-requests";
const title = "How to Debug CORS Preflight Requests";
const description =
  "Understand browser OPTIONS preflight requests, allowed methods, allowed headers, credentials, and the fastest way to isolate a CORS failure.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["debug CORS preflight requests", "CORS preflight debugging", "OPTIONS request CORS", "allowed headers CORS", "CORS credentials debugging", "modify request headers for CORS testing"],
  alternates: { canonical: "/guides/debug-cors-preflight-requests" },
  openGraph: {
    title: `${title} | Header Override`, description, url: pageUrl,
    siteName: "Header Override", type: "article",
    publishedTime: "2026-07-25",
    images: [{ url: "/screenshots/feature-headers-1280x800.png", width: 1280, height: 800, alt: "Header Override request and response header rules" }]
  },
  twitter: { card: "summary_large_image", title: `${title} | Header Override`, description, images: ["/screenshots/feature-headers-1280x800.png"] }
};

const articleJsonLd = {
  "@context": "https://schema.org", "@type": "TechArticle", headline: title, description,
  datePublished: "2026-07-25", dateModified: "2026-07-25", url: pageUrl,
  image: "https://headeroverride.com/screenshots/feature-headers-1280x800.png",
  author: { "@type": "Organization", name: "Header Override", url: "https://headeroverride.com" },
  publisher: { "@type": "Organization", name: "Header Override", logo: { "@type": "ImageObject", url: "https://headeroverride.com/icons/icon-128.png" } }
};

function GuideNav() {
  return (
    <nav className="nav" aria-label="Primary">
      <a className="brand" href="/"><img src="/icons/icon-128.png" alt="" width="32" height="32" /><span>Header Override</span></a>
      <div className="nav-actions">
        <a className="nav-link" href="/">Home</a>
        <GuideDropdown />
        
        <a className="nav-link" href="https://github.com/headeroverride/headeroverride" target="_blank" rel="noreferrer">GitHub</a>
        <a className="nav-link" href="https://www.youtube.com/@HeaderOverrideExtension" target="_blank" rel="noreferrer">YouTube</a>
        <a className="nav-link" href="/contact">Contact</a>
      </div>
    </nav>
  );
}

export default function DebugCorsPreflightRequestsPage() {
  return (
    <main className="legal-page guide-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <GuideNav />
      <article className="guide-article shell">
        <header className="guide-article-header"><p className="eyebrow">CORS &amp; APIs · 6 min read</p><h1>{title}</h1><p className="guide-lede">{description}</p></header>
        <div className="guide-layout">
          <aside className="guide-aside"><p className="guide-aside-label">On this page</p><a href="#preflight">What preflight does</a><a href="#checklist">Debugging checklist</a><a href="#override">Where Header Override helps</a></aside>
          <div className="guide-content">
            <p>A CORS preflight is an automatic <code>OPTIONS</code> request that the browser sends before certain cross-origin requests. It asks the API whether the method and headers are allowed before sending the real request.</p>
            <h2 id="preflight">What the preflight does</h2>
            <p>A request with a custom header or a non-simple method can produce a request like this:</p>
            <pre><code>{`OPTIONS /api/account HTTP/1.1
Origin: https://app.example.com
Access-Control-Request-Method: POST
Access-Control-Request-Headers: authorization, content-type`}</code></pre>
            <p>The API must return a compatible policy, including the allowed origin, method, and request headers. If it rejects the preflight, the browser stops before the application request is sent.</p>
            <h2 id="checklist">Debugging checklist</h2>
            <h3>1. Find the OPTIONS request</h3>
            <p>Open the Network tab, enable the request method column, and find the OPTIONS request immediately before the failed call. Check its status and response headers instead of relying only on the console message.</p>
            <h3>2. Compare requested and allowed headers</h3>
            <p>Compare <code>Access-Control-Request-Headers</code> with <code>Access-Control-Allow-Headers</code>. A custom tenant, trace, or authorization header must be allowed by the API.</p>
            <h3>3. Check credentials separately</h3>
            <p>Credentialed requests need an explicit origin and <code>Access-Control-Allow-Credentials: true</code>. An <code>*</code> origin cannot be used for a request that includes cookies.</p>
            <h3>4. Check the error response</h3>
            <p>If the API returns 401, 403, or 500 without CORS headers, the browser may report a CORS error while hiding the actual server failure. Inspect server logs and authentication values too.</p>
            <h2 id="override">Where Header Override helps</h2>
            <p>Use a modify header extension to test the exact request or response value while you diagnose the server configuration. Header Override lets you edit headers in browser with a URL-scoped rule:</p>
            <figure className="guide-figure"><img src="/screenshots/guide-cors-preflight.png" alt="Header Override showing an Authorization request rule and Access-Control-Allow-Origin response rule" /><figcaption>Use the Headers tab to test only the authorization and CORS headers for the API URL.</figcaption></figure>
            <p>After the test, move the durable CORS policy into the API, gateway, or server configuration. A local override is for diagnosis, not production security.</p>
            <div className="guide-cta"><div><p className="eyebrow">Inspect the preflight</p><h2>Edit headers in browser while debugging CORS.</h2><p>Header Override stores scoped rules locally and works in Chrome, Edge, and Firefox.</p></div><InstallButton /></div>
          </div>
        </div>
      </article>
    </main>
  );
}
