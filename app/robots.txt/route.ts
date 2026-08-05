export const dynamic = "force-static";

const robots = `User-Agent: *
Allow: /

User-Agent: OAI-SearchBot
Allow: /

User-Agent: ChatGPT-User
Allow: /

User-Agent: GPTBot
Allow: /

User-Agent: Google-Extended
Allow: /

User-Agent: PerplexityBot
Allow: /

Content-Signal: search=yes, ai-input=yes, ai-train=yes, use=full

Host: https://headeroverride.com
Sitemap: https://headeroverride.com/sitemap.xml
`;

export function GET() {
  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
