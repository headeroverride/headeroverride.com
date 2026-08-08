export const HERO_MEDIA_VERSION = "1";

function versioned(path: string) {
  return `${path}?v=${HERO_MEDIA_VERSION}`;
}

export const heroPoster = {
  avif1280: versioned("/screenshots/hero-preview-1280x800.avif"),
  avifSrcSet: `${versioned("/screenshots/hero-preview-640x400.avif")} 640w, ${versioned("/screenshots/hero-preview-1280x800.avif")} 1280w`,
  webp1280: versioned("/screenshots/hero-preview-1280x800.webp"),
  webpSrcSet: `${versioned("/screenshots/hero-preview-640x400.webp")} 640w, ${versioned("/screenshots/hero-preview-1280x800.webp")} 1280w`,
  png1280: versioned("/screenshots/screenshot-1280x800.png"),
  pngSrcSet: `${versioned("/screenshots/screenshot-640x400.png")} 640w, ${versioned("/screenshots/screenshot-1280x800.png")} 1280w`,
  sizes:
    "(max-width: 640px) calc(100vw - 28px), (max-width: 900px) calc(100vw - 40px), (max-width: 1400px) 42vw, 600px"
} as const;

export const heroVideoSrc = versioned("/video/header-override-demo.mp4");
