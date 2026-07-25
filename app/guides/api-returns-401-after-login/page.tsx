import type { Metadata } from "next";
import InstallButton from "../../InstallButton";
import GuideDropdown from "../../GuideDropdown";

const pageUrl = "https://headeroverride.com/guides/api-returns-401-after-login";
const title = "Why Does My API Return 401 After Login?";
const description =
  "Learn how to debug an API that returns 401 after login with a modify header extension by checking bearer tokens, authentication cookies, browser credentials, refresh flows, and proxies.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "modify header extension",
    "browser extension to modify headers",
    "chrome extension to modify headers",
    "browser extension to edit headers",
    "Chrome extension to modify cookies",
    "edit headers",
    "edit cookies",
    "inject headers",
    "edit headers in browser",
    "debug 401 after login",
    "authentication cookie debugging"
  ],
  alternates: {
    canonical: "/guides/api-returns-401-after-login"
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

export default function ApiReturns401AfterLoginPage() {
  return (
    <main className="legal-page guide-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <GuideNav />

      <article className="guide-article shell">
        <header className="guide-article-header">
          <p className="eyebrow">Authentication &amp; Cookies · 8 min read</p>
          <h1>{title}</h1>
          <p className="guide-lede">{description}</p>
        </header>

        <div className="guide-layout">
          <aside className="guide-aside">
            <p className="guide-aside-label">On this page</p>
            <a href="#what-401-means">What 401 means</a>
            <a href="#debugging-order">A reliable debugging order</a>
            <a href="#header-override">Where Header Override helps</a>
          </aside>

          <div className="guide-content">
            <p>
              A successful login does not automatically authenticate every
              request that follows. Login may return a token that the frontend
              must store and attach, or it may set a cookie that the browser
              will only send under specific domain, credential, and SameSite
              rules.
            </p>
            <p>
              A browser extension to modify headers can help isolate whether
              the missing credential is the real cause. Use Header Override to
              edit headers in browser for a narrowly scoped test, then apply
              the permanent fix in your application or API gateway.
            </p>

            <h2 id="what-401-means">What a 401 response means</h2>
            <p>
              <code>401 Unauthorized</code> means the API could not accept the
              request&apos;s authentication credentials. The request may be
              missing a token, contain an expired token, send the token in the
              wrong format, or omit the session cookie entirely.
            </p>
            <p>
              This is different from <code>403 Forbidden</code>. A 403 usually
              means the server recognized the caller but decided that the
              caller does not have permission for that resource.
            </p>

            <h2 id="debugging-order">A reliable debugging order</h2>

            <h3>1. Compare the login request with the next API request</h3>
            <p>
              In the browser Network tab, find the login response and the first
              request that returns 401. Check whether the login response
              contains a token in its body or a <code>Set-Cookie</code> header.
              Then check whether the next request contains the corresponding
              credential.
            </p>
            <p>
              For bearer-token authentication, the request usually looks like
              this:
            </p>
            <pre><code>{`GET /api/account HTTP/1.1
Authorization: Bearer eyJ...`}</code></pre>
            <p>
              If the login succeeds but this header is missing, the problem is
              in the frontend token storage or request client configuration,
              not in the protected endpoint.
            </p>

            <h3>2. Check the exact authorization format</h3>
            <p>
              Look for small differences: <code>Bearer</code> must be followed
              by a space and the token, the header name must be correct, and a
              refresh response must not be mistaken for an access token. Also
              check whether a proxy or API gateway removes the header before
              the request reaches the application.
            </p>

            <h3>3. Check whether the browser sends the session cookie</h3>
            <p>
              For cookie-based sessions, the request must contain the expected
              cookie. Cross-origin frontend requests commonly need credentials
              enabled in the client, while the cookie may also be restricted by
              its Domain, Path, SameSite, or Secure attributes.
            </p>
            <pre><code>{`fetch("https://api.example.com/account", {
  credentials: "include"
});`}</code></pre>
            <p>
              If the login response sets a cookie for a different host, or the
              browser rejects the cookie because of its attributes, the next
              request will look anonymous even though the login endpoint
              returned 200.
            </p>

            <h3>4. Check token expiry and refresh behavior</h3>
            <p>
              A token can be valid when the page loads and expired by the time
              a request runs. Confirm the token&apos;s expiry, verify that the
              refresh request succeeds, and check that the client replaces the
              old access token before retrying the failed request.
            </p>
            <p>
              Be careful with automatic retries: a failed refresh can create a
              loop where the application repeatedly sends the same expired
              token and hides the original error.
            </p>

            <h3>5. Check the server and gateway logs</h3>
            <p>
              If the browser clearly sends the expected credential, inspect
              the API and gateway logs. Confirm that the request reaches the
              intended service, the issuer and audience match, the signing key
              is current, and the gateway forwards the authentication header.
            </p>

            <h2 id="header-override">Where Header Override helps</h2>
            <p>
              Header Override can isolate whether the protected endpoint works
              with a known test credential. Create a request-header rule for
              the smallest API URL pattern you need:
            </p>
            <figure className="guide-figure">
              <img
                src="/screenshots/guide-auth-401.png"
                alt="Header Override extension showing request and response header rules for a protected API"
              />
              <figcaption>
                Add a temporary authorization or custom request header and
                scope it to the protected API path.
              </figcaption>
            </figure>
            <pre><code>{`Header: Authorization
Value: Bearer test-token
URL: |https://staging.example.com/api/*
Comment: Test the protected account request`}</code></pre>
            <p>
              If the request succeeds with the local rule, the endpoint and
              browser network path are probably healthy; focus on how the
              application stores, refreshes, or attaches its real token. If it
              still returns 401, inspect the token claims, gateway behavior,
              and server-side authentication logs.
            </p>
            <p>
              For session-based authentication, use the Cookies tab to test a
              controlled cookie value or response-cookie attribute. Profiles
              let you keep separate test credentials for local, QA, and staging
              environments, while URL filters prevent a temporary rule from
              affecting unrelated sites.
            </p>
            <figure className="guide-figure">
              <img
                src="/screenshots/guide-auth-cookie.png"
                alt="Header Override extension showing request and response cookie rules with cookie attributes"
              />
              <figcaption>
                Use the Cookies tab when the missing authentication state is a
                session cookie rather than an authorization header.
              </figcaption>
            </figure>
            <div className="guide-cta">
              <div>
                <p className="eyebrow">Trace the missing credential</p>
                <h2>Test authentication headers and cookies locally.</h2>
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
