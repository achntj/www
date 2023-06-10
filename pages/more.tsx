import Container from "@/components/Container";
import NextJSLogo from "@/components/svg/NextJSLogo";
import TailwindLogo from "@/components/svg/TailwindLogo";
import VimLogo from "@/components/svg/VimLogo";
import Tracks from "@/components/top-tracks";

export default function More() {
  return (
    <Container>
      <div className="space-y-4">
        <section>
          <h1 className="text-4xl font-bold">More</h1>
          <p>random stuff about me</p>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-neutral-700">Links</h3>
          <p className="text-neutral-600">my favorite parts of the internet</p>
          <ul className="pl-5 list-disc space-y-2 mt-4">
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                className="text-emerald-600 hover:text-emerald-800"
                href="https://www.my90stv.com/"
              >
                My 90s TV
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                className="text-emerald-600 hover:text-emerald-800"
                href="https://news.ycombinator.com/news"
              >
                Hacker News (YCombinator)
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                className="text-emerald-600 hover:text-emerald-800"
                href="https://kk.org/thetechnium/103-bits-of-advice-i-wish-i-had-known/"
              >
                103 Bits of Advice I Wish I Had Known
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                className="text-emerald-600 hover:text-emerald-800"
                href="https://www.typewolf.com/"
              >
                Typewolf
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                className="text-emerald-600 hover:text-emerald-800"
                href="https://www.aldaily.com/"
              >
                Arts & Letters Daily
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h3 className="text-2xl font-bold text-neutral-700">Tech Stack</h3>
          <p className="text-neutral-600">
            my favorite tech from the entire stack
          </p>
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
