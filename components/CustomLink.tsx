import Link from "next/link";
import { ReactNode } from "react";
export default function CustomLink({
  children,
  href,
  ext,
}: {
  children: ReactNode;
  href: string;
  ext?: boolean;
}) {
  return (
    <>
      {ext ? (
        <Link
          target="_blank"
          rel="noreferrer"
          className="text-emerald-600 hover:text-emerald-800"
          href={href}
        >
          {children}
        </Link>
      ) : (
        <Link className="text-emerald-600 hover:text-emerald-800" href={href}>
          {children}
        </Link>
      )}
    </>
  );
}