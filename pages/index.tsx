import Container from "@/components/Container";
import NowPlaying from "@/components/now-playing";
import CustomLink from "@/components/CustomLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <div className={`text-xl leading-10 mt-0 space-y-2 sm:space-y-4`}>
        Hi! I am{" "}
        <h1 className="text-xl inline-block font-normal text-neutral-800 dark:text-neutral-400">
          Achintya
          {/* SEO lol */}
          <span className="hidden">Jha</span>,
        </h1>{" "}
        a Software Engineer with a passion for creating impactful software and
        crafting beautiful web experiences.{" "}
        <p>
          I am currently interning at{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://nucleussoftware.com/"
            className="whitespace-nowrap text-neutral-500 dark:text-neutral-300"
          >
            Nucleus Software
          </a>{" "}
          , where I am working on financial infrastructure and applications.
          Previously, I was a Machine Learning Intern at{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.techmahindra.com/en-in/innovation/makers-lab/"
            className="whitespace-nowrap text-neutral-500 dark:text-neutral-300"
          >
            Tech Mahindra
          </a>{" "}
          . Here’s my <CustomLink href="/Achintya_Resume">Résumé</CustomLink>
        </p>
        <p>
          I am a sophomore at{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://asu.edu/"
            className="whitespace-nowrap text-neutral-500 dark:text-neutral-300"
          >
            Arizona State University
          </a>
          , pursuing a Bachelor of Science degree in Computer Science. Here’s my{" "}
          <CustomLink href="/coursework">coursework</CustomLink>.
        </p>
        <Link href="/contact" className="flex items-center group space-x-2">
          <p>Get In Touch</p>
          <ArrowRightIcon className="group-hover:translate-x-4 transition h-6 w-6" />{" "}
        </Link>
        <section className="">
          <div className="sm:flex justify-between">
            <ul className="text-md">
              <li>
                <CustomLink href="https://github.com/achntj">GitHub</CustomLink>
              </li>
              <li>
                <CustomLink href="https://linkedin.com/in/achntj">
                  LinkedIn
                </CustomLink>
              </li>
              <li>
                <CustomLink href="https://twitter.com/achntj">
                  Twitter
                </CustomLink>
              </li>
            </ul>
            <ul className="flex items-center">
              <li>
                <a
                  className="bg-amber-200 dark:bg-neutral-800 sm:p-2 hover:underline"
                  href="mailto:achntj@gmail.com"
                >
                  <span>Email</span>{" "}
                  <span className="opacity-70 group-hover:underline">
                    achntj@gmail.com
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </Container>
  );
}
