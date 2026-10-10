import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { impactContent } from "@/content/home";
import { SectionHeading } from "./section-heading";
import styles from "./home.module.css";

export function Impact() {
  return (
    <Section aria-labelledby="impact-title">
      <Container>
        <SectionHeading
          id="impact-title"
          title={impactContent.title}
          subtitle={impactContent.subtitle}
        />
        <dl className={styles.stats}>
          {impactContent.stats.map((stat) => (
            <div key={stat.label}>
              <dt className={styles.statValue}>
                {stat.value}
                <span>{stat.suffix}</span>
              </dt>
              <dd className={styles.statLabel}>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
