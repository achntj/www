import Container from "@/components/Container";
import ListLink from "@/components/ListLink";
import NextJSLogo from "@/components/svg/NextJSLogo";
import TailwindLogo from "@/components/svg/TailwindLogo";
import VimLogo from "@/components/svg/VimLogo";
import Tracks from "@/components/top-tracks";

export default function More() {
  return (
    <Container>
      <div className="space-y-8">
        <section>
          <h1 className="text-4xl font-bold">More</h1>
          <p>random stuff about me</p>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-neutral-700">Links</h3>
          <p className="text-neutral-600">my favorite parts of the internet</p>
          <ul className="pl-5 list-disc space-y-2 mt-4">
            <ListLink
              text="If a tree falls in a forest"
              href="https://en.wikipedia.org/wiki/If_a_tree_falls_in_a_forest"
            />
            <ListLink text="My 90s TV" href="https://www.my90stv.com/" />
            <ListLink
              text="Hacker News (YCombinator)"
              href="https://news.ycombinator.com/news"
            />
            <ListLink
              text="103 Bits of Advice I Wish I Had Known"
              href="https://www.my90stv.com/"
            />
            <ListLink text="Typewolf" href="https://www.typewolf.com/" />
            <ListLink
              text="Arts & Letters Daily"
              href="https://www.aldaily.com/"
            />
          </ul>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-neutral-700">Tech Stack</h3>
          <p className="text-neutral-600">my favorite tech </p>
          <div className="flex space-x-8 flex-wrap items-center">
            <a target="_blank" rel="noreferrer" href="https://www.vim.org/">
              <VimLogo />
            </a>
            <a target="_blank" rel="noreferrer" href="https://nextjs.org/">
              <NextJSLogo />
            </a>
            <a target="_blank" rel="noreferrer" href="https://tailwindcss.com/">
              <TailwindLogo />
            </a>
          </div>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-neutral-700">
            Monthly Top 10
          </h3>
          <p className="text-neutral-600">pulled live from Spotify</p>
          <Tracks />
        </section>
      </div>
    </Container>
  );
}
