"use client"

import ThemeSwitcher from "./ThemeSwitcher"
import NavItems from "./NavItems"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import type { Dispatch, SetStateAction } from "react"

export default function Nav({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}) {
  const toggleSidebar = () => {
    setOpen(!open)
  }

  return (
    <div className="h-full flex">
      {/* Mobile hamburger/close button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2.5 rounded-full border border-[color:rgba(52,72,54,0.26)] bg-white/85 shadow-[0_12px_34px_-22px_rgba(34,40,34,0.5)] backdrop-blur text-[color:var(--ink)] dark:text-[color:var(--ink)] dark:border-[color:rgba(120,136,125,0.35)] dark:bg-[#0b0c0e]/95 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[color:rgba(52,72,54,0.4)] focus-visible:outline-offset-2"
        aria-label="Toggle navigation"
      >
        {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed z-40 md:relative md:flex h-full w-56 transition-transform 
        duration-300 ease-in-out overflow-hidden bg-white/70 dark:bg-[#0b0c0e]/95 
        md:bg-transparent pt-10 md:pt-0 md:border-r border-[color:rgba(52,72,54,0.2)] dark:border-[color:rgba(110,120,110,0.32)] ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <nav className="w-full py-8 px-6 flex flex-col gap-6 overflow-y-auto" onClick={() => setOpen(false)}>
          <NavItems />
          <ThemeSwitcher />
        </nav>
      </div>
    </div>
  )
}
