import type { Metadata } from "next";
import styles from "@/components/editorial/editorial.module.css";
import { PageBanner } from "@/components/corporate/page-banner";
import pageStyles from "@/components/corporate/corporate.module.css";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { applyUrl, careersPage, developmentRobots } from "@/content/editorial";

export const metadata: Metadata = {
  title: careersPage.title,
  description: careersPage.description,
  robots: developmentRobots,
};

export default function CareersPage() {
  return (
    <div className={pageStyles.page}>
      <PageBanner id="careers-banner-title" level={2} title={careersPage.banner.title} image={careersPage.banner.image} />
      <Section aria-labelledby="careers-title">
        <Container>
          <Heading level={1} id="careers-title">
            {careersPage.heading}
          </Heading>
          <Heading level={3} className={styles.lead}>
            {careersPage.subheading}
          </Heading>
          <p className={styles.prose}>{careersPage.intro}</p>
          <div className={styles.pillars}>
            {careersPage.pillars.map((pillar) => (
              <article className={styles.pillar} key={pillar.title}>
                <p className={styles.number}>{pillar.number}</p>
                <Heading level={3}>{pillar.title}</Heading>
                <p>{pillar.body}</p>
              </article>
            ))}
          </div>
          <div className={styles.stats}>
            {careersPage.stats.map((stat) => (
              <p className={styles.stat} key={stat.label}>
                <strong>{`${stat.value}${stat.suffix}`}</strong>
                <span>{stat.label}</span>
              </p>
            ))}
          </div>
        </Container>
      </Section>
      <Section id="join-our-team" aria-labelledby="opportunities-title">
        <Container>
          <div className={styles.opportunities}>
            <Heading level={2} id="opportunities-title" className={pageStyles.accent}>
              {careersPage.opportunities.title}
            </Heading>
            <p className={styles.lead}>{careersPage.opportunities.body}</p>
            <a className={styles.apply} href={applyUrl} target="_blank" rel="noopener noreferrer">
              {careersPage.opportunities.cta}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </Container>
      </Section>
    </div>
  );
}
