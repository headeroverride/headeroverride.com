import type { MetadataRoute } from "next";

const baseUrl = "https://headeroverride.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const august8 = new Date("2026-08-08");
  const august15 = new Date("2026-08-15");
  const july27 = new Date("2026-07-27");
  const july25 = new Date("2026-07-25");

  return [
    {
      url: baseUrl,
      lastModified: august8
    },
    {
      url: `${baseUrl}/modheader-alternative`,
      lastModified: august8
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: august15
    },
    {
      url: `${baseUrl}/guides/api-works-postman-fails-browser`,
      lastModified: july27
    },
    {
      url: `${baseUrl}/guides/api-returns-401-after-login`,
      lastModified: july27
    },
    {
      url: `${baseUrl}/guides/debug-cors-preflight-requests`,
      lastModified: july27
    },
    {
      url: `${baseUrl}/guides/debug-with-header-profiles`,
      lastModified: july27
    },
    {
      url: `${baseUrl}/guides/test-admin-permissions-browser`,
      lastModified: july27
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: august8
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: july25
    }
  ];
}
