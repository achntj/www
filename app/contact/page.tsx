import Container from "@/components/Container";
import ContactForm from "./ContactFormClient";
import { pageMeta } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMeta({
  title: "Contact | Achintya Jha",
  description: "Send me a message!",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Container>
      <section className="text-[#384237] dark:text-[#dfe6d3]">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl leading-tight font-serif font-light">
            Send a note
          </h1>
          <p className="mt-2 text-[#7a8578] dark:text-[#aeb9a6]">
            I&#39;ll get back to you as soon as I can.
          </p>
        </header>

        <ContactForm />
      </section>
    </Container>
  );
}
