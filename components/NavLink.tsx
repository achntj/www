import Link from "next/link";
import { ReactNode } from "react";
export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <>
      <Link
        className="hover:underline hover:bg-zinc-200 rounded-full p-2"
        href={href}
      >
        {children}
      </Link>
    </>
  );
}
