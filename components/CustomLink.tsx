import Link from "next/link";
import { ReactNode } from "react";
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
        <Link className="text-emerald-600 hover:text-emerald-800" href={href}>
          {children}
        </Link>
      ) : (
        <Link
          target="_blank"
          rel="noreferrer"
          className="text-emerald-600 hover:text-emerald-800"
          href={href}
        >
          {children}
        </Link>
      )}
    </>
  );
}
