import Link from "next/link";
import type { ReactNode } from "react";
export default function CustomLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <>
      {href.startsWith("/") || href.startsWith("#") ? (
        <Link
          className="dark:text-[#5a7d64] text-emerald-600 hover:text-emerald-700 dark:hover:text-emerald-700"
          href={href}
        >
          {children}
        </Link>
      ) : (
        <Link
          target="_blank"
          rel="noreferrer"
          className="text-cyan-600 hover:text-cyan-800"
          href={href}
        >
          {children}
        </Link>
      )}
    </>
  );
}
