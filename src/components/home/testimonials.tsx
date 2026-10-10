import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { testimonialsContent } from "@/content/home";
import { SectionHeading } from "./section-heading";
import styles from "./home.module.css";

export function Testimonials() {
  return (
    <Section
      tone="dark"
      aria-labelledby="testimonials-title"
      className={styles.testimonials}
      style={{ backgroundImage: `url(${testimonialsContent.image})` }}
    >
      <div className={styles.shade} />
      <Container>
        <div className={styles.testimonialGrid}>
          <SectionHeading
            id="testimonials-title"
            title={testimonialsContent.title}
            subtitle={testimonialsContent.subtitle}
            tone="dark"
          />
          <iframe
            className={styles.frame}
            src={`https://www.youtube-nocookie.com/embed/${testimonialsContent.videoId}?rel=0`}
            title={testimonialsContent.videoTitle}
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
