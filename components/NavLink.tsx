"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavLink({ href, name }: { href: string; name: string }) {
  const pathname = usePathname()
  const isActive = pathname === href
  return (
    <Link passHref href={href}>
      <div
        title={name}
        className={`${
          isActive
            ? "underline underline-offset-[10px] decoration-[color:rgba(var(--accent-rgb),0.58)] dark:decoration-[color:rgba(var(--accent-rgb),0.62)] decoration-[1.2px] text-[color:var(--ink)] dark:text-white"
            : "underline-offset-[10px] decoration-[color:rgba(var(--accent-rgb),0.32)] dark:decoration-[color:rgba(var(--accent-rgb),0.26)] decoration-[1px]"
        } navLink type-base flex items-center space-x-4 cursor-pointer rounded-xl px-3 py-2 tracking-[0.09em] font-[560] text-[color:var(--muted-ink)] hover:text-[color:var(--ink)] hover:bg-[rgba(var(--accent-rgb),0.06)] dark:text-[color:var(--ink)] dark:hover:text-[color:var(--ink)] dark:hover:bg-[rgba(var(--accent-rgb),0.12)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[rgba(var(--accent-rgb),0.45)] focus-visible:outline-offset-3`}
        style={{ fontVariant: "small-caps" }}
      >
        <p className="block">{name}</p>
      </div>
    </Link>
  )
}
