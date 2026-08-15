type GuideArticleHeaderProps = {
  category: string;
  description: string;
  pageUrl: string;
  readTime: string;
  title: string;
};

export const guideDatePublished = "2026-07-25";
export const guideDateModified = "2026-07-27";

export function createGuideBreadcrumbJsonLd(title: string, pageUrl: string) {
  return createBreadcrumbJsonLd(createGuideBreadcrumbItems(title, pageUrl));
}

function createGuideBreadcrumbItems(title: string, pageUrl: string): BreadcrumbItem[] {
  return [
    { name: "Home", href: "/" },
    { name: "Guides", href: "/guides" },
    { name: title, href: pageUrl }
  ];
}

export default function GuideArticleHeader({
  category,
  description,
  pageUrl,
  readTime,
  title
}: GuideArticleHeaderProps) {
  return (
    <>
      <Breadcrumbs items={createGuideBreadcrumbItems(title, pageUrl)} />
      <header className="guide-article-header">
        <p className="eyebrow">{category} · {readTime}</p>
        <h1>{title}</h1>
        <p className="guide-lede">{description}</p>
        <p className="guide-byline">
          Published <time dateTime={guideDatePublished}>July 25, 2026</time>
          <span aria-hidden="true"> · </span>
          Updated <time dateTime={guideDateModified}>July 27, 2026</time>
          <span aria-hidden="true"> · </span>
          By <a href="/">Header Override</a>
        </p>
      </header>
    </>
  );
}
import Breadcrumbs, {
  createBreadcrumbJsonLd,
  type BreadcrumbItem
} from "../Breadcrumbs";
