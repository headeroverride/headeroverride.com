import type { Metadata } from "next";
import InstallButton from "../../InstallButton";
import GuideDropdown from "../../GuideDropdown";

const pageUrl = "https://headeroverride.com/guides/debug-with-header-profiles";
const title = "Debug with Header Profiles";
const description =
  "Keep local, QA, and staging headers and cookies separate with browser profiles for repeatable debugging workflows.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["debug with profiles", "header profiles", "modify header extension", "browser extension to modify headers", "edit headers in browser", "chrome extension to modify headers", "browser extension to edit headers", "Chrome extension to modify cookies", "edit headers", "edit cookies", "inject headers"],
  alternates: { canonical: "/guides/debug-with-header-profiles" },
  openGraph: { title: `${title} | Header Override`, description, url: pageUrl, siteName: "Header Override", type: "article", publishedTime: "2026-07-25", images: [{ url: "/screenshots/guide-staging-profiles.png", width: 760, height: 520, alt: "Header Override profiles menu" }] },
  twitter: { card: "summary_large_image", title: `${title} | Header Override`, description, images: ["/screenshots/guide-staging-profiles.png"] }
};

const articleJsonLd = { "@context": "https://schema.org", "@type": "TechArticle", headline: title, description, datePublished: "2026-07-25", dateModified: "2026-07-25", url: pageUrl, image: "https://headeroverride.com/screenshots/guide-staging-profiles.png", author: { "@type": "Organization", name: "Header Override", url: "https://headeroverride.com" }, publisher: { "@type": "Organization", name: "Header Override", logo: { "@type": "ImageObject", url: "https://headeroverride.com/icons/icon-128.png" } } };

function GuideNav() {
  return <nav className="nav" aria-label="Primary"><a className="brand" href="/"><img src="/icons/icon-128.png" alt="" width="32" height="32" /><span>Header Override</span></a><div className="nav-actions"><a className="nav-link" href="/">Home</a><GuideDropdown /><a className="nav-link" href="https://github.com/headeroverride/headeroverride" target="_blank" rel="noreferrer">GitHub</a><a className="nav-link" href="https://www.youtube.com/@HeaderOverrideExtension" target="_blank" rel="noreferrer">YouTube</a><a className="nav-link" href="/contact">Contact</a></div></nav>;
}

export default function DebugWithHeaderProfilesPage() {
  return <main className="legal-page guide-page"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} /><GuideNav /><article className="guide-article shell"><header className="guide-article-header"><p className="eyebrow">Authentication &amp; Cookies · 5 min read</p><h1>{title}</h1><p className="guide-lede">{description}</p></header><div className="guide-layout"><aside className="guide-aside"><p className="guide-aside-label">On this page</p><a href="#why-profiles">Why use profiles</a><a href="#workflow">A repeatable workflow</a><a href="#screenshot">Set up profiles</a></aside><div className="guide-content">
    <p>Temporary headers and cookies are useful during debugging, but they become risky when the same rules follow you from local development into QA or staging. Profiles let you keep each environment&apos;s browser request setup separate.</p>
    <h2 id="why-profiles">Why use profiles</h2><p>A local API may need one tenant header, a QA environment may need a test session cookie, and staging may need a feature or authorization value. Keeping those rules in one long list makes it easy to send the wrong value to the wrong host.</p><h2 id="workflow">A repeatable workflow</h2><ol><li>Create one profile for each environment or test setup.</li><li>Scope every header and cookie rule to the smallest matching URL.</li><li>Add comments that explain the temporary debugging purpose.</li><li>Activate only the profile needed for the current investigation.</li><li>Disable or delete the profile when the test is complete.</li></ol>
    <h2 id="screenshot">Set up profiles in Header Override</h2><p>Header Override is a browser extension to modify headers and cookies with local profiles. Use the profile menu to switch between Development, QA, staging, or test-account configurations without rebuilding the frontend.</p><figure className="guide-figure"><img src="/screenshots/guide-staging-profiles.png" alt="Header Override profile menu showing separate Development, QA Staging, and Read-only demos profiles" /><figcaption>Switch the active profile before testing a different environment or account setup.</figcaption></figure><p>Profiles are stored locally in the browser. URL filters still matter: a profile can be active while its rules remain limited to the exact API or application URL you selected.</p>
    <div className="guide-cta"><div><p className="eyebrow">Keep debugging repeatable</p><h2>Edit headers in browser with separate profiles.</h2><p>Header Override stores local rules in your browser and works in Chrome, Edge, and Firefox.</p></div><InstallButton /></div>
  </div></div></article></main>;
}
