import type { MDXComponents } from "mdx/types";
import React, { ComponentPropsWithoutRef } from "react";
import CustomLink from "@/components/CustomLink";
type AnchorProps = ComponentPropsWithoutRef<"a">;
type ImageProps = ComponentPropsWithoutRef<"img">;

const components = {
  a: ({ href, children, ...props }: AnchorProps) => {
    if (href) {
      return <CustomLink href={href}>{children}</CustomLink>;
    }
  },
  img: (props: ImageProps) => <img className="article-img" {...props} />,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
