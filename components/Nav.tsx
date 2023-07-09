import ThemeSwitcher from "./ThemeSwitcher";
import { Dispatch, SetStateAction } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import NavItems from "./NavItems";

export default function Nav({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <div>
        <div className="md:hidden">
          <nav
            className={`${
              open ? "" : "-translate-x-full"
            } md:hidden nav transition-transform overflow-x-hidden z-10 fixed bottom-0 top-0 sm:pt-10 px-5 w-full h-full overflow-scroll md:bg-transparent md:dark:bg-transparent bg-neutral-100 dark:bg-[#101010]`}
          >
            <div className="sticky top-0 py-5 md:hidden">
              <XMarkIcon onClick={() => setOpen(false)} className="h-6 w-6" />
            </div>
            <div
              onClick={() => setOpen(false)}
              className="transition-none space-y-6 flex flex-col text-3xl text-gray-700 dark:text-neutral-400 antialiased"
            >
              <NavItems />
            </div>

            <div className="md:hidden cursor-pointer rounded-lg p-2 fixed bottom-4">
              <ThemeSwitcher />
            </div>
          </nav>
        </div>
        <div className="hidden md:block">
          <nav
            className="nav fixed border left-1/2 -translate-x-1/2 dark:border-neutral-800
        bottom-8 z-50 shadow-lg backdrop-blur-xl bg-white dark:bg-neutral-900 dark:drop-shadow-2xl
        rounded-full p-2 "
          >
            <div className="overflow-scroll space-x-4 flex justify-start items-center">
              <NavItems />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
