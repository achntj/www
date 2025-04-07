import NavLink from "./NavLink";
import Link from "next/link";
import {
  ChatBubbleLeftEllipsisIcon,
  CpuChipIcon,
  CodeBracketIcon,
  HomeIcon,
  InformationCircleIcon,
  PencilSquareIcon,
  SparklesIcon,
  BookOpenIcon,
  DocumentTextIcon,
  ArchiveBoxIcon,
} from "@heroicons/react/24/outline";
import Socials from "./Socials";

export default function NavItems() {
  return (
    <div className="block space-y-2 flex flex-col justify-between h-full">
      <div>
        <NavLink href="/" name="Home" />
        <NavLink href="/projects" name="Projects" />
        <NavLink href="/contact" name="Contact" />
        <div className="!my-4">
        <NavLink href="/garden" name="Digital Garden" />
        </div>
        <NavLink href="/writing" name="Writing" />
      </div>


      {/* 
      <NavLink href="/now" name="Now" />
      <NavLink href="/Achintya_Jha_Resume.pdf" name="Resume" />

      <NavLink href="/design" name="Design Inspiration">
        <SparklesIcon className="h-6 w-6"/>
      </NavLink>
      <NavLink href="/uses" name="Uses">
        <CpuChipIcon className="h-6 w-6"/>
      </NavLink> 

      <NavLink href="/coursework" name="Course Work" />
      */}


      <div className="flex flex-col space-y-4">
        <h3 className="font-bold text-gray-700 text-base mt-3 block">
          On the Web
        </h3>
        <Socials />
      </div>
    </div>
  );
}
