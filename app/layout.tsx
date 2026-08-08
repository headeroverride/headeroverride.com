import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import SiteFooter from "./SiteFooter";

const siteUrl = "https://headeroverride.com";
const siteDescription =
  "Open-source Chrome, Firefox, and Edge extension to modify HTTP request and response headers, cookies, and local profiles for API debugging.";
const socialImage = {
  url: "/screenshots/marquee-1400x560.png",
  width: 1400,
  height: 560,
  alt: "Header Override browser extension interface for modifying HTTP headers and cookies"
};

export const metadata: Metadata = {
  title: {
    default: "Modify HTTP Headers & Cookies | Header Override",
    template: "%s | Header Override"
  },
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  applicationName: "Header Override",
  authors: [{ name: "Header Override" }],
  creator: "Header Override",
  publisher: "Header Override",
  category: "Developer Tools",
  keywords: [
    "Header Override",
    "ModHeader alternative",
    "modheader alternatives",
    "alternative to ModHeader",
    "open source ModHeader alternative",
    "open source header extension",
    "edit headers in browser",
    "modify header extension",
    "browser extension to modify headers",
    "chrome extension to modify headers",
    "browser extension to edit headers",
    "Chrome extension to modify cookies",
    "edit headers",
    "edit cookies",
    "inject headers",
    "try header override",
    "request header extension",
    "browser modify header extension",
    "modify header browser extension",
    "Header Override extension",
    "Chrome extension modify header",
    "modify header",
    "modify headers",
    "HTTP header modifier",
    "modify request headers",
    "override request headers",
    "modify response headers",
    "request cookie extension",
    "response cookie extension",
    "header cookie modifier",
    "browser extension",
    "developer tools",
    "API debugging",
    "staging API testing",
    "QA browser extension",
    "browser header extension",
    "URL based rules"
  ],
  alternates: {
    canonical: "/",
    types: {
      "text/markdown": "/index.md"
    }
  },
  icons: {
    icon: "/icons/icon-128.png",
    apple: "/icons/icon-128.png"
  },
  manifest: "/manifest.webmanifest",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    title: "Modify HTTP Headers & Cookies | Header Override",
    description: siteDescription,
    url: siteUrl,
    siteName: "Header Override",
    type: "website",
    locale: "en_US",
    images: [socialImage]
  },
  twitter: {
    card: "summary_large_image",
    title: "Modify HTTP Headers & Cookies | Header Override",
    description: siteDescription,
    images: [socialImage]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}<SiteFooter /></body>
    </html>
  );
}
