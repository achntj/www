import Container from "@/components/Container";

import { pageMeta } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMeta({
  title: "Coursework | Achintya Jha",
  description: "Courses I'm currently taking.",
  path: "/coursework",
});

export default function Coursework() {
  return (
    <Container>
      <div>
        <h1>Coursework</h1>
        <p>
          A list of courses I’m currently taking (and have taken in the past).
        </p>

        <h3 className="my-5 text-2xl font-bold">Spring 25</h3>
        <ul className="pl-5 list-disc space-y-2">
          <li>CSE 330: Operating Systems</li>
          <li>CSE 340: Principles of Programming Language</li>
          <li>CSE 445: Distributed Software Developmt</li>
          <li>ECN 313: Intermediate Macroeconomic Theory</li>
          <li>ECN 494: Financial Economics: A High-level Introduction</li>
          <li>MAT 494: Computational Methods for Image Processing</li>
          <li>MAT 343: Applied Linear Algebra</li>
        </ul>
        <h3 className="my-5 text-2xl font-bold">Fall 24</h3>
        <ul className="pl-5 list-disc space-y-2">
          <li>CSE 360: Introduction to Software Engineering</li>
          <li>CSE 365: Information Assurance</li>
          <li>CSE 355: Introduction to Theoretical Computer Science</li>
          <li>CSE 301: Computing Ethics</li>
          <li>ECN 312: Intermediate Microeconomic Theory</li>
          <li>ECN 310: Applied Regression & Data Analytics</li>
          <li>ECN 315: Money and Banking</li>
        </ul>
        <h3 className="my-5 text-2xl font-bold">Spring 24</h3>
        <ul className="pl-5 list-disc space-y-2">
          <li>CSE 310: Data Structures and Algorithms</li>
          <li>STP 420: Introductory Applied Statistic</li>
          <li>CSE 230: Computer Org/Assembly Language Programming</li>
          <li>IEE 380: Prob {"&"} Stats Engr Prob Solving</li>
          <li>BIO 130: Intro to Environmental Science</li>
          <li>ASB 210: Human Sexuality: Anthropological Perspectives</li>
          <li>GPH 381: Geography of Natural Resources</li>
          <li>ECN 211: Macroeconomic Principles</li>
          <li>ECN 212: Microeconomic Principles</li>
        </ul>
        <h3 className="my-5 text-2xl font-bold">Fall 23</h3>
        <ul className="pl-5 list-disc space-y-2">
          <li>CSE 240: Intro to Programming Languages</li>
          <li>CSE 120: Digital Design Fundamentals</li>
          <li>MAT 267: Calculus for Engineers III</li>
          <li>MAT 243: Discrete Math Structures</li>
          <li>BIO 100: The Living World</li>
          <li>TCL 471: Latinos In Hollywood</li>
          <li>PUP 200: Cities in Cinema</li>
        </ul>
        <h3 className="my-5 text-2xl font-bold">Spring 23</h3>
        <ul className="pl-5 list-disc space-y-2">
          <li>CSE 205: Object-Oriented Programming and Data Structures</li>
          <li>MAT 266: Calculus for Engineers II</li>
          <li>ENG 102: First Year Composition</li>
          <li>REL 101: Religion, Culture, Public Life</li>
          <li>SOS 182: Water Planet</li>
          <li>OGL 220: Behavioral Dynamics in Organizations</li>
        </ul>
        <h3 className="my-5 text-2xl font-bold">Fall 22</h3>
        <ul className="pl-5 list-disc space-y-2">
          <li>CSE 110: Principles of Programming</li>
          <li>FSE 100: Introduction to Engineering</li>
          <li>MAT 265: Calculus for Engineers I</li>
          <li>TCL 275: Culture, Language & Learning</li>
          <li>ENG 107: First-Year Composition</li>
        </ul>
      </div>
    </Container>
  );
}
