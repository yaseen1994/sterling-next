import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { LinkButton } from "@/components/ui/button";
import { DemoControls } from "./demo-controls";

export const metadata: Metadata = {
  title: "Design system development demonstration",
  robots: { index: false, follow: false },
};

export default function DesignSystem() {
  return (
    <main className="min-h-screen bg-site-surface font-site text-site-text">
      <Section aria-labelledby="demo-title">
        <Container data-primitive="container">
          <p className="mb-4 text-sm">Development demonstration</p>
          <Heading level={1} id="demo-title" className="text-site-ink">
            Reference visual foundation
          </Heading>
          <p className="mt-6 max-w-3xl text-site-body">
            Colors, measurements and outline controls derived from the
            reference. System fonts are temporary; this is not the client
            homepage or a claim of visual parity.
          </p>
        </Container>
      </Section>

      <Section aria-labelledby="tokens-title" className="pt-0">
        <Container>
          <div aria-hidden="true" className="mb-4 h-1.5 w-22 bg-site-accent" />
          <Heading level={2} id="tokens-title" className="text-site-accent">
            Colors and typography
          </Heading>
          <dl className="mt-8 grid grid-cols-1 gap-site-gap sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <dt className="font-semibold">Accent · #F15A22</dt>
              <dd className="mt-3 h-8 bg-site-accent" aria-label="Orange accent" />
            </div>
            <div>
              <dt className="font-semibold">Text · #454545</dt>
              <dd className="mt-3 h-8 bg-site-text" aria-label="Dark gray text" />
            </div>
            <div>
              <dt className="font-semibold">Dark surface · #231F20</dt>
              <dd className="mt-3 h-8 bg-site-dark" aria-label="Dark surface" />
            </div>
          </dl>
          <Heading level={3} className="mt-8 text-site-ink">
            Subheading sample
          </Heading>
          <p className="mt-4 max-w-3xl text-site-body">
            Body text uses a readable temporary system-font fallback. Container
            gutters and headings respond to the viewport; precise page layouts
            will be checked during their migration.
          </p>
        </Container>
      </Section>

      <Section aria-labelledby="controls-title">
        <Container>
          <Heading level={2} id="controls-title" className="text-site-ink">
            Native controls
          </Heading>
          <p className="mb-6 mt-4 max-w-3xl text-site-body">
            Use Tab to see focus, Enter or Space to activate the button, and
            Enter to follow the link. The disabled button is outside the tab
            sequence.
          </p>
          <DemoControls />
        </Container>
      </Section>

      <Section tone="dark" id="inverse" aria-labelledby="inverse-title">
        <Container>
          <Heading level={2} id="inverse-title">Inverse surface</Heading>
          <p className="mb-6 mt-4 max-w-3xl text-site-body">
            White text and an outlined navigation link on the measured dark
            reference surface, without importing logos or media.
          </p>
          <LinkButton href="/">Return to development homepage</LinkButton>
        </Container>
      </Section>
    </main>
  );
}
