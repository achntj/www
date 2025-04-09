import HeadContainer from "./HeadContainer"

export default function Container({ children, ...pageProps }) {
  return (
    <>
      <HeadContainer title={pageProps.title} description={pageProps.description} image={pageProps.image} />
      <div className="relative h-full md:h-fit w-full">
        <div className="max-w-[700px] mx-auto py-4">{children}</div>
      </div>
    </>
  )
}

