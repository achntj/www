import ThemeSwitcher from "./ThemeSwitcher";
import { Dispatch, SetStateAction } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import NavItems from "./NavItems";
import NavLink from "./NavLink";

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
        <nav
          className={`${
            open ? "" : "lg:translate-x-0 -translate-x-full"
          } nav justify-between flex flex-col transition-transform overflow-x-hidden z-10 fixed 
            bottom-0 top-0 p-5 w-full lg:w-fit h-full overflow-scroll 
            lg:bg-transparent lg:dark:bg-transparent bg-neutral-100 
            dark:bg-[#101010]`}
        >
          <div>
            <div className="sticky top-0 py-5 lg:hidden">
              <XMarkIcon onClick={() => setOpen(false)} className="h-8 w-8" />
            </div>
            <div
              onClick={() => setOpen(false)}
              className="transition-none space-y-6 flex flex-col lg:text-2xl 
              text-3xl text-gray-700 dark:text-neutral-400 antialiased lg:pt-20"
            >
              <NavItems />
            </div>
          </div>
          <div className="">
            <ThemeSwitcher />
          </div>
        </nav>
      </div>
    </>
  );
}
