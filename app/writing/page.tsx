import { readdir } from "fs/promises";
import path from "path";
import Link from "next/link";
import Container from "@/components/Container";

import { pageMeta } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMeta({
  title: "Writing | Achintya Jha",
  description: "Essays on topics I care about.",
  path: "/writing",
});

type PostMeta = { title: string; date: string; description?: string };
type Post = { slug: string; metadata: PostMeta };

async function getPosts(): Promise<Post[]> {
  const postsDir = path.join(process.cwd(), "app", "writing", "(posts)");
  const entries = await readdir(postsDir, { withFileTypes: true });
  const slugs = entries.filter((e) => e.isDirectory()).map((e) => e.name);

  const posts = await Promise.all(
    slugs.map(async (name) => {
      const mod = await import(`./(posts)/${name}/page.mdx`);
      const { metadata } = mod as { metadata: PostMeta };
      return { slug: name, metadata };
    }),
  );

  posts.sort((a, b) => +new Date(b.metadata.date) - +new Date(a.metadata.date));
  return posts;
}

export default async function WritingIndex() {
  const posts = await getPosts();

  const postsByYear: Record<string, Post[]> = {};
  posts.forEach((post) => {
    const year = new Date(post.metadata.date).getFullYear().toString();
    (postsByYear[year] ||= []).push(post);
  });

  const sortedYears = Object.keys(postsByYear).sort(
    (a, b) => Number(b) - Number(a),
  );

  return (
    <Container>
      <section className="mx-auto max-w-3xl text-[#384237] dark:text-[#dfe6d3]">
        <h1 className="text-3xl md:text-4xl leading-tight font-serif font-light">
          Writing
        </h1>
        <p className="mt-1 text-[15px] text-[#7a8578] dark:text-[#aeb9a6]">
          Essays on topics I care about.
        </p>

        {sortedYears.map((year) => (
          <div key={year} className="my-6">
            <div className="flex items-center gap-4">
              <span className="h-px flex-1 bg-[#9aa780]/40" />
              <h3 className="font-serif text-lg">{year}</h3>
              <span className="h-px flex-1 bg-[#9aa780]/40" />
            </div>

            <ul className="mt-4 space-y-2">
              {postsByYear[year]
                .sort(
                  (a, b) =>
                    +new Date(b.metadata.date) - +new Date(a.metadata.date),
                )
                .map(({ slug, metadata }) => (
                  <li key={slug}>
                    <Link
                      href={`/writing/${slug}`}
                      className="block rounded-lg px-3 py-2 transition-colors hover:bg-[#e7efdf] dark:hover:bg-[#2a312b]"
                    >
                      <h4 className="font-normal">{metadata.title}</h4>

                      {metadata.description ? (
                        <p className="mt-0.5 text-sm text-neutral-800 dark:text-neutral-400">
                          {metadata.description}
                        </p>
                      ) : null}

                      <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-500">
                        {metadata.date}
                      </p>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </section>
    </Container>
  );
}
