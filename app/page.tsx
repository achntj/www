import Container from "@/components/Container";
import Link from "next/link";

export default function Home() {
  const ctaClass =
    "inline-flex items-center rounded-[12px] px-4 py-2.5 type-base font-semibold tracking-[0.08em] border border-[color:var(--hairline)] text-[color:var(--ink)] bg-[color:var(--pill)] backdrop-blur-sm hover:bg-[rgba(var(--accent-rgb),0.1)] hover:border-[rgba(var(--accent-rgb),0.35)] shadow-[0_18px_44px_-36px_rgba(34,40,34,0.6)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[rgba(var(--accent-rgb),0.38)] focus-visible:outline-offset-2";
  return (
    <Container>
      <section className="max-w-2xl">
        <h1 className="text-3xl md:text-4xl leading-tight font-serif font-medium tracking-[0.04em] text-[color:var(--ink)] dark:text-[color:var(--ink)]">
          <span className="inline-flex items-center gap-3 flex-wrap">
            <img
              src="/lotus.svg"
              alt=""
              aria-hidden="true"
              className="w-6 h-6 md:w-7 md:h-7"
            />
            <span>Hey, I&apos;m Achintya.</span>
          </span>
        </h1>

        <div className="mt-6 space-y-4 text-[color:var(--muted-ink)] dark:text-[color:var(--muted-ink)]">
          <p className="text-[1.08rem] md:text-[1.14rem] leading-8 text-[color:var(--ink)] dark:text-[color:var(--ink)]">
            I recently graduated from Arizona State University, where I studied
            Computer Science and Economics. These days, I spend most of my
            time thinking about markets, data, and research tools.
          </p>
          <p>
            Before graduating, I was a quantitative analyst in the Student
            Investment Management Fund and worked on machine learning and
            software at Epigeneres Biotech.
          </p>
          <p>
            This site has more about my background, projects, notes, and how to
            reach me.
          </p>
        </div>

        <div className="my-6 h-px bg-gradient-to-r from-[rgba(204,182,168,0.55)] via-[rgba(48,68,51,0.18)] to-[rgba(186,204,188,0.55)] dark:from-[rgba(97,89,81,0.6)] dark:via-[rgba(129,141,131,0.35)] dark:to-[rgba(109,124,109,0.58)]" />

        <nav
          aria-label="Explore site"
          className="flex flex-col sm:flex-row w-fit flex-wrap gap-3"
        >
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
        </nav>
      </section>
    </Container>
  );
}
