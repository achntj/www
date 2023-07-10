import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { Tooltip } from "react-tooltip";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <>
      <button
        data-tooltip-id="theme"
        data-tooltip-content={`Switch to ${
          theme === "dark" ? "light" : "dark"
        } mode`}
        data-tooltip-place="right"
        aria-label="Toggle Dark Mode"
        type="button"
        className="hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-full p-2"
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
      <Tooltip
        noArrow
        className="!bg-white dark:!bg-neutral-900 hidden sm:block !p-1 !text-xs !text-neutral-800 dark:!text-neutral-200 border dark:border-neutral-900"
        id="theme"
      />
    </>
  );
}
