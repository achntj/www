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
      <section className="text-[color:var(--ink)] dark:text-[color:var(--ink)]">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl leading-tight font-serif font-medium tracking-[0.04em]">
            Send a note
          </h1>
          <p className="mt-2 type-subhead text-[color:var(--soft-ink)] dark:text-[color:var(--soft-ink)]">
            I&#39;ll get back to you as soon as I can.
          </p>
        </header>

        <ContactForm />
      </section>
    </Container>
  );
}
