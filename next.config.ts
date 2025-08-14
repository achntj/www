import type { NextConfig } from "next";
import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";
// install this and shiki if you want code in blog once again
// import rehypePrettyCode from "rehype-pretty-code";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
