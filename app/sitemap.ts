import type { MetadataRoute } from "next";
import { promises as fs } from "fs";
import path from "path";

const SITE_URL = "https://achintyajha.com";

/** Recursively find every .../page.mdx under app/writing/(posts) */
async function* findPostPages(root: string): AsyncGenerator<string> {
  const entries = await fs.readdir(root, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(root, entry.name);
    if (entry.isDirectory()) {
      yield* findPostPages(full);
    } else if (entry.isFile() && entry.name === "page.mdx") {
      yield full;
    }
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postsDir = path.join(process.cwd(), "app", "writing", "(posts)");

  let postItems: MetadataRoute.Sitemap = [];
  try {
    const files: string[] = [];
    for await (const file of findPostPages(postsDir)) files.push(file);

    postItems = await Promise.all(
      files.map(async (file) => {
        const dir = path.dirname(file);
        const slug = path.relative(postsDir, dir).split(path.sep).join("/"); // normalize for URLs

        const stat = await fs.stat(file);
        return {
          url: `${SITE_URL}/writing/${slug}`,
          lastModified: stat.mtime.toISOString(),
          changeFrequency: "monthly",
          priority: 0.6,
        };
      }),
    );
  } catch {}

  // Use the newest post date for the / and /writing entries
  const newest = postItems
    .map((p) => new Date(p.lastModified ?? Date.now()))
    .sort((a, b) => b.getTime() - a.getTime())[0];

  const nowIso = new Date().toISOString();
  const newestIso = newest ? newest.toISOString() : nowIso;

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: newestIso,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: nowIso,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/garden`,
      lastModified: nowIso,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/writing`,
      lastModified: newestIso,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: nowIso,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/coursework`,
      lastModified: nowIso,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  return [...staticRoutes, ...postItems];
}
