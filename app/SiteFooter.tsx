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
        </nav>
      </div>
    </footer>
  );
}
