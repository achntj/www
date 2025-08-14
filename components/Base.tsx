"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Nav from "./Nav"
import { Noto_Serif } from "next/font/google"
import Image from "next/image"
import { usePathname } from "next/navigation"

const font = Noto_Serif({ subsets: ["latin"], weight: ["400"] })

export default function Base({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const mainRef = useRef<HTMLElement>(null)

  // Reset scroll position when route changes
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTop = 0
    }
  }, [pathname])

  return (
    <>
      <div
        className={`${font.className} min-h-screen text-gray-700 flex-grow dark:text-[#a0a0a0] md:flex items-center justify-center md:p-4`}
      >
        <div className="w-full max-w-7xl md:h-[80vh] bg-[#FCF6EA] dark:bg-neutral-900 md:border-2 border-[#808F66] md:rounded-2xl overflow-hidden shadow-lg flex relative">
          <div className="hidden p-2 xl:block absolute top-0 left-56 z-10 pointer-events-none">
            <Image src="/tree.png" alt="Decorative tree" width={100} height={100} className="opacity-80" />
          </div>

          <div className="hidden p-2 xl:block absolute bottom-0 right-0 z-10 pointer-events-none">
            <Image src="/flower.png" alt="Decorative flower" width={100} height={100} className="opacity-80" />
          </div>

          <Nav open={open} setOpen={setOpen} />
          <main
            ref={mainRef}
            className="flex-1 p-10 text-lg md:text-lg overflow-auto md:border-l-2 border-[#808F66] mt-10 md:mt-0 min-h-screen md:min-h-full"
          >
            {children}
          </main>
        </div>
      </div>
    </>
  )
}
