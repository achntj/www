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
      <section className="mx-auto max-w-3xl text-[color:var(--ink)] dark:text-[color:var(--ink)]">
        <h1 className="text-3xl md:text-4xl leading-tight font-serif font-medium tracking-[0.04em]">
          Writing
        </h1>
        <p className="mt-1 type-subhead text-[color:var(--soft-ink)] dark:text-[color:var(--soft-ink)]">
          Essays on topics I care about.
        </p>

        {sortedYears.map((year) => (
          <div key={year} className="my-6">
            <div className="flex items-center gap-4">
              <span className="h-px flex-1 bg-[color:var(--hairline)]" />
              <h3 className="font-serif text-lg tracking-[0.08em] text-[color:var(--soft-ink)]">
                {year}
              </h3>
              <span className="h-px flex-1 bg-[color:var(--hairline)]" />
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
                      className="block rounded-lg px-3 py-2 transition-colors hover:bg-[rgba(var(--accent-rgb),0.08)] hover:shadow-[0_14px_36px_-30px_rgba(34,40,34,0.55)]"
                    >
                      <h4 className="font-semibold text-[color:var(--ink)]">
                        {metadata.title}
                      </h4>

                      {metadata.description ? (
                        <p className="mt-0.5 type-base text-[color:var(--ink)] leading-relaxed">
                          {metadata.description}
                        </p>
                      ) : null}

                      <p className="mt-1 type-caption text-[color:var(--muted-ink)]">
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
