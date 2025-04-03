import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import Base from "../components/Base";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="light" enableSystem={false} attribute="class">
      <Base>
          <Component {...pageProps} />
      </Base>
    <Analytics />
    </ThemeProvider>
  );
}
