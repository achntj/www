"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Nav from "./Nav"
import { Cormorant_Garamond, Newsreader } from "next/font/google"
import Image from "next/image"
import { usePathname } from "next/navigation"
import DateStamp from "./DateStamp"

const body = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-body",
})

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-display",
})

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
        className={`${body.variable} ${display.variable} min-h-screen text-[color:var(--ink)] flex-grow dark:text-[#d6d9de] md:flex items-center justify-center md:p-4 bg-[color:var(--app-shell)]`}
      >
        <div className="w-full max-w-7xl md:h-[80vh] md:border border-[color:rgba(52,72,54,0.24)] dark:border-[color:rgba(122,136,125,0.24)] md:rounded-2xl overflow-hidden shadow-[0_24px_70px_-48px_rgba(24,27,24,0.6)] flex relative backdrop-blur-[0.75px] bg-white/90 dark:bg-[#070808]">
          <div className="hidden p-2 xl:block absolute top-0 left-56 z-10 pointer-events-none">
            <Image src="/tree.png" alt="Decorative tree" width={100} height={100} className="opacity-80" />
          </div>

          <div className="hidden p-2 xl:block absolute bottom-0 right-0 z-10 pointer-events-none">
            <Image src="/flower.png" alt="Decorative flower" width={100} height={100} className="opacity-80" />
          </div>

          <Nav open={open} setOpen={setOpen} />
          <main
            ref={mainRef}
            className="panel-surface relative flex-1 p-6 md:p-10 pt-16 md:pt-10 type-reading md:type-reading leading-[1.62] tracking-[0.002em] font-[540] overflow-auto md:border-l border-[color:rgba(48,68,51,0.2)] dark:border-[color:rgba(105,118,107,0.26)] mt-0 min-h-screen md:min-h-full bg-[color:var(--surface)]"
          >
            <DateStamp />
            {children}
          </main>
        </div>
      </div>
    </>
  )
}
