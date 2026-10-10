import type { Metadata } from "next";
import { YearFilter } from "@/components/editorial/year-filter";
import styles from "@/components/editorial/editorial.module.css";
import { PageBanner } from "@/components/corporate/page-banner";
import pageStyles from "@/components/corporate/corporate.module.css";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { developmentRobots, newsPage, yearsFor } from "@/content/editorial";

export const metadata: Metadata = {
  title: newsPage.title,
  description: newsPage.description,
  robots: developmentRobots,
};

export default function NewsPage() {
  return (
    <div className={pageStyles.page}>
      <PageBanner id="news-banner-title" level={1} size={2} title={newsPage.banner.title} image={newsPage.banner.image} />
      <Section aria-label="News sections">
        <Container>
          <ul className={styles.sectionNav}>
            {newsPage.sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.title}</a>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      {newsPage.sections.map((section) => (
        <Section id={section.id} key={section.id} aria-labelledby={`${section.id}-title`}>
          <Container>
            <Heading level={2} id={`${section.id}-title`} className={pageStyles.accent}>
              {section.title}
            </Heading>
            <YearFilter label={section.title} years={yearsFor(section.items)} items={section.items} />
          </Container>
        </Section>
      ))}
    </div>
  );
}
