import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { awardsContent } from "@/content/home";
import { Carousel } from "./carousel";
import { SectionHeading } from "./section-heading";
import styles from "./home.module.css";

export function Awards() {
  return (
    <Section aria-labelledby="awards-title">
      <Container>
        <SectionHeading
          id="awards-title"
          title={awardsContent.title}
          subtitle={awardsContent.subtitle}
        />
        <div className="mt-8">
          <Carousel label="Awards and recognitions">
            {awardsContent.items.map((award) => (
              <a className={styles.awardCard} href={award.href} key={award.href}>
                <img
                  src={award.image}
                  alt={award.alt}
                  width={award.width}
                  height={award.height}
                />
              </a>
            ))}
          </Carousel>
        </div>
        <Link className={styles.textLink} href={awardsContent.cta.href}>
          {awardsContent.cta.label}
        </Link>
      </Container>
    </Section>
  );
}
