import Container from "@/components/Container";
import Link from "next/link";
import CustomLink from "@/components/CustomLink";

export default function Home() {
  const ctaClass =
    "inline-flex items-center rounded-[12px] px-4 py-2.5 type-base font-semibold tracking-[0.08em] border border-[color:var(--hairline)] text-[color:var(--ink)] bg-[color:var(--pill)] backdrop-blur-sm hover:bg-[rgba(var(--accent-rgb),0.1)] hover:border-[rgba(var(--accent-rgb),0.35)] shadow-[0_18px_44px_-36px_rgba(34,40,34,0.6)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[rgba(var(--accent-rgb),0.38)] focus-visible:outline-offset-2";
  return (
    <Container>
      <section className="">
        <h1 className="text-3xl md:text-4xl leading-tight font-serif font-medium tracking-[0.04em] text-[color:var(--ink)] dark:text-[color:var(--ink)]">
          <span className="inline-flex items-center gap-2 flex-wrap">
            <img
              src="/lotus.svg"
              alt=""
              aria-hidden="true"
              className="w-6 h-6 md:w-7 md:h-7"
            />
            <span>Achintya Jha</span>
          </span>
        </h1>
        <p className="mt-1 type-subhead text-[color:var(--soft-ink)] dark:text-[color:var(--soft-ink)]">
          Computer Science and Economics senior at Arizona State University.
        </p>

        <blockquote className="mt-4 text-base md:text-lg">
          Incoming Quantitative Researcher with interests in
          systematic investing, statistical learning, and research tooling.
        </blockquote>

        <div className="mt-6 space-y-4 leading-loose">
          <p>
            My work sits at the intersection of quantitative research, machine
            learning, and data engineering. I care about building disciplined
            research processes, validating ideas empirically, and translating
            messy data into usable signals.
          </p>
          <p>
            I currently work as a quantitative analyst in the Student
            Investment Management Fund. Previously, I worked on machine
            learning and software at Epigeneres Biotech, building data
            pipelines and models that supported cancer research.
          </p>
          <p>
            My strengths are statistical modeling, market-oriented research,
            and production-minded implementation. At ASU, I also collaborated
            on low-light image enhancement research combining classical image
            processing and deep learning; a short write-up is available{" "}
            <CustomLink href="/low_light_report.pdf">here</CustomLink>.
          </p>
        </div>

        <div className="my-6 h-px bg-gradient-to-r from-[rgba(204,182,168,0.55)] via-[rgba(48,68,51,0.18)] to-[rgba(186,204,188,0.55)] dark:from-[rgba(97,89,81,0.6)] dark:via-[rgba(129,141,131,0.35)] dark:to-[rgba(109,124,109,0.58)]" />

        <div className="flex flex-col sm:flex-row w-fit flex-wrap gap-3">
          <Link href="/about" className={ctaClass}>
            About
          </Link>

          <Link href="/projects" className={ctaClass}>
            Projects
          </Link>

          <Link href="/writing" className={ctaClass}>
            Notes
          </Link>

          <Link href="/contact" className={ctaClass}>
            Contact
          </Link>
        </div>
      </section>
    </Container>
  );
}
