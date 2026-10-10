import type { Metadata } from "next";
import { PageBanner } from "@/components/corporate/page-banner";
import styles from "@/components/corporate/corporate.module.css";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { awardsPage, developmentRobots } from "@/content/corporate";

export const metadata: Metadata = {
  title: awardsPage.title,
  description: awardsPage.description,
  robots: developmentRobots,
};

export default function AwardsPage() {
  return (
    <div className={styles.page}>
      <PageBanner
        id="awards-page-title"
        title={awardsPage.banner.title}
        image={awardsPage.banner.image}
        mobileImage={awardsPage.banner.mobileImage}
      />
      <Section aria-labelledby="awards-page-title">
        <Container>
          <div className={styles.awards}>
            {awardsPage.items.map((item) => (
              <figure className={styles.award} key={item.image}>
                <img src={item.image} alt="" />
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
