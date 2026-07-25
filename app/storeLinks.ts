export type BrowserKey = "chrome" | "edge" | "firefox";

export type StoreLink = {
  key: BrowserKey;
  label: string;
  url: string;
};

export const storeLinks: StoreLink[] = [
  {
    key: "chrome",
    label: "Chrome",
    url: "https://chromewebstore.google.com/detail/gkobmjeklkiepibofnghbkcjiphjacfm"
  },
  {
    key: "edge",
    label: "Edge",
    url: "https://microsoftedge.microsoft.com/addons/detail/albhpnnccbkfkloddpaecdmhpnmnldhn"
  },
  {
    key: "firefox",
    label: "Firefox",
    url: "https://addons.mozilla.org/en-US/firefox/addon/headeroverride"
  }
];

export function withWebsiteUtm(url: string) {
  try {
    const storeUrl = new URL(url);
    storeUrl.searchParams.set("utm_source", "website");
    return storeUrl.toString();
  } catch {
    return url;
  }
}
