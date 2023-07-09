import { Poppins } from "next/font/google";
// Noto_Serif_Georgian is also nice
import HeadContainer from "./HeadContainer";
import Nav from "./Nav";
import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

const font = Poppins({ weight: "400", subsets: ["latin"] });
export default function Container({
  title,
  description,
  image,
  children,
}: {
  title?: string;
  description?: string;
  image?: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <HeadContainer title={title} description={description} image={image} />

      <div className={`${font.className}`}>
        <div className="p-5 md:hidden">
          <Bars3Icon onClick={() => setOpen(true)} className="h-8 w-8" />
        </div>
        <Nav open={open} setOpen={setOpen} />
        <div className="p-4 md:mt-20">{children}</div>
      </div>
    </>
  );
}
