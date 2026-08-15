export type BreadcrumbItem = {
  href: string;
  name: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

const siteUrl = "https://headeroverride.com/";

export function createBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.href, siteUrl).toString()
    }))
  };
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => {
          const isCurrentPage = index === items.length - 1;

          return (
            <li aria-current={isCurrentPage ? "page" : undefined} key={item.href}>
              {isCurrentPage ? item.name : <a href={item.href}>{item.name}</a>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
