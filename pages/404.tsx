import Container from "@/components/Container";
import CustomLink from "@/components/CustomLink";
import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Container>
        <h1>404 - Page Not Found</h1>
        <p className="text-xl my-5">
          That page doesn&lsquo;t exist. You can try again by going{" "}
          <CustomLink href="/">back to the homepage</CustomLink>.
        </p>
        <img className="my-10 w-[400px]" src="/404.gif" alt="Error Image" />
      </Container>
    </>
  );
}
