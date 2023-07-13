import NavLink from "./NavLink";
import ThemeSwitcher from "./ThemeSwitcher";
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
export default function NavItems() {
  return (
    <>
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
      <NavLink href="/more" text="More">
        <ArchiveBoxIcon className="h-6 w-6" />
      </NavLink>
      <NavLink href="/coursework" text="Coursework">
        <BookOpenIcon className="h-6 w-6" />
      </NavLink>
    </>
  );
}
