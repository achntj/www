import Container from "@/components/Container";
import CustomLink from "@/components/CustomLink";
import NowPlaying from "@/components/now-playing";
import NextJSLogo from "@/components/svg/NextJSLogo";
import TailwindLogo from "@/components/svg/TailwindLogo";
import VimLogo from "@/components/svg/VimLogo";
import Tracks from "@/components/top-tracks";

export default function More() {
  return (
    <Container>
      <div className="space-y-8 leading-loose">
        <section>
          <h1>More</h1>
          <p>random stuff about me</p>
        </section>
        <section>
          <h3>About Me</h3>
          <p>
            {" "}
            I’m currently working on developing ML and data processing pipelines
            at a Biotech company. My latest personal project is{" "}
            <CustomLink href="https://pandora.achntj.com/">
              Pandora’s Box
            </CustomLink>{" "}
            which is a place to write all your thoughts, accessible from
            anywhere. Apart from that, I do have a ton of other projects which
            you can find on <CustomLink href="/projects">/Projects</CustomLink>.
          </p>
          <p>
            I also write movie reviews sometimes, you can find them{" "}
            <CustomLink href="https://movies.achntj.com">here</CustomLink>.
          </p>
        </section>
        <section>
          <h3>Music</h3>
          <NowPlaying />
          <p className="mt-8 mb-5">
            My monthly top 10, pulled live from Spotify
          </p>
          <Tracks />
        </section>
        <section>
          <h3>Links</h3>
          <p>my favorite parts of the internet</p>
          <ul className="pl-5 list-disc space-y-2 mt-4">
            <li>
              <CustomLink href="https://en.wikipedia.org/wiki/If_a_tree_falls_in_a_forest">
                If a tree falls in a forest
              </CustomLink>
            </li>
            <li>
              <CustomLink href="https://www.my90stv.com/">My 90s TV</CustomLink>
            </li>
            <li>
              <CustomLink href="https://news.ycombinator.com/news">
                Hacker News (YCombinator)
              </CustomLink>
            </li>
            <li>
              <CustomLink href="https://www.my90stv.com/">
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
                Sabrina’s Space
              </CustomLink>
            </li>
          </ul>
        </section>
        <section>
          <h3>Tech Stack</h3>
          <p>my favorite tech </p>
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
          <p>
            Here are my{" "}
            <CustomLink href="https://github.com/achntj/dotfiles/">
              Dotfiles
            </CustomLink>
            .
          </p>
        </section>
      </div>
    </Container>
  );
}
