import type { Metadata } from "next";
import Link from "next/link";
import { PageBanner } from "@/components/corporate/page-banner";
import styles from "@/components/corporate/corporate.module.css";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { developmentRobots, membershipsPage } from "@/content/corporate";

export const metadata: Metadata = {
  title: membershipsPage.title,
  description: membershipsPage.description,
  robots: developmentRobots,
};

export default function MembershipsPage() {
  return (
    <div className={styles.page}>
      <PageBanner
        id="memberships-title"
        title={membershipsPage.banner.title}
        image={membershipsPage.banner.image}
      />
      <Section aria-labelledby="memberships-intro-title">
        <Container>
          <Heading level={2} id="memberships-intro-title" className={styles.accent}>
            {membershipsPage.intro.title}
          </Heading>
          <p className={styles.closing}>{membershipsPage.intro.body}</p>
        </Container>
      </Section>
      <Section aria-labelledby="memberships-ambassador-title">
        <Container>
          <Heading level={2} id="memberships-ambassador-title" className={styles.accent}>
            {membershipsPage.ambassador.title}
          </Heading>
          <p className={styles.closing}>{membershipsPage.ambassador.body}</p>
          <article className={`${styles.ambassador} mt-8`}>
            <img src={membershipsPage.ambassador.image} alt="" />
            <Heading level={2}>{membershipsPage.ambassador.name}</Heading>
            <p className={styles.role}>{membershipsPage.ambassador.role}</p>
            <Link className={styles.profileLink} href={membershipsPage.ambassador.profileHref}>
              {membershipsPage.ambassador.profileLabel}
            </Link>
          </article>
        </Container>
      </Section>
      <Section aria-labelledby="memberships-list-title">
        <Container>
          <Heading level={2} id="memberships-list-title" className={styles.accent}>
            {membershipsPage.membershipsTitle}
          </Heading>
          <p className={styles.closing}>{membershipsPage.membershipsIntro}</p>
          <div className={`${styles.memberships} mt-8`}>
            {membershipsPage.items.map((item) => (
              <article className={styles.membership} key={item.title}>
                <img src={item.image} alt="" />
                <Heading level={2}>{item.title}</Heading>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <p className={styles.closing}>{membershipsPage.closing}</p>
        </Container>
      </Section>
    </div>
  );
}
