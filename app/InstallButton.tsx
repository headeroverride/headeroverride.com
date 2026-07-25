"use client";

import { useEffect, useMemo, useState } from "react";
import { BrowserKey, storeLinks, withWebsiteUtm } from "./storeLinks";

function getDetectedBrowser(userAgent: string): BrowserKey | null {
  if (/firefox|fxios/i.test(userAgent)) {
    return "firefox";
  }

  if (/edg\//i.test(userAgent) || /edgios/i.test(userAgent)) {
    return "edge";
  }

  if (/chrome|crios|chromium/i.test(userAgent)) {
    return "chrome";
  }

  return null;
}

export default function InstallButton() {
  const [detectedBrowser, setDetectedBrowser] = useState<BrowserKey | null>(null);
  const [isDetected, setIsDetected] = useState(false);
  const fallbackStore = storeLinks.find((store) => store.key === "chrome" && store.url);

  useEffect(() => {
    setDetectedBrowser(getDetectedBrowser(window.navigator.userAgent));
    setIsDetected(true);
  }, []);

  const selectedStore = useMemo(() => {
    if (!isDetected || !detectedBrowser) {
      return null;
    }

    return storeLinks.find((store) => store.key === detectedBrowser && store.url) ?? null;
  }, [detectedBrowser, isDetected]);

  if (!selectedStore && !fallbackStore) {
    return null;
  }

  const primaryStore = selectedStore ?? fallbackStore;

  if (!primaryStore) {
    return null;
  }

  return (
    <a
      className="button primary"
      href={withWebsiteUtm(primaryStore.url)}
      target="_blank"
      rel="noreferrer"
    >
      {selectedStore ? `Get ${selectedStore.label} Extension` : "Get the extension"}
    </a>
  );
}
