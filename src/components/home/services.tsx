import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { servicesContent } from "@/content/home";
import { ServiceGlyph } from "./icons";
import { SectionHeading } from "./section-heading";
import styles from "./home.module.css";

export function Services() {
  return (
    <Section aria-labelledby="services-title">
      <Container>
        <SectionHeading
          id="services-title"
          title={servicesContent.title}
          subtitle={servicesContent.subtitle}
        />
        <div className={styles.serviceGrid}>
          {servicesContent.items.map((item) => (
            <article className={styles.card} key={item.href}>
              <span className={styles.orb} aria-hidden="true" />
              <span className={styles.iconWrap}>
                <ServiceGlyph name={item.icon} />
              </span>
              <h2 className={styles.cardTitle}>{item.title}</h2>
              <div className={styles.description}>
                <p>{item.body}</p>
                <Link className={styles.cardLink} href={item.href}>
                  Know more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
