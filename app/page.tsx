import Container from "@/components/Container";
import Link from "next/link";
import CustomLink from "@/components/CustomLink";

export default function Home() {
  return (
    <Container>
      <section className="">
        <h1 className="text-3xl md:text-4xl leading-tight font-serif font-light">
          <span className="mr-2">🪷</span>Hi, I’m Achintya
        </h1>
        <p className="mt-1 text-[15px] text-[#7a8578] dark:text-[#aeb9a6]">
          Welcome to my little digital garden.
        </p>

        <blockquote className="mt-4 border-l-4 border-[#C3D2B3] bg-white/60 dark:bg-[#1c211d]/50 dark:border-[#3b463c] pl-4 py-2 text-base md:text-lg">
          Right now, I’m building small, intelligent systems that make life
          easier—mostly around language, research, and markets.{" "}
        </blockquote>

        <div className="mt-6 space-y-4 leading-loose">
          <p>
            I’m a CS + Economics senior at Arizona State University and a
            quantitative analyst in the Student Investment Management Fund.
          </p>
          <p>
            Previously I worked on ML/Software at Epigeneres Biotech, building
            data pipelines and models that support cancer research.
          </p>
          <p>
            At ASU, I also collaborated with Dr. Malena Español on low-light
            image enhancement research. We combined classical image processing
            and deep learning to improve visibility in low-exposure images; you
            can read a short write-up{" "}
            <CustomLink href="/low_light_report.pdf">here</CustomLink>.
          </p>{" "}
        </div>

        <div className="my-6 h-px bg-[#9aa780]/40 dark:bg-[#3b463c]" />

        <div className="flex flex-col sm:flex-row w-fit flex-wrap gap-3">
          <Link
            href="/projects"
            className="
              inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium
              border border-[#9aa780]/50 text-[#2f6d47] hover:bg-[#e7efdf]
              dark:text-[#b9c6ac] dark:border-[#3b463c] dark:hover:bg-[#2a312b]
            "
          >
            Projects
          </Link>

          <Link
            href="/coursework"
            className="
              inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium
              border border-[#9aa780]/50 text-[#2f6d47] hover:bg-[#e7efdf]
              dark:text-[#b9c6ac] dark:border-[#3b463c] dark:hover:bg-[#2a312b]
            "
          >
            Coursework
          </Link>

          <Link
            href="/writing"
            className="
              inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium
              border border-[#9aa780]/50 text-[#2f6d47] hover:bg-[#e7efdf]
              dark:text-[#b9c6ac] dark:border-[#3b463c] dark:hover:bg-[#2a312b]
            "
          >
            Writing
          </Link>
        </div>
      </section>
    </Container>
  );
}
