import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Link from "next/link";
import path from "path";
import CustomLink from "@/components/CustomLink";
import Container from "@/components/Container";
import { postFilePaths, POSTS_PATH } from "@/utils/mdxUtils";
import Image from "next/image";
import remarkGfm from "remark-gfm";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";
import Loading from "@/components/Loading";

const components = {
  a: CustomLink,
};

export default function PostPage({ source, frontMatter }) {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitForm = async (e) => {
    setDisable(true);
    setLoading(true);
    e.preventDefault();
    let name: string = "Subscriber from the web";
    let message: string = "Subscribed to your newsletter";
    const res = await fetch(`${origin}/api/submit-form`, {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
    });
    if (res.status === 201) {
      setSuccess(true);
      console.log("submitted");
      setLoading(true);
    } else {
      console.log("not submitted");
    }
  };
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
          src={`/_images/${frontMatter.cover}`}
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
      </main>
      <p className="my-5 text-xs">
        Written with{" "}
        <CustomLink href="https://mavie.vercel.app/">Mavié</CustomLink>.
      </p>
      <div className="flex items-center space-x-4 my-5">
        <span className="border-t flex-1"></span>
        <span className="text-2xl">§</span>
        <span className="border-t flex-1"></span>
      </div>
      <div>
        {!success ? (
          <>
            {" "}
            <p>If you enjoyed reading this, subscribe to my newsletter!</p>
            <form
              onSubmit={submitForm}
              className="flex space-x-4 my-5"
              action=""
            >
              <input
                type="email"
                name="email"
                required
                className="border border-slate-100 rounded w-60 outline-none bg-transparent p-2"
                pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="block bg-teal-200 dark:bg-neutral-800 p-2 rounded"
                disabled={disable}
              >
                {!loading ? "Send" : <Loading />}
              </button>
            </form>
          </>
        ) : (
          <div className="rounded p-4 border-2 flex items-center space-x-5 border-emerald-400 dark:border-emerald-500 bg-emerald-100 dark:bg-emerald-200 text-emerald-600">
            <CheckIcon className="h-6 w-6" />
            <p>Thanks for subscribing!</p>
          </div>
        )}
      </div>
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
