import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className={`my-10 p-4 text-base bg-[#F5E6D4] text-[#2C231B] max-w-2xl mx-auto`}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
