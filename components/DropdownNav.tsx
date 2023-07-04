import { useState, useRef } from "react";
import Link from "next/link";
import { useClickAway } from "react-use";

export default function DropdownNav() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => {
    setOpen(false);
  });

  return (
    <>
      <div ref={ref}>
        <button
          aria-label="Dropdown"
          className="flex items-center justify-center focus:outline-none mr-10 transition duration-300 ease-in-out"
          onClick={() => setOpen(!open)}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="caret-down"
            className="svg-inline--fa fa-caret-down w-4 h-4"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
            />
          </svg>
        </button>
        <div
          className={`${!open && "hidden"} 
          z-10 absolute bg-white rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
          onClick={() => setOpen(!open)}
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <Link
                href="/more"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                More
              </Link>
            </li>
            <li>
              <Link
                href="/coursework"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Coursework
              </Link>
            </li>
          </ul>
          <div className="text-sm py-2 border-t border-neutral-200">
            <a
              target="_blank"
              rel="noopener noreferrer external"
              className=" px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:underline flex items-center"
              href="https://garden.achntj.com"
            >
              <span>Digital Garden</span>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
