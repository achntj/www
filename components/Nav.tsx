import Link from "next/link";
import DropdownNav from "./DropdownNav";

export default function Nav() {
  return (
    <>
      <nav className="space-x-4 z-50 w-full flex justify-start items-center">
        <Link className="hover:underline" href="/">
          <span>Home</span>{" "}
        </Link>
        <Link className="hover:underline" href="/projects">
          <span>Projects</span>{" "}
        </Link>
        <DropdownNav />
      </nav>
    </>
  );
}
