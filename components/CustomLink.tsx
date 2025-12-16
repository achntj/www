import Link from "next/link";
import type { ReactNode } from "react";
export default function CustomLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  const linkClass =
    "relative font-semibold tracking-[0.03em] text-[color:var(--accent)] underline decoration-[rgba(var(--accent-rgb),0.32)] decoration-[0.065em] underline-offset-[7px] hover:text-[color:var(--ink)] hover:decoration-[rgba(var(--accent-rgb),0.72)] transition-colors duration-200 dark:text-[color:var(--accent)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[rgba(var(--accent-rgb),0.42)] focus-visible:outline-offset-3"
  return (
    <>
      {href.startsWith("/") || href.startsWith("#") ? (
        <Link className={linkClass} href={href}>
          {children}
        </Link>
      ) : (
        <Link target="_blank" rel="noreferrer" className={linkClass} href={href}>
          {children}
        </Link>
      )}
    </>
  );
}
