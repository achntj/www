import Link from "next/link";
import { ReactNode } from "react";
import { Tooltip } from "react-tooltip";
export default function NavLink({
  href,
  children,
  text,
}: {
  href: string;
  children: ReactNode;
  text: string;
}) {
  return (
    <>
      <Link
        data-tooltip-id={href}
        data-tooltip-content={text}
        data-tooltip-place="top"
        className="hover:bg-neutral-200 dark:hover:bg-neutral-900 rounded-full p-2"
        href={href}
      >
        {children}
      </Link>
      <Tooltip
        noArrow
        className="!bg-white dark:!bg-neutral-900 hidden sm:block !p-1 !text-xs !text-neutral-800 dark:!text-neutral-200 border dark:border-neutral-900 -translate-x-4 -translate-y-2"
        id={href}
      />
    </>
  );
}
