export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <span>Header Override</span>
        <nav aria-label="Footer">
          <a href="/privacy">Privacy</a>
          <a href="https://github.com/headeroverride/headeroverride" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.youtube.com/@HeaderOverrideExtension" target="_blank" rel="noreferrer">YouTube</a>
          <a href="/contact">Contact</a>
          <a
            className="product-hunt-badge"
            href="https://www.producthunt.com/products/header-override?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-header-override"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Header Override - Browser extension to modify headers and cookies | Product Hunt"
              width="250"
              height="54"
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1206875&theme=light&t=1785230338704"
              loading="lazy"
              fetchPriority="low"
              decoding="async"
            />
          </a>
        </nav>
      </div>
    </footer>
  );
}
