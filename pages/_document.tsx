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
      <body className="dark:bg-black bg-[#D2D6B2]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
