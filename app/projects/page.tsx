import Container from "@/components/Container";
import ProjectsClient from "./ProjectsClient";
import { pageMeta } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMeta({
  title: "Projects | Achintya Jha",
  description:
    "Selected work across full-stack apps, quantitative finance, and machine learning.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <Container>
      <section className="mb-10">
        <h1 className="text-3xl md:text-4xl leading-tight font-serif font-light">
          Projects
        </h1>
        <p className="mt-2 text-stone-700 dark:text-stone-300 max-w-2xl">
          Selected work across full-stack apps, quantitative finance, and
          machine learning. Filter to explore.
        </p>
      </section>

      <ProjectsClient />
    </Container>
  );
}
