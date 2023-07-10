import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export default function NavLink({
  href,
  children,
  text,
}: {
  href: string;
  children: ReactNode;
  text?: string;
}) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <>
      <Link
        className={`${
          isActive ? "font-bold text-black dark:text-neutral-200" : ""
        }
        lg:w-fit
        `}
        href={href}
      >
        <div className="flex items-center space-x-4 cursor-pointer rounded-lg p-2 lg:space-x-0">
          <div className="lg:hidden">{children}</div>
          <span className="">{text}</span>
        </div>
      </Link>
    </>
  );
}
