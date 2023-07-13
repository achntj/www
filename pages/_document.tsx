import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
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
        className={`mb-24 text-base bg-white dark:bg-[#101010] antialiased text-neutral-800 dark:text-neutral-400`}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
