import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="dark" lang="en">
      <Head>
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
      </Head>
      <body
        className={`mt-10 mb-24 p-4 text-base bg-white dark:bg-[#101010] antialiased text-neutral-800 dark:text-neutral-400 max-w-2xl mx-auto`}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
