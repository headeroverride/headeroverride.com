"use client";

import { useState } from "react";
import { heroPoster, heroVideoSrc } from "./heroMedia";

const demoLabel =
  "Demo of Header Override modifying request headers and verifying them in the Network tab";

export default function HeroVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <div className="product-preview-media">
        <video
          src={heroVideoSrc}
          poster={heroPoster.webp1280}
          controls
          autoPlay
          muted
          playsInline
          preload="auto"
          aria-label={demoLabel}
        />
      </div>
    );
  }

  return (
    <button
      className="product-preview-launch"
      type="button"
      onClick={() => setIsPlaying(true)}
      aria-label={`Play ${demoLabel.toLowerCase()}`}
    >
      <picture>
        <source
          type="image/avif"
          srcSet={heroPoster.avifSrcSet}
          sizes={heroPoster.sizes}
        />
        <source
          type="image/webp"
          srcSet={heroPoster.webpSrcSet}
          sizes={heroPoster.sizes}
        />
        <img
          src={heroPoster.png1280}
          srcSet={heroPoster.pngSrcSet}
          sizes={heroPoster.sizes}
          alt="Header Override extension popup with scoped request header rules"
          width="1280"
          height="800"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </picture>
      <span className="product-preview-play" aria-hidden="true">
        <span />
      </span>
    </button>
  );
}
