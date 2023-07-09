import Link from "next/link";
import Container from "@/components/Container";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      name: "SentiMate",
      url: "https://sentimate.org",
      desc: "A Natural Language Processing and Machine Learning model that is capable of using text for detecting depression. (Now Archived)",
      color: "#7b61ff",
      stack: ["Flask", "SciKit Learn", "Pandas", "SCSS", "Jekyll"],
    },
    {
      name: "Pandora’s Box",
      url: "https://pandora.achntj.com",
      desc: "A web data store for all your thoughts, pending tasks, and ideas.",
      color: "#f24822",
      stack: ["Next.JS", "TypeScript", "PostGres", "Prisma", "TailwindCSS"],
    },
    {
      name: "PetiteURL",
      url: "https://go.achntj.com/",
      desc: "Free to use URL Shortener with custom slugs.",
      color: "#00b5ce",
      stack: ["Next.JS", "TypeScript", "PostGres", "Prisma", "TailwindCSS"],
    },
    {
      name: "DOTC Website",
      url: "https://dikshaoracle.com",
      desc: "Official Website for an oracle & SQL training company. Includes a native content-editing dashboard.",
      color: "#a868fc",
      stack: ["Next.JS", "TypeScript", "PostGres", "Prisma", "TailwindCSS"],
    },
    {
      name: "StuClan",
      url: "https://talk.sentimate.org",
      desc: "A micro-blogging web-app primarily designed for helping out students solve problems related to mental health and educational-stress.",
      color: "#18a0fb",
      stack: ["React", "Firebase"],
    },
    {
      name: "Zsh Guide",
      url: "https://zshguide.vercel.app/",
      desc: "This project is a cleaner mirror of Peter Stephenson’s Zsh Guide. So far, I’ve single-handedly ported & redesigned the Official Zsh Guide.",
      color: "#f2bd00",
      stack: ["Next.JS", "TypeScript", "Contentlayer", "MDX", "TailwindCSS"],
    },
    {
      name: "Dynote",
      url: "https://dynote.vercel.app/",
      desc: "A No-Code noting-taking app in your browser.",
      color: "#3486eb",
      stack: ["Next.JS", "TypeScript", "PostGres", "Prisma", "TailwindCSS"],
    },
    {
      name: "Wordle Clone",
      url: "https://github.com/achntj/wordle/",
      desc: "A (not nearly as interactive) clone of the popular game Wordle. Written in python.",
      color: "#1bc47d",
      stack: ["Python", "Flask"],
    },
    {
      name: "Climate Crew",
      url: "https://climate-crew.netlify.app/",
      desc: `[National Winner - NASA Space Apps 2020]\nThis website features self-authored unique stories, from our team, that provide a historical as well as mythological perspective to Climate.`,
      color: "#f97f0f",
      stack: ["Hugo", "Golang", "HTML", "SCSS"],
    },
    {
      name: "Auto SNAKE",
      url: "https://www.youtube.com/watch?v=wyFxc-_l1jQ",
      desc: "A reinforcement learning model that uses Deep Q-Learning to learn to play “Snake”.",
      color: "#ee46d3",
      stack: ["Python", "Pytorch", "PyGame"],
    },
  ];
  return (
    <Container>
      <h1 className="mb-10">Projects</h1>
      <div>
        {projects.map(
          (project) =>
            project.url && (
              <div key={project.name}>
                <a target="_blank" rel="noreferrer" href={project.url}>
                  {/* tailwind custom bg class does not work when used with template literals. Workaround - Use html style for the moment*/}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col justify-between p-5 my-2 rounded-[40px] mb-8 group dark:!bg-neutral-900"
                    style={{ backgroundColor: `${project.color}` }}
                  >
                    <h3 className={"text-white"}>
                      {project.name}
                      <div className="sm:hidden inline-block">
                        <svg
                          className="text-white dark:text-neutral-400 ml-2"
                          width="20"
                          height="20"
                          viewBox="0 0 28 16"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8.46492 20.535C6.44276 20.535 4.6197 19.3169 3.84572 17.4487C3.07175 15.5805 3.49925 13.4301 4.92892 12L7.05092 9.87799L8.46492 11.292L6.34392 13.413C5.58598 14.1709 5.28997 15.2756 5.5674 16.311C5.84482 17.3464 6.65354 18.1551 7.6889 18.4325C8.72426 18.7099 9.82898 18.4139 10.5869 17.656L12.7079 15.535L14.1219 16.95L12.0009 19.071C11.065 20.0115 9.79178 20.5387 8.46492 20.535ZM9.17192 16.242L7.75792 14.828L14.8289 7.75699L16.2429 9.17099L9.17292 16.241L9.17192 16.242ZM16.9509 14.121L15.5359 12.707L17.6569 10.586C18.4252 9.83032 18.7291 8.72065 18.4532 7.67897C18.1772 6.63729 17.3637 5.82364 16.3221 5.54743C15.2805 5.27123 14.1708 5.57491 13.4149 6.34299L11.2929 8.46399L9.87892 7.04999L12.0009 4.92799C13.956 2.98996 17.1099 2.99686 19.0565 4.94344C21.0031 6.89002 21.01 10.0439 19.0719 11.999L16.9509 14.12V14.121Z"></path>
                        </svg>
                      </div>
                    </h3>
                    {/* <p className="text-rose-500">{project.stack}</p> */}
                    <p className="text-neutral-100 font-normal whitespace-pre-line dark:text-neutral-400">
                      {project.desc}
                    </p>
                    <div
                      className="p-2 text-white w-fit sm:grid hidden"
                      style={{ clipPath: "inset(0 0 0 0 )" }}
                    >
                      <div className="[grid-area:1/1] flex items-center justify-center h-10 w-10 transition ease-in-out group-hover:delay-200 translate-y-10 -translate-x-10 group-hover:translate-y-0 group-hover:translate-x-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </div>
                      <div className="[grid-area:1/1] flex items-center justify-center h-10 w-10 transition ease-in-out delay-200 group-hover:delay-[0s] duration-300 group-hover:-translate-y-10 group-hover:translate-x-10">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </a>
              </div>
            )
        )}
      </div>
    </Container>
  );
}
