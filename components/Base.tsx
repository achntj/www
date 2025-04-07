// components/Base.tsx
import { useState } from "react";
import Nav from "./Nav";
import { Noto_Serif } from "next/font/google"

const font = Noto_Serif({ subsets: ["latin"], weight: ['400'] })

export default function Base({ children, ...pageProps }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={`${font.className} min-h-screen text-gray-700 flex-grow dark:text-[#a0a0a0] md:flex items-center justify-center md:p-4`}>

        <div className="w-full max-w-7xl md:h-[80vh] bg-[#FCF6EA] dark:bg-neutral-900 md:border-2 border-[#808F66] md:rounded-2xl overflow-hidden shadow-lg flex">
          <Nav open={open} setOpen={setOpen} />
          <main className="flex-1 p-10 text-lg md:text-lg overflow-auto md:border-l-2 border-[#808F66] mt-10 md:mt-0 min-h-screen md:min-h-full">{children}</main>
        </div>
      </div>
      </>
  );
}
