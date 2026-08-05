import type { MetadataRoute } from "next";

const baseUrl = "https://headeroverride.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const homepageModified = new Date("2026-08-05");
  const existingContentModified = new Date("2026-07-23");

  return [
    {
      url: baseUrl,
      lastModified: homepageModified,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${baseUrl}/modheader-alternative`,
      lastModified: existingContentModified,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${baseUrl}/guides/api-works-postman-fails-browser`,
      lastModified: existingContentModified,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/guides/api-returns-401-after-login`,
      lastModified: existingContentModified,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/guides/debug-cors-preflight-requests`,
      lastModified: existingContentModified,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/guides/debug-with-header-profiles`,
      lastModified: existingContentModified,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/guides/test-admin-permissions-browser`,
      lastModified: existingContentModified,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: existingContentModified,
      changeFrequency: "yearly",
      priority: 0.6
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: existingContentModified,
      changeFrequency: "monthly",
      priority: 0.7
    }
  ];
}
