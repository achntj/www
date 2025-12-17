import type React from "react";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import Base from "@/components/Base";
import type { Metadata } from "next";
import { Suspense } from "react";

import { baseMetadata } from "@/lib/seo";

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/api/top-tracks"
          as="fetch"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/api/now-playing"
          as="fetch"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/api/last-played"
          as="fetch"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-[color:var(--app-shell)] dark:bg-[color:var(--app-shell)]">
        <ThemeProvider
          defaultTheme="dark"
          enableSystem={false}
          attribute="class"
        >
          <Suspense fallback={null}>
            <Base>{children}</Base>
            <Analytics />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
