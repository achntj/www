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
          isActive ? "underline underline-offset-4" : ""
        } navLink flex items-center space-x-4 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg p-2`}
      >
        <p className="block">{name}</p>
      </div>
    </Link>
  )
}
