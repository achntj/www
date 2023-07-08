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
        passHref
        href={href}
      >
        <div className="flex items-center space-x-4 cursor-pointer rounded-lg p-2 md:p-0">
          <div className="md:hover:bg-neutral-200 md:dark:hover:bg-neutral-800 md:rounded-full md:p-2">
            {children}
          </div>
          <Tooltip
            noArrow
            className="!bg-white dark:!bg-neutral-900 hidden md:block !p-1 !text-xs !text-neutral-800 dark:!text-neutral-200 border dark:border-neutral-900 -translate-x-4 -translate-y-2"
            id={href}
          />
          <span className="md:hidden">{text}</span>
        </div>
      </Link>
    </>
  );
}
