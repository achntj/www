"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="hover:bg-[rgba(var(--accent-rgb),0.12)] rounded-full p-2 w-fit text-[color:var(--muted-ink)] hover:text-[color:var(--ink)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[rgba(var(--accent-rgb),0.35)] focus-visible:outline-offset-2"
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        {mounted && (
          <>
            {theme === "dark" ? (
              <MoonIcon className="h-6 w-6" />
            ) : (
              <SunIcon className="h-6 w-6" />
            )}
          </>
        )}
      </button>
    </>
  );
}
