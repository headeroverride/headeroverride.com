import type { Metadata } from "next";
import Breadcrumbs, { createBreadcrumbJsonLd } from "../Breadcrumbs";
import GuideDropdown from "../GuideDropdown";

const pageUrl = "https://headeroverride.com/guides";
const title = "Browser API Debugging Guides";
const description =
  "Practical guides for debugging CORS, authentication, cookies, permissions, headers, and browser API requests with Header Override.";

const guides = [
  {
    href: "/guides/api-works-postman-fails-browser",
    category: "CORS & APIs · 8 min read",
    title: "Why Does My API Work in Postman but Fail in the Browser?",
    description: "Separate CORS, preflight, authentication, cookies, and real server errors when a browser request fails."
  },
  {
    href: "/guides/debug-cors-preflight-requests",
    category: "CORS & APIs · 6 min read",
    title: "How to Debug CORS Preflight Requests",
    description: "Inspect OPTIONS requests and compare allowed origins, methods, headers, and credential settings."
  },
  {
    href: "/guides/api-returns-401-after-login",
    category: "Authentication & Cookies · 8 min read",
    title: "Why Does My API Return 401 After Login?",
    description: "Trace bearer tokens, authentication cookies, refresh flows, browser credentials, and proxies."
  },
  {
    href: "/guides/test-admin-permissions-browser",
    category: "Authentication & Cookies · 6 min read",
    title: "How to Test Admin Permissions Without Multiple Accounts",
    description: "Reproduce role-based access and 403 problems with narrowly scoped test headers and safe local rules."
  },
  {
    href: "/guides/debug-with-header-profiles",
    category: "Authentication & Cookies · 5 min read",
    title: "Debug with Header Profiles",
    description: "Keep local, QA, and staging headers and cookies separate in repeatable browser debugging workflows."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Guides", href: "/guides" }
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/guides" },
  openGraph: {
    title: `${title} | Header Override`,
    description,
    url: pageUrl,
    siteName: "Header Override",
    type: "website",
    images: ["/screenshots/marquee-1400x560.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Header Override`,
    description,
    images: ["/screenshots/marquee-1400x560.png"]
  }
};

const guidesJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: pageUrl,
    isPartOf: { "@id": "https://headeroverride.com/#website" },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: guides.map((guide, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: guide.title,
        url: `https://headeroverride.com${guide.href}`
      }))
    }
  },
  createBreadcrumbJsonLd(breadcrumbItems)
];

export default function GuidesPage() {
  return (
    <main className="legal-page guide-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guidesJsonLd) }}
      />
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

      <section className="guide-index shell">
        <Breadcrumbs items={breadcrumbItems} />
        <p className="eyebrow">Practical debugging guides</p>
        <h1>Debug browser APIs, headers, cookies, and permissions.</h1>
        <p className="guide-lede">Use these focused workflows to isolate browser-only failures and test the smallest possible change before fixing the underlying application or server configuration.</p>
        <div className="guide-card-grid">
          {guides.map((guide) => (
            <a className="guide-card" href={guide.href} key={guide.href}>
              <span className="guide-card-category">{guide.category}</span>
              <h2>{guide.title}</h2>
              <p>{guide.description}</p>
              <span className="guide-card-link">Read guide →</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
