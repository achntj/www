import Container from "@/components/Container";
import CustomLink from "@/components/CustomLink";
import Link from "next/link";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Container>
        <header className="text-xl mb-5">
          <h3>
            <Link href="/writing">/writing</Link>
          </h3>
        </header>
        <main className="article space-y-4 leading-loose">{children}</main>
        <div className="flex items-center space-x-4 my-5">
          <span className="border-t border-[color:var(--hairline)] flex-1"></span>
          <span className="text-2xl">§</span>
          <span className="border-t border-[color:var(--hairline)] flex-1"></span>
        </div>
        <p className="my-5 text-xs">
          Written with{" "}
          <CustomLink href="https://mavie.vercel.app/">Mavié</CustomLink>.
        </p>
      </Container>
    </div>
  );
}
