import ThemeSwitcher from "./ThemeSwitcher";
import NavItems from "./NavItems";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction } from "react";

export default function Nav({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div className="h-full flex">
      {/* Mobile hamburger/close button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md shadow-md bg-white dark:bg-neutral-800"
        aria-label="Toggle navigation"
      >
        {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed z-40 md:relative md:flex h-full w-56 transition-transform 
        duration-300 ease-in-out overflow-hidden bg-white dark:bg-neutral-900 
        md:bg-transparent pt-10 md:pt-0 ${
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <nav className="w-full py-8 px-6 flex flex-col gap-6 overflow-y-auto"
onClick={() => setOpen(false)}
        >
          <NavItems />
          <ThemeSwitcher />
        </nav>
      </div>
    </div>
  );
}

