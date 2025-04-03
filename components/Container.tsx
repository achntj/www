import HeadContainer from "./HeadContainer";
import { Inter } from "next/font/google"

const font = Inter({ subsets: ["latin"] })

export default function Container({ children, ...pageProps }) {
  return (
    <>
      <HeadContainer
        title={pageProps.title}
        description={pageProps.description}
        image={pageProps.image}
      />
      <div className={`${font.className} flex flex-col sm:ml-64 px-8 sm:px-0 min-h-screen max-h-screen overflow-y-auto`}>
        <div className="sm:overflow-scroll pb-40 sm:pb-20 text-gray-700 flex-grow dark:text-[#a0a0a0] sm:m-8 sm:p-4 sm:rounded-lg sm:dark:bg-neutral-900 sm:bg-[#FBF5E2] dark:bg-opacity-100 sm:border-2 border-[#E2B58A]">
          <div className="max-w-[700px] mx-auto sm:pt-10">{children}</div>
        </div>
      </div>
    </>
  );
}
