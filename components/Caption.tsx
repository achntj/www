import Link from "next/link";
import { ReactNode } from "react";

export default function Caption({
  children,
  src,
}: {
  children: ReactNode;
  src?: string;
}) {
  const isInternal = src?.startsWith("/") || src?.startsWith("#");

  return (
    <span className="block text-center text-sm mt-2">
      {children}
      {src && (
        <>
          {" "}
          (
          {isInternal ? (
            <Link className="text-emerald-600 hover:text-emerald-800" href={src}>
              Source
            </Link>
          ) : (
            <Link
              href={src}
              target="_blank"
              rel="noreferrer"
              className="text-cyan-600 hover:text-cyan-800"
            >
              Source
            </Link>
          )}
          )
        </>
      )}
    </span>
  );
}

