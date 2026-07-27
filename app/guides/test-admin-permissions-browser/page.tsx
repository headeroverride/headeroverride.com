import type { Metadata } from "next";
import InstallButton from "../../InstallButton";
import GuideDropdown from "../../GuideDropdown";

const pageUrl = "https://headeroverride.com/guides/test-admin-permissions-browser";
const title = "How to Test Admin Permissions Without Multiple Accounts";
const description =
  "Reproduce role-based access and 403 permission problems in the browser by testing scoped authorization, tenant, and feature headers with safe local rules.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["test admin permissions without multiple accounts", "debug 403 browser", "role based access testing", "test authorization headers", "tenant header testing", "staging permission debugging", "browser API permission testing"],
  alternates: { canonical: "/guides/test-admin-permissions-browser" },
  openGraph: { title: `${title} | Header Override`, description, url: pageUrl, siteName: "Header Override", type: "article", publishedTime: "2026-07-25", images: [{ url: "/screenshots/feature-headers-1280x800.png", width: 1280, height: 800, alt: "Header Override request header rules" }] },
  twitter: { card: "summary_large_image", title: `${title} | Header Override`, description, images: ["/screenshots/feature-headers-1280x800.png"] }
};

const articleJsonLd = { "@context": "https://schema.org", "@type": "TechArticle", headline: title, description, datePublished: "2026-07-25", dateModified: "2026-07-25", url: pageUrl, image: "https://headeroverride.com/screenshots/feature-headers-1280x800.png", author: { "@type": "Organization", name: "Header Override", url: "https://headeroverride.com" }, publisher: { "@type": "Organization", name: "Header Override", logo: { "@type": "ImageObject", url: "https://headeroverride.com/icons/icon-128.png" } } };

function GuideNav() {
  return <nav className="nav" aria-label="Primary"><a className="brand" href="/"><img src="/icons/icon-128.png" alt="" width="32" height="32" /><span>Header Override</span></a><div className="nav-actions"><a className="nav-link" href="/">Home</a><GuideDropdown /><a className="nav-link" href="https://github.com/headeroverride/headeroverride" target="_blank" rel="noreferrer">GitHub</a><a className="nav-link" href="https://www.youtube.com/@HeaderOverrideExtension" target="_blank" rel="noreferrer">YouTube</a><a className="nav-link" href="/contact">Contact</a></div></nav>;
}

export default function TestAdminPermissionsBrowserPage() {
  return <main className="legal-page guide-page"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} /><GuideNav /><article className="guide-article shell"><header className="guide-article-header"><p className="eyebrow">Authentication &amp; Cookies · 6 min read</p><h1>{title}</h1><p className="guide-lede">{description}</p></header><div className="guide-layout"><aside className="guide-aside"><p className="guide-aside-label">On this page</p><a href="#401-vs-403">401 vs 403</a><a href="#checklist">Debugging checklist</a><a href="#override">Where Header Override helps</a></aside><div className="guide-content">
    <p>Testing role-based access often becomes slow when every scenario requires a separate login, account, or browser profile. A controlled local header can help you reproduce the request context while you investigate a 403 response.</p>
    <h2 id="401-vs-403">401 vs 403</h2><p>A <code>401</code> response means the API did not accept the authentication credential. A <code>403</code> response usually means the API recognized the caller but denied access to the resource. Confirm which response you have before changing login code.</p>
    <h2 id="checklist">Debugging checklist</h2><h3>Identify the authorization source</h3><p>Find out whether the server derives the role from a token claim, session cookie, tenant header, feature flag, or gateway-provided identity. Check the request and server logs together.</p><h3>Compare a permitted and denied request</h3><p>Capture both requests and compare the URL, method, authorization value, tenant context, and resource identifier. A missing tenant or scope can look like a general permission failure.</p><h3>Test the smallest protected route</h3><p>Start with one endpoint and one test account. Use a narrow URL filter so the temporary rule does not alter unrelated API calls or browser tabs.</p>
    <h2 id="override">Where Header Override helps</h2><p>A browser extension to modify headers can reproduce a known test role or tenant value without rebuilding the frontend. Create a request rule with the exact authorization value expected by your staging API:</p><figure className="guide-figure"><img src="/screenshots/guide-admin-permissions.png" alt="Header Override extension showing a scoped Authorization request header rule" /><figcaption>Use a scoped request header to test one protected API route at a time.</figcaption></figure><pre><code>{`Header: Authorization
Value: Bearer test-token
URL: *api.example.com/*
Comment: Test protected API`}</code></pre><p>If the request succeeds only with the override, focus on the application&apos;s token claims, role mapping, tenant lookup, or gateway configuration. The local rule should reveal the missing input, not become the production authorization mechanism.</p>
    <div className="guide-cta"><div><p className="eyebrow">Test one permission path</p><h2>Edit headers in browser while reproducing a 403.</h2><p>Header Override stores scoped rules locally and works in Chrome, Edge, and Firefox.</p></div><InstallButton /></div>
  </div></div></article></main>;
}
