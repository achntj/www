// components/Base.tsx
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Nav from "./Nav";

export default function Base({ children, ...pageProps }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <div className="p-5 sm:hidden">
          <Bars3Icon onClick={() => setOpen(true)} className="h-6 w-6" />
        </div>
        <Nav open={open} setOpen={setOpen} />
        {children}
      </div>
    </>
  );
}
