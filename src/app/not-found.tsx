import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/shell/footer";
import { Header } from "@/components/shell/header";
import shell from "@/components/shell/shell.module.css";
import pageStyles from "@/components/corporate/corporate.module.css";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <a className={shell.skipLink} href="#content">
        Skip to content
      </a>
      <Header />
      <main id="content" tabIndex={-1} className={shell.main}>
        <div className={pageStyles.page}>
          <Section aria-labelledby="not-found-title">
            <Container>
              <Heading level={1} id="not-found-title">
                Page not found
              </Heading>
              <p className="mt-4 max-w-xl text-lg leading-8">The page you requested is unavailable.</p>
              <Link
                href="/"
                className="mt-6 inline-flex min-h-11 items-center font-semibold text-[color:var(--color-site-accent)] underline underline-offset-4 focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-site-accent)]"
              >
                Return to homepage
              </Link>
            </Container>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}
