import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { presenceContent } from "@/content/home";
import { SectionHeading } from "./section-heading";
import styles from "./home.module.css";

export function Presence() {
  return (
    <Section aria-labelledby="presence-title">
      <Container>
        <SectionHeading
          id="presence-title"
          title={presenceContent.title}
          subtitle={presenceContent.subtitle}
        />
        <picture>
          <source media="(max-width: 47.99rem)" srcSet={presenceContent.mobile.src} />
          <img
            className={styles.map}
            src={presenceContent.desktop.src}
            alt={presenceContent.alt}
            width={presenceContent.desktop.width}
            height={presenceContent.desktop.height}
          />
        </picture>
      </Container>
    </Section>
  );
}
