import Container from "@/components/Container";
import ProjectsClient from "./ProjectsClient";
import { pageMeta } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMeta({
  title: "Projects | Achintya Jha",
  description:
    "Selected work in quantitative research, machine learning, and research engineering.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <Container>
      <section className="mb-10">
        <h1 className="text-3xl md:text-4xl leading-tight font-serif font-medium tracking-[0.04em] text-[color:var(--ink)] dark:text-[color:var(--ink)]">
          Projects
        </h1>
        <p className="mt-2 type-subhead text-[color:var(--muted-ink)] dark:text-[color:var(--muted-ink)] max-w-2xl leading-relaxed">
          Selected work in quantitative research, machine learning, and
          research engineering.
        </p>
        <p className="mt-3 type-base text-[color:var(--muted-ink)] dark:text-[color:var(--muted-ink)] max-w-2xl leading-relaxed">
          Projects shown here are personal, academic, or open-source work.
        </p>
      </section>

      <ProjectsClient />
    </Container>
  );
}
