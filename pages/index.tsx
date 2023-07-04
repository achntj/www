import Container from "@/components/Container";
import NowPlaying from "@/components/now-playing";
import SocialLink from "@/components/SocialLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <div className={`text-xl leading-10 mt-0 space-y-2 sm:space-y-4`}>
        <p>
          Achintya Jha is a Software Engineer interested in creating impactful{" "}
          <Link href="/projects">software</Link> and beautiful web experiences.
          He is a sophomore at{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://asu.edu/"
            className="whitespace-nowrap text-zinc-500"
          >
            Arizona State University
          </a>{" "}
          pursuing a Bachelor of Science in Computer Science.
        </p>
        <p>
          He's currently an intern at{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://nucleussoftware.com/"
            className="whitespace-nowrap text-zinc-500"
          >
            Nucleus Software
          </a>{" "}
          working on financial infrastructure & applications. Previously, he was
          a Machine Learning Intern at{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.techmahindra.com/en-in/innovation/makers-lab/"
            className="whitespace-nowrap text-zinc-500"
          >
            Tech Mahindra
          </a>
          .
        </p>
        <Link href="/contact" className="flex items-center group space-x-2">
          <h2>Get In Touch</h2>
          <ArrowRightIcon className="group-hover:translate-x-4 transition h-6 w-6" />{" "}
        </Link>

        <section className="sm:flex justify-between">
          <ul className="text-md">
            <SocialLink site="GitHub" href="https://github.com/achntj" />
            <SocialLink site="LinkedIn" href="https://linkedin.com/in/achntj" />
            <SocialLink site="Twitter" href="https://twitter.com/achntj" />
          </ul>
          <ul className="flex items-center">
            <li>
              <a
                className="bg-amber-200 sm:p-2 hover:underline"
                href="mailto:achntj@gmail.com"
              >
                <span>Email</span>{" "}
                <span className="opacity-70 group-hover:underline">
                  achntj@gmail.com
                </span>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </Container>
  );
}
