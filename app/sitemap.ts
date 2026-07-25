import type { MetadataRoute } from "next";

const baseUrl = "https://headeroverride.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const latestContentModified = new Date("2026-07-23");

  return [
    {
      url: baseUrl,
      lastModified: latestContentModified,
      changeFrequency: "weekly",
      priority: 1,
      videos: [
        {
          title: "Header Override demo",
          description:
            "A short demo showing how to modify headers with Header Override and verify requests in the browser Network tab.",
          thumbnail_loc: `${baseUrl}/screenshots/feature-headers-1280x800.png`,
          content_loc: `${baseUrl}/video/header-override-demo.mp4`,
          duration: 28,
          publication_date: "2026-07-17",
          family_friendly: "yes",
          tag: "browser extension"
        }
      ]
    },
    {
      url: `${baseUrl}/modheader-alternative`,
      lastModified: latestContentModified,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${baseUrl}/guides/api-works-postman-fails-browser`,
      lastModified: latestContentModified,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/guides/api-returns-401-after-login`,
      lastModified: latestContentModified,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/guides/debug-cors-preflight-requests`,
      lastModified: latestContentModified,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/guides/debug-with-header-profiles`,
      lastModified: latestContentModified,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/guides/test-admin-permissions-browser`,
      lastModified: latestContentModified,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: latestContentModified,
      changeFrequency: "yearly",
      priority: 0.6
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: latestContentModified,
      changeFrequency: "monthly",
      priority: 0.7
    }
  ];
}
