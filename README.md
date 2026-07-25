# Header Override Website

This repository contains the public website for Header Override:

https://headeroverride.com

The browser extension source lives in the main project repository:

https://github.com/headeroverride/headeroverride

## Repository Layout

```text
app/        Next.js app routes and components
public/     Static markdown, images, screenshots, video, and icons
worker.js   Cloudflare Worker wrapper for static assets and response headers
wrangler.jsonc
            Cloudflare Workers and Assets deployment config
```

## Local Development

Install dependencies:

```sh
npm ci
```

Run the development server:

```sh
npm run dev
```

Build the static site:

```sh
npm run build
```

The build exports static assets into `out/`.

## Deployment

Preview the Cloudflare Worker and static assets locally:

```sh
npm run preview:worker
```

Deploy to Cloudflare:

```sh
npm run deploy:worker
```

The Cloudflare config serves `headeroverride.com` and redirects `www.headeroverride.com` to the apex domain.

