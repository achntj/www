import NavLink from "./NavLink";
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
    <div className="block space-y-2">
      <NavLink href="/" name="Home">
        <HomeIcon className="h-6 w-6"/>
      </NavLink>
      <NavLink href="/Achintya_Jha_Resume.pdf" name="Resume">
        <DocumentTextIcon className="h-6 w-6"/>
      </NavLink>
      <NavLink href="/projects" name="Projects">
        <CodeBracketIcon className="h-6 w-6"/>
      </NavLink>
      <NavLink href="/contact" name="Contact">
        <ChatBubbleLeftEllipsisIcon className="h-6 w-6"/>
      </NavLink>
      <h3 className="font-bold text-gray-700 text-base px-2 block !my-4">
        Digital Garden
      </h3>
      <NavLink href="/writing" name="Writing">
        <PencilSquareIcon className="h-6 w-6"/>
      </NavLink>
      <NavLink href="/more" name="More">
        <ArchiveBoxIcon className="h-6 w-6" />
      </NavLink>

      <NavLink href="/now" name="Now">
        <InformationCircleIcon className="h-6 w-6"/>
      </NavLink>

      {/* <NavLink href="/design" name="Design Inspiration">
        <SparklesIcon className="h-6 w-6"/>
      </NavLink>
      <NavLink href="/uses" name="Uses">
        <CpuChipIcon className="h-6 w-6"/>
      </NavLink> */}

      <NavLink href="/coursework" name="Course Work">
        <BookOpenIcon className="h-6 w-6"/>
      </NavLink>

      <div className="flex flex-col bg-[#FBF5E2] border-2 border-[#E2B58A] dark:bg-neutral-900 p-2 rounded-lg space-y-4">
        <h3 className="font-bold text-gray-700 text-base mt-3 block">
          On the Web
        </h3>
        <Socials />
      </div>
    </div>
  );
}
