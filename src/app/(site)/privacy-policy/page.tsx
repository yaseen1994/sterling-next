import type { Metadata } from "next";
import styles from "@/components/editorial/editorial.module.css";
import { PageBanner } from "@/components/corporate/page-banner";
import pageStyles from "@/components/corporate/corporate.module.css";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { developmentRobots, privacyPage } from "@/content/editorial";

export const metadata: Metadata = {
  title: privacyPage.title,
  description: privacyPage.description,
  robots: developmentRobots,
};

export default function PrivacyPolicyPage() {
  return (
    <div className={pageStyles.page}>
      <PageBanner
        id="privacy-banner-title"
        level={2}
        title={privacyPage.banner.title}
        image={privacyPage.banner.image}
        mobileImage={privacyPage.banner.mobileImage}
      />
      <Section aria-labelledby="privacy-title">
        <Container>
          <Heading level={1} id="privacy-title">
            {privacyPage.heading}
          </Heading>
          <div className={styles.disclosures}>
            {privacyPage.sections.map((section) => (
              <details className={styles.disclosure} key={section.title}>
                <summary>{section.title}</summary>
                {section.blocks.map((block) => {
                  if (block.kind === "list") {
                    return (
                      <div key={block.intro}>
                        <p>{block.intro}</p>
                        <ul>
                          {block.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  }
                  if (block.kind === "email") {
                    return (
                      <p key={block.email}>
                        {block.text}
                        <br />
                        <a href={`mailto:${block.email}`}>{block.email}</a>
                      </p>
                    );
                  }
                  return block.text.map((paragraph) => <p key={paragraph}>{paragraph}</p>);
                })}
              </details>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
