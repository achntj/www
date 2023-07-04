import DropdownNav from "./DropdownNav";
import {
  ArchiveBoxIcon,
  CameraIcon,
  CommandLineIcon,
  DocumentTextIcon,
  GiftIcon,
  HomeIcon,
  PaperAirplaneIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import NavLink from "./NavLink";

export default function Nav() {
  return (
    <>
      <nav
        className="nav overflow-scroll fixed border left-1/2 -translate-x-1/2 
        bottom-8 space-x-4 z-50 shadow-lg backdrop-blur-xl bg-white 
        rounded-full p-2 flex justify-start items-center"
      >
        <NavLink href="/">
          <HomeIcon className="h-6 w-6" />
        </NavLink>
        <NavLink href="/projects">
          <CommandLineIcon className="h-6 w-6" />
        </NavLink>
        {/*
        <NavLink
          href="/photos"
        >
          <CameraIcon className="h-6 w-6" />
        </NavLink>
          */}
        <NavLink href="/more">
          <ArchiveBoxIcon className="h-6 w-6" />
        </NavLink>
        <NavLink href="/Achintya_Resume.pdf">
          <DocumentTextIcon className="h-6 w-6" />
        </NavLink>
        <NavLink href="/contact">
          <PaperAirplaneIcon className="h-6 w-6" />
        </NavLink>

        <NavLink href="/coursework">
          <BookOpenIcon className="h-6 w-6" />
        </NavLink>
        {/*
        <NavLink
          href="/more"
        >
          <GiftIcon className="h-6 w-6" />
        </NavLink>
          */}
      </nav>
    </>
  );
}
