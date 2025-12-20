"use client";

import { useEffect, useState } from "react";

export default function DateStamp() {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    setDate(new Date());
  }, []);

  if (!date) return null;

  const weekday = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
  }).format(date);
  const day = new Intl.DateTimeFormat("en-US", { day: "numeric" }).format(date);
  const dateTime = `${date.getFullYear()}-${String(
    date.getMonth() + 1,
  ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

  return (
    <div className="absolute right-5 top-4 md:right-8 md:top-6">
      <time
        dateTime={dateTime}
        aria-label={`${weekday} ${day}`}
        className="type-caption font-serif tracking-[0.16em] text-[color:var(--muted-ink)] opacity-80 tabular-nums dark:text-[color:var(--soft-ink)]"
        style={{
          fontVariant: "small-caps",
          fontVariantNumeric: "oldstyle-nums",
          fontFamily: "var(--font-serif)",
        }}
      >
        {weekday} {day}
      </time>
    </div>
  );
}
