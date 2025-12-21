import Link from "next/link";
import Container from "@/components/Container";
import CustomLink from "@/components/CustomLink";
import NowPlaying from "@/components/now-playing";
import Tracks from "@/components/top-tracks";
import NextJSLogo from "@/components/svg/NextJSLogo";
import TailwindLogo from "@/components/svg/TailwindLogo";
import VimLogo from "@/components/svg/VimLogo";
import { pageMeta } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMeta({
  title: "Digital Garden | Achintya Jha",
  description:
    "Welcome to my working notebook—part essay stash, part odds-and-ends drawer, plus this month's Spotify top 10.",
  path: "/garden",
});

export default function Garden() {
  return (
    <Container>
      <h1 className="text-3xl md:text-4xl leading-tight font-serif font-medium tracking-[0.04em]">
        Digital Garden
      </h1>

      <p className="mb-4">
        Welcome to my working notebook—part essay stash, part odds-and-ends
        drawer, plus this month's Spotify top 10.
      </p>

      <h2 className="text-2xl font-semibold tracking-[0.03em] mt-8 mb-3">
        Recommended Notes
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <CustomLink href="/writing/old-tech">
            Why older technology still feels so right
          </CustomLink>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Random Stuff about me
      </h2>
      <section className="space-y-6 leading-loose">
        <div>
          <p>
            I am currently exploring my interests in design, quantitative
            finance, and computer science. My work is a blend of these
            disciplines - I use this website and other projects to refine my
            skills.
          </p>
        </div>
        <div>
          <p>
            I also write movie reviews sometimes, you can find them{" "}
            <CustomLink href="https://movies.achintyajha.com">here</CustomLink>.
          </p>
        </div>
        <div>
          <p>
            I built this Spotify tracker in high school to track my last played
            and top tracks—been meaning to take it down for about three years
            now.
          </p>
          <br />
          <NowPlaying />
          <p className="mt-8 mb-5">
            My monthly top 10, pulled live from Spotify.
          </p>
          <Tracks />
        </div>

        <div>
          <h3 className="text-xl font-semibold tracking-[0.025em]">
            Some Links
          </h3>
          <p>My favorite parts of the internet:</p>
          <ul className="pl-5 list-disc space-y-2 mt-4">
            <li>
              <CustomLink href="https://en.wikipedia.org/wiki/If_a_tree_falls_in_a_forest">
                If a tree falls in a forest
              </CustomLink>
            </li>
            <li>
              <CustomLink href="https://90s.myretrotvs.com">
                My 90s TV
              </CustomLink>
            </li>
            <li>
              <CustomLink href="https://kk.org/thetechnium/103-bits-of-advice-i-wish-i-had-known/">
                103 Bits of Advice I Wish I Had Known
              </CustomLink>
            </li>
            <li>
              <CustomLink href="https://www.typewolf.com/">Typewolf</CustomLink>
            </li>
            <li>
              <CustomLink href="http://www.unnecessaryquotes.com/">
                Unnecessary Quotes
              </CustomLink>
            </li>
            <li>
              <CustomLink href="https://onethingwell.org/">
                One Thing Well
              </CustomLink>
            </li>
            <li>
              <CustomLink href="https://sabrinas.space/">
                Sabrina's Space
              </CustomLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Tech Stack</h3>
          <p>My favorite tech:</p>
          <div className="flex space-x-8 flex-wrap items-center mt-2 mb-4">
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
          <p>
            Here are my{" "}
            <CustomLink href="https://github.com/achntj/dotfiles/">
              Dotfiles
            </CustomLink>
            .
          </p>
        </div>
      </section>
    </Container>
  );
}
