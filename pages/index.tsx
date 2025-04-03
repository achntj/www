import Container from "@/components/Container";
import CustomLink from "@/components/CustomLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Home() {
  return (
    <Container title="Home">
      <div className={`text-xl leading-10 mt-0 space-y-2 sm:space-y-4`}>
        <div className="leading-tight">
          <h1 className="">Achintya Jha{" "} 
          </h1>{" "}
          <div className="text-neutral-700 dark:text-neutral-400 space-y-3 my-2">
            <p className="flex items-center space-x-2">
              <ArrowRightIcon className="h-4 w-4" />
              <span>Software Developer, Data Analyst, Designer</span>
            </p>
            <p className="flex items-center space-x-2">
              <ArrowRightIcon className="h-4 w-4" />
              <span>CS + Econ @ ASU</span>
            </p>
            <p className="flex items-center space-x-2">
              <ArrowRightIcon className="h-4 w-4" />
              <a
                className="underline underline-offset-4 decoration-dotted"
                href="/Achintya_Jha_Resume.pdf"
              >
                View Résumé
              </a>
            </p>
          </div>
        </div>
        <p>
          Recently, I was a Machine Learning and Biotech intern at Epigeneres
          Biotech, where I worked with Genetic Data and used machine learning
          and data science for Cancer Research applications. Previously, I was a
          Machine Learning Intern at{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.techmahindra.com/en-in/innovation/makers-lab/"
            className="whitespace-nowrap text-neutral-500 dark:text-neutral-300"
          >
            Tech Mahindra
          </a>{" "}
          .
        </p>
        <p>
          I am also a junior at{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://asu.edu/"
            className="whitespace-nowrap text-neutral-500 dark:text-neutral-300"
          >
            Arizona State University
          </a>
          , pursuing a Bachelor of Science degree in Computer Science and
          Economics. Here’s my{" "}
          <CustomLink href="/coursework">coursework</CustomLink>.
        </p>
        <p>
          My passion lies in harnessing technology to optimize financial
          processes and drive innovation in the financial sector.
        </p>
        <Link href="/contact" className="flex items-center group space-x-2">
          <p>Get In Touch</p>
          <ArrowRightIcon className="group-hover:translate-x-4 transition h-6 w-6" />{" "}
        </Link>
      </div>
    </Container>
  );
}
