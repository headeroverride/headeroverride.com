import ScreenshotSwiper from "./ScreenshotSwiper";
import InstallButton from "./InstallButton";
import WorkflowSwiper from "./WorkflowSwiper";
import GuideDropdown from "./GuideDropdown";
import HeroVideo from "./HeroVideo";
import { heroPoster } from "./heroMedia";
import { storeLinks, withWebsiteUtm } from "./storeLinks";
import { preload } from "react-dom";

const features = [
  {
    title: "Modify headers with the header editor",
    body: "Add request headers, response headers, request cookies, and response cookies in focused tabs."
  },
  {
    title: "Scope header rules by URL",
    body: "Scope matching rules with browser-supported URL filter patterns."
  },
  {
    title: "Modify request and response cookies",
    body: "Set response cookie Domain, Path, SameSite, Lifetime, Max-Age, and Secure attributes."
  },
  {
    title: "Use header editor profiles",
    body: "Keep up to five local rule profiles for different projects, accounts, or test setups."
  },
  {
    title: "Import and export header rules",
    body: "Move selected profiles between browsers with local JSON import and export."
  },
  {
    title: "Chrome, Edge, and Firefox support",
    body: "Use Header Override in Chrome, Edge, and Firefox."
  },
  {
    title: "Organize and toggle header rules",
    body: "Enable, disable, delete, and annotate rules with comments."
  },
  {
    title: "Keep header rules stored locally",
    body: "Rules are saved locally in your browser and never sent to a server."
  }
];

const useCases = [
  "Send debug headers to staging APIs without touching application code.",
  "Reproduce customer-specific headers or cookies with scoped local rules.",
  "Toggle backend flags while testing UI flows in your browser.",
  "Switch between client, environment, or test-account setups with profiles.",
  "Document temporary QA rules before removing them."
];

const faqs = [
  {
    question: "What is Header Override used for?",
    answer:
      "Header Override helps developers, QA teams, and support engineers modify HTTP headers and cookies from the browser for scoped debugging and testing workflows."
  },
  {
    question: "Is Header Override an alternative to ModHeader?",
    answer:
      "Yes. Header Override is an open-source, lightweight ModHeader alternative for modifying request headers, response headers, request cookies, and response cookies with local browser rules."
  },
  {
    question: "Are rules sent to a server?",
    answer:
      "No. Rules are stored locally in browser extension storage and are used only to apply the header or cookie changes you configure."
  },
  {
    question: "Can rules target specific URLs?",
    answer:
      "Yes. Header and cookie rules can be scoped with browser-supported URL filter patterns, so changes apply only to matching requests."
  },
  {
    question: "Why does Header Override request access to websites?",
    answer:
      "Header Override needs access to all URLs because you can create rules for any website and scope them with URL filters. The extension processes your rules locally and does not send your rules, browsing activity, headers, cookies, or website content to the developer or third parties."
  }
];

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://headeroverride.com/#software",
  name: "Header Override",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Modern desktop browsers",
  browserRequirements: "Chrome, Edge, and Firefox",
  url: "https://headeroverride.com",
  description:
    "Header Override is an open-source browser extension for Chrome, Firefox, and Edge to modify HTTP request and response headers and cookies with local rules.",
  image: "https://headeroverride.com/screenshots/marquee-1400x560.png",
  sameAs: [
    "https://chromewebstore.google.com/detail/gkobmjeklkiepibofnghbkcjiphjacfm",
    "https://microsoftedge.microsoft.com/addons/detail/albhpnnccbkfkloddpaecdmhpnmnldhn",
    "https://addons.mozilla.org/en-US/firefox/addon/headeroverride",
    "https://github.com/headeroverride/headeroverride",
    "https://www.youtube.com/@HeaderOverrideExtension"
  ],
  screenshot: [
    "https://headeroverride.com/screenshots/screenshot-1280x800.png",
    "https://headeroverride.com/screenshots/feature-headers-1280x800.png",
    "https://headeroverride.com/screenshots/feature-cookies-1280x800.png",
    "https://headeroverride.com/screenshots/feature-profiles-1280x800.png",
    "https://headeroverride.com/screenshots/feature-url-filters-1280x800.png",
    "https://headeroverride.com/screenshots/profile-dropdown-zoom.png",
    "https://headeroverride.com/screenshots/url-filter-syntax.png"
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD"
  },
  isAccessibleForFree: true,
  privacyPolicy: "https://headeroverride.com/privacy",
  softwareVersion: "1.0.6",
  subjectOf: {
    "@id": "https://headeroverride.com/#demo-video"
  },
  featureList: [
    "Modify HTTP request headers",
    "Modify HTTP response headers",
    "Override HTTP request headers",
    "Override request cookies",
    "Override response Set-Cookie headers",
    "Create up to five local rule profiles",
    "Import and export selected profiles as JSON",
    "Use in Chrome, Edge, and Firefox",
    "Scope rules with URL filter patterns",
    "Enable, disable, add, and delete rules",
    "Store rules locally in the browser"
  ]
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://headeroverride.com/#website",
  name: "Header Override",
  url: "https://headeroverride.com",
  description:
    "The official website for Header Override, an open-source Chrome, Firefox, and Edge extension to modify HTTP headers and cookies with local rules.",
  publisher: {
    "@id": "https://headeroverride.com/#organization"
  }
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://headeroverride.com/#organization",
  name: "Header Override",
  url: "https://headeroverride.com",
  logo: "https://headeroverride.com/icons/icon-128.png",
  sameAs: [
    "https://github.com/headeroverride/headeroverride",
    "https://www.youtube.com/@HeaderOverrideExtension"
  ]
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://headeroverride.com/#webpage",
  url: "https://headeroverride.com/",
  name: "Modify HTTP Headers & Cookies | Header Override",
  description:
    "Use the open-source Header Override extension in Chrome, Firefox, and Edge to modify HTTP request and response headers and cookies with local rules.",
  dateModified: "2026-08-05",
  isPartOf: {
    "@id": "https://headeroverride.com/#website"
  },
  mainEntity: {
    "@id": "https://headeroverride.com/#software"
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://headeroverride.com/screenshots/marquee-1400x560.png",
    width: 1400,
    height: 560
  }
};

const videoJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "@id": "https://headeroverride.com/#demo-video",
  name: "How to modify request headers with Header Override",
  description:
    "A short product demo showing Header Override modifying scoped request headers and verifying them in the browser Network tab.",
  thumbnailUrl:
    "https://headeroverride.com/screenshots/screenshot-640x400.png",
  uploadDate: "2026-07-25T15:39:54+03:00",
  duration: "PT28S",
  contentUrl:
    "https://headeroverride.com/video/header-override-demo.mp4",
  url: "https://headeroverride.com/",
  isFamilyFriendly: true,
  about: {
    "@id": "https://headeroverride.com/#software"
  },
  isPartOf: {
    "@id": "https://headeroverride.com/#webpage"
  },
  publisher: {
    "@id": "https://headeroverride.com/#organization"
  }
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
};

export default function Home() {
  preload(heroPoster.avif1280, {
    as: "image",
    type: "image/avif",
    fetchPriority: "high",
    imageSrcSet: heroPoster.avifSrcSet,
    imageSizes: heroPoster.sizes
  });

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            softwareJsonLd,
            websiteJsonLd,
            organizationJsonLd,
            webPageJsonLd,
            videoJsonLd,
            faqJsonLd
          ])
        }}
      />
      <section className="hero">
        <nav className="nav" aria-label="Primary">
          <a className="brand" href="/">
            <img src="/icons/icon-128.png" alt="" width="32" height="32" />
            <span>Header Override</span>
          </a>
          <div className="nav-actions">
            <a className="nav-link" href="/">
              Home
            </a>
            <GuideDropdown />
            <a
              className="nav-link"
              href="https://github.com/headeroverride/headeroverride"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="nav-link"
              href="https://www.youtube.com/@HeaderOverrideExtension"
              target="_blank"
              rel="noreferrer"
            >
              YouTube
            </a>
            <a className="nav-link" href="/contact">
              Contact
            </a>
          </div>
        </nav>

        <div className="hero-grid shell">
          <div className="hero-copy">
            <h1>Modify HTTP Headers and Cookies</h1>
            <p className="lede">
              An open-source browser extension to modify HTTP request and
              response headers, inject custom headers and cookies, and test APIs
              with switchable local profiles. Available for Chrome, Firefox,
              and Edge.
            </p>
            <div className="actions">
              <InstallButton />
            </div>
            <div className="trust-rows" aria-label="Extension facts">
              <div className="trust-row" aria-label="Supported browsers">
                {storeLinks.map((store) => (
                  <a key={store.label} href={withWebsiteUtm(store.url)} target="_blank" rel="noreferrer">
                    {store.label}
                  </a>
                ))}
              </div>
              <div className="trust-row-compact" aria-label="Product facts">
                <div>
                  <span>Request headers</span>
                  <span>Response headers</span>
                  <span>Request cookies</span>
                  <span>Response cookies</span>
                </div>
                <div>
                  <span>Import/export profiles</span>
                </div>
              </div>
            </div>
          </div>

          <div className="product-preview" aria-label="Header Override popup preview">
            <div className="preview-bar">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <HeroVideo />
          </div>
        </div>
      </section>

      <section className="section overview-section">
        <div className="section-intro">
          <p className="eyebrow">Built for debugging</p>
          <h2>Open-source browser extension to modify headers and cookies.</h2>
          <p>
            Header Override keeps the workflow deliberately narrow: add a rule,
            choose request or response behavior, scope it where needed, and
            let the extension apply it. Profiles keep separate projects tidy
            when one browser needs several debugging setups.
          </p>
          <p>
            Use the Header Override extension in Chrome, Edge, and Firefox to
            modify headers with local rules for API debugging, staging checks,
            and QA workflows.
          </p>
        </div>
        <ScreenshotSwiper />
      </section>

      <section className="section features-section">
        <div className="section-head">
          <p className="eyebrow">Feature set</p>
          <h2>Features</h2>
        </div>
        <div className="plain-feature-list">
          {features.map((feature) => (
            <article className="plain-feature" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section workflow">
        <div className="section-head">
          <p className="eyebrow">Real extension UI</p>
          <h2>A fast way to switch a test setup.</h2>
          <p>
            The profile dropdown and header rules are shown from actual
            extension captures, with the same popup layout users see in the
            browser.
          </p>
        </div>
        <WorkflowSwiper />
      </section>

      <section className="section alternative-section">
        <div className="section-head">
          <p className="eyebrow">ModHeader alternative</p>
          <h2>Open-source ModHeader alternative for local header and cookie overrides.</h2>
        </div>
        <p>
          Header Override is open source and keeps rules in local browser
          storage, making it a lightweight alternative to ModHeader for scoped
          request headers, response headers, and cookies.{" "}
          <a className="inline-link" href="/modheader-alternative">
            Compare Header Override as a ModHeader alternative
          </a>
          .
        </p>
      </section>

      <section className="section use-section">
        <div className="section-head">
          <p className="eyebrow">Common uses</p>
          <h2>When a local rule would answer the question faster.</h2>
        </div>
        <ol className="use-list">
          {useCases.map((useCase) => (
            <li key={useCase}>{useCase}</li>
          ))}
        </ol>
      </section>

      <section className="section faq-section">
        <div className="section-head">
          <p className="eyebrow">FAQ</p>
          <h2>Answers for searchers and reviewers.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <article className="faq-item" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section trust shell">
        <div className="section-intro">
          <p className="eyebrow">Local by design</p>
          <h2>No analytics. No tracking. No external servers.</h2>
        </div>
        <p>
          Rules are saved in your browser&apos;s local extension storage and used
          only to apply the header and cookie changes you configure. Header
          Override does not transmit your rules, browsing activity, or website
          content to the developer or third parties.
        </p>
      </section>

    </main>
  );
}
