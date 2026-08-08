# Header Override

Header Override is an open-source browser extension to modify HTTP request and response headers, inject custom headers and cookies, and test APIs with switchable local profiles. Available for Chrome, Firefox, and Edge.

## Overview

Header Override helps developers, QA engineers, support engineers, and technical users test APIs, staging environments, feature flags, cookies, and request-specific behavior without changing application code.

Use the Header Override extension in Chrome, Edge, and Firefox to modify headers with local rules for API debugging, staging checks, and QA workflows.

Header Override is an open-source, lightweight ModHeader alternative for users who want scoped local header and cookie overrides without analytics, tracking, remote code, or account-based workflows.

Rules are stored locally in the user's browser and applied only to matching requests and responses. Header Override does not use analytics, tracking, advertising, remote code, or developer-controlled servers.

## Key Features

- Add or replace HTTP request and response headers from the extension popup.
- Override request Cookie headers.
- Override response Set-Cookie headers.
- Configure response cookie Domain, Path, SameSite, Lifetime, Max-Age, and Secure attributes.
- Create up to five local profiles for different projects, accounts, or test setups.
- Import and export selected profiles as local JSON files.
- Use Header Override in Chrome, Edge, and Firefox.
- Scope matching rules with browser-supported URL filter patterns.
- Enable, disable, delete, and annotate rules with comments.
- Store rules locally in browser extension storage.
- Use Manifest V3 browser extension APIs.

## Install Links

- Chrome Web Store: https://chromewebstore.google.com/detail/gkobmjeklkiepibofnghbkcjiphjacfm
- Microsoft Edge Add-ons: https://microsoftedge.microsoft.com/addons/detail/albhpnnccbkfkloddpaecdmhpnmnldhn
- Firefox Add-ons: https://addons.mozilla.org/en-US/firefox/addon/headeroverride

## Common Use Cases

- Send debug headers to staging APIs without changing application code.
- Reproduce customer-specific headers or cookies with scoped local rules.
- Toggle backend flags while testing UI flows in your browser.
- Switch between client, environment, or test-account setups with profiles.
- Document temporary rules before removing them.

## Troubleshooting Guides

- [Why an API works in Postman but fails in the browser](https://headeroverride.com/guides/api-works-postman-fails-browser)
- [Why an API returns 401 after browser login](https://headeroverride.com/guides/api-returns-401-after-login)
- [Debug CORS preflight requests](https://headeroverride.com/guides/debug-cors-preflight-requests)
- [Debug with header profiles](https://headeroverride.com/guides/debug-with-header-profiles)
- [Test admin permissions in the browser](https://headeroverride.com/guides/test-admin-permissions-browser)

## FAQ

### What is Header Override used for?

Header Override helps developers, QA teams, and support engineers modify HTTP headers and cookies from the browser for scoped debugging and testing workflows.

### Is Header Override an alternative to ModHeader?

Yes. Header Override is an open-source, focused alternative to ModHeader for modifying request headers, response headers, request cookies, and response cookies with local browser rules.

### Are rules sent to a server?

No. Rules are stored locally in browser extension storage and are used only to apply the header or cookie changes you configure.

### Can rules target specific URLs?

Yes. Header and cookie rules can be scoped with browser-supported URL filter patterns, so changes apply only to matching requests.

### Why does Header Override request access to websites?

Header Override needs access to all URLs because you can create rules for any website and scope them with URL filters. Request header and cookie values are sent only to destinations matching your URL filters; response values are applied only to matching responses. No rule data or browsing activity is transmitted to the developer or developer-controlled servers.

## Links

- Website: https://headeroverride.com/
- ModHeader alternative: https://headeroverride.com/modheader-alternative
- Privacy policy: https://headeroverride.com/privacy
- Contact: https://headeroverride.com/contact
- GitHub repository: https://github.com/headeroverride/headeroverride
- YouTube channel: https://www.youtube.com/@HeaderOverrideExtension
- Sitemap: https://headeroverride.com/sitemap.xml
- Robots policy: https://headeroverride.com/robots.txt
- LLM index: https://headeroverride.com/llms.txt
- Full LLM content: https://headeroverride.com/llms-full.txt
