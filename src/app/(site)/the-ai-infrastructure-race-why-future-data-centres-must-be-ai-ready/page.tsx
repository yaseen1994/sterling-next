import type { Metadata } from "next";
import styles from "@/components/editorial/editorial.module.css";
import pageStyles from "@/components/corporate/corporate.module.css";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { articlePage, developmentRobots } from "@/content/editorial";

export const metadata: Metadata = {
  title: articlePage.title,
  description: articlePage.description,
  robots: developmentRobots,
};

export default function ArticlePage() {
  return (
    <div className={pageStyles.page}>
      <Section aria-labelledby="article-title">
        <Container>
          <article className={styles.article}>
            <Heading level={1} id="article-title">
              {articlePage.heading}
            </Heading>
            <img src={articlePage.image.src} alt={articlePage.image.alt} />
            <div className={styles.prose}>
              {articlePage.paragraphs.map((paragraph, index) => (
                <p className={index === articlePage.paragraphs.length - 1 ? styles.byline : undefined} key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </Container>
      </Section>
    </div>
  );
}
