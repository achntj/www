import { Poppins } from "next/font/google";
// Noto_Serif_Georgian is also nice
import HeadContainer from "./HeadContainer";
import Nav from "./Nav";
import { motion } from "framer-motion";

const font = Poppins({ weight: "400", subsets: ["latin"] });
export default function Container({ children, ...pageProps }) {
  return (
    <>
      <HeadContainer
        title={pageProps.title}
        description={pageProps.description}
        image={pageProps.image}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`${font.className}`}
      >
        <div className="mb-10">
          <Nav />
        </div>
        {children}
      </motion.div>
    </>
  );
}
