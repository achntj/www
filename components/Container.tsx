import type React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative h-full md:h-fit w-full">
        <div className="max-w-[700px] mx-auto py-4">{children}</div>
      </div>
    </>
  );
}
