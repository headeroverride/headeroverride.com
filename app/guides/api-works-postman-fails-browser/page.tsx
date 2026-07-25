import type { Metadata } from "next";
import InstallButton from "../../InstallButton";
import GuideDropdown from "../../GuideDropdown";

const pageUrl = "https://headeroverride.com/guides/api-works-postman-fails-browser";
const title = "Why Does My API Work in Postman but Fail in the Browser?";
const description =
  "Learn how to diagnose browser API failures and edit headers in browser by separating CORS, authentication, cookies, preflight requests, and real server errors.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "edit headers in browser",
    "modify header extension",
    "browser extension to modify headers",
    "chrome extension to modify headers",
    "browser extension to edit headers",
    "Chrome extension to modify cookies",
    "edit headers",
    "edit cookies",
    "inject headers",
    "CORS debugging",
    "API headers"
  ],
  alternates: {
    canonical: "/guides/api-works-postman-fails-browser"
  },
  openGraph: {
    title: `${title} | Header Override`,
    description,
    url: pageUrl,
    siteName: "Header Override",
    type: "article",
    publishedTime: "2026-07-25",
    images: [
      {
        url: "/screenshots/feature-headers-1280x800.png",
        width: 1280,
        height: 800,
        alt: "Header Override request and response header rules"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Header Override`,
    description,
    images: ["/screenshots/feature-headers-1280x800.png"]
  }
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: title,
  description,
  datePublished: "2026-07-25",
  dateModified: "2026-07-25",
  url: pageUrl,
  image: "https://headeroverride.com/screenshots/feature-headers-1280x800.png",
  author: {
    "@type": "Organization",
    name: "Header Override",
    url: "https://headeroverride.com"
  },
  publisher: {
    "@type": "Organization",
    name: "Header Override",
    logo: {
      "@type": "ImageObject",
      url: "https://headeroverride.com/icons/icon-128.png"
    }
  }
};

function GuideNav() {
  return (
    <nav className="nav" aria-label="Primary">
      <a className="brand" href="/">
        <img src="/icons/icon-128.png" alt="" width="32" height="32" />
        <span>Header Override</span>
      </a>
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

export default function ApiWorksPostmanFailsBrowserPage() {
  return (
    <main className="legal-page guide-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <GuideNav />

      <article className="guide-article shell">
        <header className="guide-article-header">
          <p className="eyebrow">CORS &amp; APIs · 8 min read</p>
          <h1>{title}</h1>
          <p className="guide-lede">{description}</p>
        </header>

        <div className="guide-layout">
          <aside className="guide-aside">
            <p className="guide-aside-label">On this page</p>
            <a href="#the-short-answer">The short answer</a>
            <a href="#debugging-order">A reliable debugging order</a>
            <a href="#header-override">Where Header Override helps</a>
            <a href="#when-not-to-use-it">When not to use it</a>
          </aside>

          <div className="guide-content">
            <p>
              Postman and a browser do not make requests under the same rules.
              Postman is an API client, so it can send a request without the
              browser&apos;s same-origin checks, preflight process, or cookie
              policies. A request succeeding in Postman proves that the server
              can respond to that request. It does not prove that a web page
              is allowed to make or read the same request.
            </p>
            <p>
              If you need to edit headers in browser, use a browser extension
              to modify headers only for the API URLs you are testing. Header
              Override keeps those experiments local and scoped while you
              diagnose the real server-side fix.
            </p>

            <h2 id="the-short-answer">The short answer</h2>
            <p>
              When an API works in Postman but fails in the browser, check
              these four things in order:
            </p>
            <ol>
              <li>Did the browser send an <code>OPTIONS</code> preflight?</li>
              <li>Did the API return the required CORS response headers?</li>
              <li>Did the browser send the expected authorization header or cookie?</li>
              <li>Did the server return a real error before CORS headers were added?</li>
            </ol>

            <h2 id="debugging-order">A reliable debugging order</h2>

            <h3>1. Look at the browser Network tab</h3>
            <p>
              Do not start with the console message alone. Find the failed
              request in DevTools and inspect its status, request headers,
              response headers, and whether an <code>OPTIONS</code> request
              appeared immediately before it.
            </p>
            <p>
              A failed preflight usually means the browser did not allow the
              actual request to proceed. A failed actual request means the
              server received it, but the response may have been rejected or
              hidden by the browser.
            </p>

            <h3>2. Check the request origin and preflight</h3>
            <p>
              A cross-origin request commonly includes an <code>Origin</code>
              header. A non-simple request can also trigger a preflight that
              describes the intended method and headers:
            </p>
            <pre><code>{`OPTIONS /api/profile HTTP/1.1
Origin: https://app.example.com
Access-Control-Request-Method: GET
Access-Control-Request-Headers: authorization, x-tenant-id`}</code></pre>
            <p>
              The server must answer with a compatible policy. If the frontend
              sends <code>Authorization</code> or a custom tenant header but
              the server does not allow that header, the browser can stop the
              request before your application sees a response.
            </p>

            <h3>3. Separate CORS from authentication</h3>
            <p>
              A console message mentioning CORS does not always mean the CORS
              policy is the root cause. An API might return <code>401</code>,
              <code>403</code>, or <code>500</code> without adding CORS headers
              to its error response. The browser then reports a CORS problem
              even though the first failure was authentication, authorization,
              or a server exception.
            </p>
            <p>
              Compare the browser request with the working Postman request:
              check the bearer token, cookies, tenant identifier, API version,
              and content negotiation headers. One missing header can change
              the response completely.
            </p>

            <h3>4. Check cookies separately</h3>
            <p>
              Cookie-based authentication adds another layer. The frontend may
              need credentials enabled, and the cookie itself may be restricted
              by its domain, path, <code>SameSite</code>, or
              <code>Secure</code> attributes. A cookie visible in one browser
              context is not automatically sent to every API origin.
            </p>
            <p>
              In DevTools, confirm whether the request contains a
              <code>Cookie</code> header. If it does not, inspect the cookie
              attributes before changing the CORS policy.
            </p>

            <h2 id="header-override">Where Header Override helps</h2>
            <p>
              Once you understand which value is different, Header Override
              can help you reproduce the browser request without editing your
              frontend code. Create a request-header rule for the API URL and
              add the value you want to test:
            </p>
            <figure className="guide-figure">
              <img
                src="/screenshots/guide-postman-browser.png"
                alt="Header Override extension showing request and response header rules with URL filters and comments"
              />
              <figcaption>
                Use the Headers tab to keep request and response experiments
                scoped to the API URL you are debugging.
              </figcaption>
            </figure>
            <pre><code>{`Header: Authorization
Value: Bearer test-token
URL: *api.example.com/*
Comment: Reproduce the staging auth flow`}</code></pre>
            <p>
              You can use the same workflow for an API version, tenant, locale,
              feature flag, or other custom request header. For cookie-based
              flows, use the Cookies tab and scope the rule to the smallest URL
              pattern that reproduces the issue.
            </p>
            <p>
              Profiles are useful when you need separate setups for local,
              QA, and staging environments. Disable a profile when you finish
              testing so a temporary rule does not affect unrelated requests.
            </p>

            <h2 id="when-not-to-use-it">When not to use it</h2>
            <p>
              A local override is a debugging aid, not a production fix. Do
              not use it to hide an insecure CORS policy, bypass authorization,
              or work around a missing server-side security control. Never put
              real credentials in a rule that might be shared or exported.
            </p>
            <p>
              If the override makes the request work, record the exact header
              or cookie difference and fix the application, API gateway, or
              server configuration that owns it.
            </p>

            <div className="guide-cta">
              <div>
                <p className="eyebrow">Reproduce the request locally</p>
                <h2>Test headers and cookies without changing application code.</h2>
                <p>
                  Header Override stores scoped rules locally in your browser
                  and works in Chrome, Edge, and Firefox.
                </p>
              </div>
              <InstallButton />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
