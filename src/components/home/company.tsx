import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { companyContent } from "@/content/home";
import { SectionHeading } from "./section-heading";
import styles from "./home.module.css";

export function Company() {
  return (
    <Section
      tone="dark"
      aria-labelledby="company-title"
      className={styles.company}
      style={{ backgroundImage: `url(${companyContent.image})` }}
    >
      <div className={styles.shade} />
      <Container>
        <div className={styles.companyGrid}>
          <div>
            <SectionHeading
              id="company-title"
              title={companyContent.title}
              subtitle={companyContent.subtitle}
              tone="dark"
            />
            <p>{companyContent.body}</p>
            <Link className={`${styles.textLink} ${styles.filled}`} href={companyContent.cta.href}>
              {companyContent.cta.label}
            </Link>
          </div>
          <iframe
            className={styles.frame}
            src={`https://www.youtube-nocookie.com/embed/${companyContent.videoId}?rel=0`}
            title={companyContent.videoTitle}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </Container>
    </Section>
  );
}
