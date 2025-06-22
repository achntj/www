import Container from "@/components/Container";
import CustomLink from "@/components/CustomLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Home() {
  return (
    <Container title="Home">
      {/* Header Section */}
      <section>
        <div className="">
          <h1 className="text-3xl md:text-4xl font-serif font-light text-[#2a4734] leading-tight">
            🪷 Hi, I'm Achintya!{" "}
          </h1>
        </div>

        <p className=" text-[#7B6F63]">
          Welcome to my little digital garden.{" "}
          <span className="text-[#5a7d64] font-light">庭園</span>
        </p>

        <blockquote className="border-l-4 border-[#C3D2B3] pl-4 text-lg md:text-xl italic">
          Small thoughts, slowly gathered.
          <br />
          Left here like stones in a stream.
        </blockquote>

        <div className="leading-loose space-y-4">
          <p>
            I'm currently a junior at Arizona State University, studying
            Computer Science and Economics.
          </p>
          <p>
            Recently, I interned at Epigeneres Biotech, where I worked with
            genetic data to support cancer research — applying machine learning
            and data science to problems in biotech. Here's my{" "}
            <CustomLink href="/Achintya_Jha_Resume.pdf">Resume</CustomLink> and
            {" "}<CustomLink href="/coursework">Coursework</CustomLink>.
          </p>
          <p>
            My most recent research was on <CustomLink href="/MAT_494__Report.pdf">
            Low Light Image Enhancement</CustomLink> under Professor Malena 
            Espanol. We achieved great results with a combination of classical
            and deep learning methods for enhancement.
          </p>
          <p>
            This site holds the in-between: notes I’m shaping, ideas I’m
            chasing, and patterns I haven’t fully named yet.
          </p>
        </div>
      </section>
    </Container>
  );
}

