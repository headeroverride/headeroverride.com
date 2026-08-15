"use client";

import { useState, type FocusEvent } from "react";

const guides = [
  ["/guides/api-works-postman-fails-browser", "CORS & APIs"],
  ["/guides/debug-cors-preflight-requests", "Debug CORS Preflight Requests"],
  ["/guides/api-returns-401-after-login", "Authentication & Cookies"],
  ["/guides/test-admin-permissions-browser", "Test Admin Permissions"],
  ["/guides/debug-with-header-profiles", "Debug with Header Profiles"]
] as const;

export default function GuideDropdown() {
  const [open, setOpen] = useState(false);

  function handleBlur(event: FocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setOpen(false);
    }
  }

  return (
    <div
      className={`nav-dropdown${open ? " is-open" : ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={handleBlur}
    >
      <button
        className="nav-link nav-dropdown-trigger"
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setOpen(false);
            event.currentTarget.blur();
          }
        }}
      >
        Guides <span className="nav-chevron" aria-hidden="true" />
      </button>
      <div className="nav-dropdown-panel">
        <a href="/guides">All guides</a>
        {guides.map(([href, label]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}
