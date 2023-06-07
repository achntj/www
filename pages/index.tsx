import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
// Noto_Serif_Georgian is also nice

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`flex flex-col gap-6 ${inter.className}`}>
      <p>
        Achintya Jha is a Tempe, Arizona based Software Engineer interested in
        creating beautiful software experiences.
      </p>
      <p>
        He's currently an intern at Nucleus Software working on financial
        software & chatbots.
      </p>
      <p>
        Previously, he was a Machine Learning Intern at <a>Tech Mahindra</a>,
        and a Data Science Intern at Walmart Labs.
      </p>
      <p>
        He is currently a sophomore pursuing a Bachelor of Science in Computer
        Science, at Arizona State University.
      </p>
      <section className="flex space-x-4">
        <a
          target="_blank"
          rel="noopener noreferrer external"
          className=" hover:underline"
          href="https://achintyajha.com/resume.pdf"
        >
          <span>Résumé</span>{" "}
        </a>
        <p>&bull;</p>
        <a
          target="_blank"
          rel="noopener noreferrer external"
          className=" hover:underline flex items-center"
          href="https://garden.achntj.com"
        >
          <span>Digital Garden</span>{" "}
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
        </a>
      </section>
      <div className="border border-dashed border-neutral-400" />
      <section className="sm:flex justify-between space-y-8">
        <ul className="text-md">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer external"
              className=" hover:underline"
              href="https://github.com/achntj"
            >
              <span>GitHub:</span>{" "}
              <span className="opacity-70 group-hover:underline">@achntj</span>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer external"
              className=" hover:underline"
              href="https://linkedin.com/in/achntj"
            >
              <span>LinkedIn:</span>{" "}
              <span className="opacity-70 group-hover:underline">@achntj</span>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer external"
              className=" hover:underline"
              href="https://twitter.com/achntj"
            >
              <span>Twitter:</span>{" "}
              <span className="opacity-70 group-hover:underline">@achntj</span>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a
              className="bg-amber-200 p-2 hover:underline"
              href="mailto:achntj@gmail.com"
            >
              <span>Email</span>{" "}
              <span className="opacity-70 group-hover:underline">
                achntj@gmail.com
              </span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
