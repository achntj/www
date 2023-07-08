import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import CustomLink from "@/components/CustomLink";
import Container from "@/components/Container";
import { postFilePaths, POSTS_PATH } from "@/utils/mdxUtils";
import Image from "next/image";
import remarkGfm from "remark-gfm";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Head,
};

export default function PostPage({ source, frontMatter }) {
  return (
    <Container
      title={frontMatter.title}
      description={frontMatter.description}
      image={frontMatter.cover}
    >
      <header className="text-xl mb-5">
        <h3>
          <Link href="/writing">/writing</Link>
        </h3>
      </header>
      <div className="">
        <Image
          className="rounded-md"
          src={`/posts/${frontMatter.cover}`}
          height={256}
          width={256}
          alt={frontMatter.title}
        />
        {frontMatter.coverSrc && (
          <span className="opacity-75 text-xs">
            Source: {frontMatter.coverSrc}
          </span>
        )}
        <h1 className="my-5">{frontMatter.title}</h1>
      </div>
      <main className="article space-y-4 leading-relaxed">
        <MDXRemote {...source} components={components} />
        <hr />
        <p>
          Written with{" "}
          <CustomLink href="https://mavie.vercel.app/">Mavié</CustomLink>
        </p>
      </main>
    </Container>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [remarkGfm],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
