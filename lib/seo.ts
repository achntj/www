// lib/seo.ts
import type { Metadata } from "next";

export const baseMetadata: Metadata = {
  title: "Achintya Jha",
  description:
    "Achintya Jha is a senior at Arizona State University, studying Computer Science and Economics.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    url: "https://achintyajha.com/",
    type: "website",
    title: "Achintya Jha",
    description:
      "Achintya Jha is a senior at Arizona State University, studying Computer Science and Economics.",
    images: "https://achintyajha.com/banner.png",
    siteName: "Achintya Jha",
  },
  twitter: {
    card: "summary_large_image",
    site: "@achntj",
    creator: "@achntj",
    title: "Achintya Jha",
    description:
      "Achintya Jha is a senior at Arizona State University, studying Computer Science and Economics.",
    images: "https://achintyajha.com/banner.png",
  },
};

export function pageMeta({
  title,
  description,
  image,
  path,
}: {
  title: string;
  description: string;
  image?: string;
  path?: string;
}): Metadata {
  const img =
    image ??
    (typeof baseMetadata.openGraph?.images === "string"
      ? baseMetadata.openGraph.images
      : "/banner.png");

  const desc = description ?? baseMetadata.description ?? "";

  return {
    title,
    description: desc,
    // Mirror to OG & Twitter automatically
    openGraph: {
      ...baseMetadata.openGraph,
      title,
      description: desc,
      ...(path ? { url: `https://achintyajha.com${path}` } : {}),
      images: img,
    },
    twitter: {
      ...baseMetadata.twitter,
      title,
      description: desc,
      images: img,
    },
    ...(path ? { alternates: { canonical: path } } : {}),
  };
}
