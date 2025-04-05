import HeadContainer from "./HeadContainer";
import Image from "next/image";


export default function Container({ children, ...pageProps }) {
  return (
    <>
      <HeadContainer
        title={pageProps.title}
        description={pageProps.description}
        image={pageProps.image}
      />
      <div className="relative h-full w-full">
      {/* Decorative images that stay fixed */}
      <div className="hidden xl:block absolute top-0 left-0 z-10 pointer-events-none">
        <Image src="/vines.png" alt="Decorative flower" width={100} height={100} className="opacity-80" />
      </div>

      <div className="hidden xl:block absolute bottom-0 right-0 z-10 pointer-events-none">
        <Image src="/tree.png" alt="Decorative tree" width={100} height={100} className="opacity-80" />
      </div>

      {/* Scrollable content */}
      <div className="h-full overflow-auto max-w-[700px] mx-auto py-4">{children}</div>
    </div>
    </>
  );
}
