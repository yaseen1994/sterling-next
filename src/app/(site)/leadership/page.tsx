import type { Metadata } from "next";
import { PageBanner } from "@/components/corporate/page-banner";
import styles from "@/components/corporate/corporate.module.css";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { developmentRobots, leadershipPage } from "@/content/corporate";

export const metadata: Metadata = {
  title: leadershipPage.title,
  description: leadershipPage.description,
  robots: developmentRobots,
};

export default function LeadershipPage() {
  return (
    <div className={styles.page}>
      <PageBanner id="leadership-title" title={leadershipPage.banner.title} image={leadershipPage.banner.image} />
      <Section aria-labelledby="leadership-title">
        <Container>
          <div className={styles.profiles}>
            {leadershipPage.people.map((person) => (
              <article className={styles.profile} id={person.id} key={person.id}>
                <img src={person.image} alt="" />
                <Heading level={2}>{person.name}</Heading>
                <p className={styles.role}>{person.role}</p>
                <details>
                  <summary>View profile</summary>
                  {person.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </details>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
