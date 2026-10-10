import type { Metadata } from "next";
import styles from "@/components/editorial/careers.module.css";
import pageStyles from "@/components/corporate/corporate.module.css";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { applyUrl, careersPage, developmentRobots } from "@/content/editorial";

const opportunitiesImage = "/assets/images/careers-team-opportunities.png";

export const metadata: Metadata = {
  title: careersPage.title,
  description: careersPage.description,
  robots: developmentRobots,
};

export default function CareersPage() {
  return (
    <div className={pageStyles.page}>
      <header className={styles.hero}>
        <img className={styles.heroImage} src={careersPage.banner.image} alt="" />
        <div className={styles.heroShade} aria-hidden="true" />
        <Container className={styles.heroInner}>
          <Heading level={2} id="careers-banner-title">
            {careersPage.banner.title}
          </Heading>
        </Container>
      </header>
      <section className={styles.life} aria-labelledby="careers-title">
        <Container>
          <div className={styles.rule} aria-hidden="true" />
          <Heading level={1} id="careers-title">
            {careersPage.heading}
          </Heading>
          <Heading level={3} className={styles.sub}>
            {careersPage.subheading}
          </Heading>
          <p className={styles.intro}>{careersPage.intro}</p>
          <div className={styles.pillars}>
            {careersPage.pillars.map((pillar) => (
              <article className={styles.pillar} key={pillar.title}>
                <p className={styles.badge}>{pillar.number}</p>
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
      </section>
      <section className={styles.opportunities} id="join-our-team" aria-labelledby="opportunities-title">
        <Container>
          <div className={styles.oppLayout}>
            <img className={styles.oppPhoto} src={opportunitiesImage} alt="" />
            <div className={styles.oppCopy}>
              <Heading level={2} id="opportunities-title">
                {careersPage.opportunities.title}
              </Heading>
              <p>{careersPage.opportunities.body}</p>
              <a className={styles.apply} href={applyUrl} target="_blank" rel="noopener noreferrer">
                {careersPage.opportunities.cta}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
