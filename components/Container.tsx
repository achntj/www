import HeadContainer from "./HeadContainer"

export default function Container({ children, ...pageProps }) {
  return (
    <>
      <HeadContainer title={pageProps.title} description={pageProps.description} image={pageProps.image} />
      <div className="relative h-full w-full">
        <div className="h-full md:h-fit max-w-[700px] mx-auto py-4">{children}</div>
      </div>
    </>
  )
}

