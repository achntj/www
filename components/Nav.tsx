import ThemeSwitcher from "./ThemeSwitcher";
import NavItems from "./NavItems";

import { useState } from "react"
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="h-full flex">
      {/* Mobile hamburger button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md shadow-md"
        aria-label="Toggle navigation"
      >
        <Bars3Icon className="h-6 w-6" />
      </button>

      {/* Sidebar - hidden on mobile unless toggled */}
      <div
        className={`fixed md:relative md:flex h-full w-56 transition-transform duration-300 ease-in-out overflow-hidden bg-white dark:bg-neutral-900 md:bg-transparent ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <nav className="w-full py-8 px-6 flex flex-col gap-6 overflow-y-auto">
        <NavItems />
        <ThemeSwitcher />
        </nav>

      </div>
    </div>
  )
}
