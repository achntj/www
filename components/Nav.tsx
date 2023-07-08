import {
  ArchiveBoxIcon,
  CameraIcon,
  CommandLineIcon,
  DocumentTextIcon,
  GiftIcon,
  HomeIcon,
  PaperAirplaneIcon,
  BookOpenIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import NavLink from "./NavLink";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Nav() {
  return (
    <>
      <nav
        className="nav fixed border left-1/2 -translate-x-1/2 dark:border-neutral-800
        bottom-8 z-50 shadow-lg backdrop-blur-xl bg-white dark:bg-neutral-900 dark:drop-shadow-2xl
        rounded-full p-2 "
      >
        <div className="overflow-scroll space-x-4 flex justify-start items-center">
          <NavLink href="/" text="Home">
            <HomeIcon className="h-6 w-6" />
          </NavLink>
          <NavLink href="/projects" text="Projects">
            <CommandLineIcon className="h-6 w-6" />
          </NavLink>
          <NavLink href="/writing" text="Writing">
            <PencilSquareIcon className="h-6 w-6" />
          </NavLink>
          {/*
        <NavLink
          href="/photos"
        >
          <CameraIcon className="h-6 w-6" />
        </NavLink>
          */}
          <NavLink href="/Achintya_Resume.pdf" text="Resume">
            <DocumentTextIcon className="h-6 w-6" />
          </NavLink>
          <NavLink href="/more" text="More">
            <ArchiveBoxIcon className="h-6 w-6" />
          </NavLink>
          <NavLink href="/contact" text="Contact">
            <PaperAirplaneIcon className="h-6 w-6" />
          </NavLink>

          <NavLink href="/coursework" text="Coursework">
            <BookOpenIcon className="h-6 w-6" />
          </NavLink>
          <ThemeSwitcher />
        </div>
      </nav>
    </>
  );
}
