import { Poppins } from "next/font/google";
// Noto_Serif_Georgian is also nice
import HeadContainer from "./HeadContainer";
import Nav from "./Nav";

const font = Poppins({ weight: "400", subsets: ["latin"] });
export default function Container({ children, ...pageProps }) {
  return (
    <>
      <HeadContainer
        title={pageProps.title}
        description={pageProps.description}
        image={pageProps.image}
      />
      <div className={`${font.className}`}>
        <div className="mb-10">
          <Nav />
        </div>
        {children}
      </div>
    </>
  );
}
