import Container from "@/components/Container";

export default function Uses() {
  return (
    <Container title="Coursework" description="Courses I'm currently taking.">
      <div>
        <h1 className="text-4xl font-bold">Coursework</h1>
        <p>
          A list of courses I{"'"}m currently taking (and have taken in the
          past).
        </p>
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
