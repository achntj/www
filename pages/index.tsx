import Container from "@/components/Container";
import NowPlaying from "@/components/now-playing";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <div className={`leading-8 mt-0 space-y-2 sm:space-y-4`}>
        <p>
          Achintya Jha is a <strong>Tempe, Arizona</strong> based Software
          Engineer interested in creating impactful software and beautiful
          web-apps.
        </p>
        <p>
          He's currently an intern at{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://nucleussoftware.com/"
            className="whitespace-nowrap underline underline-offset-4 text-amber-800"
          >
            Nucleus Software
          </a>{" "}
          working on financial software & chatbots. Previously, he was a Machine
          Learning Intern at{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.techmahindra.com/en-in/innovation/makers-lab/"
            className="whitespace-nowrap underline underline-offset-4 text-sky-800"
          >
            Tech Mahindra
          </a>
          , and a Data Science Intern at Walmart Labs.
        </p>
        <p>
          He is currently a sophomore pursuing a Bachelor of Science in Computer
          Science at{" "}
          <span className="text-red-600">Arizona State University</span>.
        </p>
        <section className="xs:flex xs:space-x-2 sm:">
          <a className=" hover:underline" href="/resume.pdf">
            <span>Résumé</span>{" "}
          </a>
          <p className="hidden xs:block">&bull;</p>{" "}
          <Link className="block hover:underline" href="/contact">
            <span>Contact</span>{" "}
          </Link>
        </section>
        <div className="border border-dashed border-neutral-400" />
        <section className="sm:flex justify-between">
          <ul className="text-md">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer external"
                className=" hover:underline"
                href="https://github.com/achntj"
              >
                <span>GitHub:</span>{" "}
                <span className="opacity-70 group-hover:underline">
                  @achntj
                </span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer external"
                className=" hover:underline"
                href="https://linkedin.com/in/achntj"
              >
                <span>LinkedIn:</span>{" "}
                <span className="opacity-70 group-hover:underline">
                  @achntj
                </span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer external"
                className=" hover:underline"
                href="https://twitter.com/achntj"
              >
                <span>Twitter:</span>{" "}
                <span className="opacity-70 group-hover:underline">
                  @achntj
                </span>
              </a>
            </li>
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
        <NowPlaying />
      </div>
    </Container>
  );
}
