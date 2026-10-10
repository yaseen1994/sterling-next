import type { Metadata } from "next";
import { PageBanner } from "@/components/corporate/page-banner";
import styles from "@/components/corporate/corporate.module.css";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { developmentRobots, governancePage } from "@/content/corporate";

export const metadata: Metadata = {
  title: governancePage.title,
  description: governancePage.description,
  robots: developmentRobots,
};

function DocumentLinks({ group }: { group: "policies" | "returns" }) {
  const documents = governancePage.documents.filter((document) => document.group === group);
  return (
    <ul className={styles.documents}>
      {documents.map((document) => (
        <li key={document.href}>
          <a href={document.href} target="_blank" rel="noopener noreferrer">
            {document.label}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function GovernancePage() {
  return (
    <div className={styles.page}>
      <PageBanner
        id="governance-title"
        title={governancePage.banner.title}
        image={governancePage.banner.image}
      />
      <Section aria-labelledby="governance-policies-title">
        <Container>
          <Heading level={2} id="governance-policies-title" className={styles.accent}>
            {governancePage.policiesTitle}
          </Heading>
          <DocumentLinks group="policies" />
        </Container>
      </Section>
      <Section aria-labelledby="governance-returns-title">
        <Container>
          <Heading level={2} id="governance-returns-title" className={styles.accent}>
            {governancePage.returnsTitle}
          </Heading>
          <DocumentLinks group="returns" />
        </Container>
      </Section>
    </div>
  );
}
