import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import Container from "@/components/Container";
import { postFilePaths, POSTS_PATH } from "@/utils/mdxUtils";

export default function Index({ posts }) {
  // Group posts by year
  const postsByYear = {};

  posts.forEach((post) => {
    const year = new Date(post.frontmatter.date).getFullYear();
    if (!postsByYear[year]) {
      postsByYear[year] = [];
    }
    postsByYear[year].push(post);
  });

  // Sort years in reverse chronological order
  const sortedYears = Object.keys(postsByYear).sort(
    (a, b) => Number(b) - Number(a)
  );

  return (
    <Container>
      <h1 className="mb-2">Writing</h1>
      <p>Essays on topics I care about.</p>
      {sortedYears.map((year) => (
        <div key={year} className="my-4">
          <div className="flex items-center space-x-4">
            <span className="border-t flex-1"></span>
            <h3 className="">{year}</h3>
            <span className="border-t flex-1"></span>
          </div>
          <ul className="my-5">
            {postsByYear[year]
              .sort(
                (a, b) =>
                  Number(new Date(b.frontmatter.date)) -
                  Number(new Date(a.frontmatter.date))
              )
              .map((post) => (
                <Link
                  key={post.filePath}
                  href={`/writing/${post.filePath.replace(/\.mdx?$/, "")}`}
                >
                  <li className="py-2">
                    <h4 className="font-normal">{post.frontmatter.title}</h4>
                    <p className="text-sm text-neutral-800 dark:text-neutral-400">
                      {post.frontmatter.description}
                    </p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-500">
                      {post.frontmatter.date}
                    </p>
                  </li>
                </Link>
              ))}
          </ul>
        </div>
      ))}
    </Container>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      frontmatter: data,
      filePath,
    };
  });

  posts.sort(
    (a, b) =>
      Number(new Date(b.frontmatter.date)) -
      Number(new Date(a.frontmatter.date))
  );
  return { props: { posts } };
}
