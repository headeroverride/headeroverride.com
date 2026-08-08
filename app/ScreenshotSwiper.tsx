"use client";

import { useState } from "react";

const screenshots = [
  {
    src: "/screenshots/feature-headers-1280x800.png",
    alt: "Header Override screenshot showing request header and response header rules in the extension popup",
    label: "Request and response headers",
    width: 1280,
    height: 800
  },
  {
    src: "/screenshots/feature-cookies-1280x800.png",
    alt: "Header Override screenshot showing request cookies and response cookie attributes including Domain, Path, SameSite, Lifetime, Max-Age, and Secure",
    label: "Request and response cookies",
    width: 1280,
    height: 800
  },
  {
    src: "/screenshots/feature-profiles-1280x800.png",
    alt: "Header Override screenshot showing local profiles with import and export controls",
    label: "Profiles, import, and export",
    width: 1280,
    height: 800
  },
  {
    src: "/screenshots/url-filter-syntax.png",
    alt: "Header Override URL filter syntax reference table",
    label: "URL syntax",
    width: 1000,
    height: 430
  }
];

export default function ScreenshotSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeScreenshot = screenshots[activeIndex];

  function showPrevious() {
    setActiveIndex((index) => (index === 0 ? screenshots.length - 1 : index - 1));
  }

  function showNext() {
    setActiveIndex((index) => (index === screenshots.length - 1 ? 0 : index + 1));
  }

  return (
    <div className="screenshot-swiper" aria-roledescription="carousel">
      <div className="swiper-frame">
        <button type="button" className="swiper-arrow previous" onClick={showPrevious} aria-label="Show previous screenshot">
          ‹
        </button>
        <figure className="swiper-slide active" key={activeScreenshot.src}>
          <img
            src={activeScreenshot.src}
            alt={activeScreenshot.alt}
            width={activeScreenshot.width}
            height={activeScreenshot.height}
            loading="lazy"
            fetchPriority="low"
            decoding="async"
          />
          <figcaption>{activeScreenshot.label}</figcaption>
        </figure>
        <button type="button" className="swiper-arrow next" onClick={showNext} aria-label="Show next screenshot">
          ›
        </button>
      </div>
      <div className="swiper-controls">
        <div className="swiper-dots" role="tablist" aria-label="Extension screenshots">
          {screenshots.map((screenshot, index) => (
            <button
              type="button"
              key={screenshot.src}
              className={index === activeIndex ? "active" : ""}
              onClick={() => setActiveIndex(index)}
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Show ${screenshot.label}`}
            />
          ))}
        </div>
      </div>
      <p className="swiper-caption">{activeScreenshot.label}</p>
    </div>
  );
}
