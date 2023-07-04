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
      </Head>
      <body
        className={`my-10 p-4 text-base bg-neutral-100 text-zinc-800 max-w-2xl mx-auto`}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
