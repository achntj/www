import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import Container from "@/components/Container";
import { postFilePaths, POSTS_PATH } from "@/utils/mdxUtils";

export default function Index({ posts }) {
  return (
    <Container>
      <h1 className="mb-2">Writing</h1>
      <p>Essays on topics I care about.</p>
      <ul className="my-5 last:border-b">
        {posts.map((post) => (
          <Link
            key={post.filePath}
            href={`/writing/${post.filePath.replace(/\.mdx?$/, "")}`}
          >
            <li className="space-x-2 py-2 border-t flex justify-between">
              <span>{post.frontmatter.title}</span>
              <span>{post.frontmatter.date}</span>
            </li>
          </Link>
        ))}
      </ul>
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
