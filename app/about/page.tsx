import Container from "@/components/Container";
import CustomLink from "@/components/CustomLink";
import { pageMeta } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMeta({
  title: "About | Achintya Jha",
  description:
    "Background, research interests, technical focus, and selected academic context for Achintya Jha.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <Container>
      <section className="max-w-3xl text-[color:var(--ink)] dark:text-[color:var(--ink)]">
        <h1 className="text-3xl md:text-4xl leading-tight font-serif font-medium tracking-[0.04em]">
          About
        </h1>

        <div className="mt-5 space-y-4 leading-loose">
          <p>
            I am a Computer Science and Economics senior at Arizona State
            University and an incoming Quantitative Researcher this summer. My
            work focuses on empirical research in markets and on building tools
            that make research workflows more reliable and efficient.
          </p>
          <p>
            I am most interested in statistics, econometrics, machine
            learning, optimization, market microstructure, and data
            engineering. Across projects, I tend to care about the same
            questions: how to structure noisy data, how to test ideas
            rigorously, and how to turn research into systems that are actually
            usable.
          </p>
          <p>
            My technical toolkit is centered on Python, pandas, NumPy,
            scikit-learn, PyTorch, SQL, and modern TypeScript tooling. I have
            also worked on research and software problems outside finance,
            including machine learning systems for biotech and academic image
            enhancement research.
          </p>
        </div>

        <div className="my-8 h-px bg-gradient-to-r from-[rgba(204,182,168,0.55)] via-[rgba(48,68,51,0.18)] to-[rgba(186,204,188,0.55)] dark:from-[rgba(97,89,81,0.6)] dark:via-[rgba(129,141,131,0.35)] dark:to-[rgba(109,124,109,0.58)]" />

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-serif font-medium tracking-[0.03em]">
            Selected Coursework
          </h2>
          <ul className="pl-5 list-disc space-y-2">
            <li>Foundations of Machine Learning</li>
            <li>Introduction to Econometrics</li>
            <li>Financial Economics</li>
            <li>Game Theory and Economic Behavior</li>
            <li>Probability</li>
            <li>Portfolio Engineering</li>
          </ul>
          <p className="type-base text-[color:var(--muted-ink)] dark:text-[color:var(--muted-ink)]">
            Full course history is available on the{" "}
            <CustomLink href="/coursework">coursework page</CustomLink>.
          </p>
        </section>
      </section>
    </Container>
  );
}
