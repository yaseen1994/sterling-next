import type { Metadata } from "next";
import { PageBanner } from "@/components/corporate/page-banner";
import styles from "@/components/corporate/corporate.module.css";
import { Carousel } from "@/components/home/carousel";
import { LinkButton } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { aboutPage, developmentRobots } from "@/content/corporate";

export const metadata: Metadata = {
  title: aboutPage.title,
  description: aboutPage.description,
  robots: developmentRobots,
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <PageBanner
        id="about-title"
        title={aboutPage.banner.title}
        image={aboutPage.banner.image}
        variant="tall"
      />
      <Section aria-labelledby="about-intro-title">
        <Container>
          <div className={styles.split}>
            <Heading level={2} id="about-intro-title" className={styles.introTitle}>
              {aboutPage.intro.title}
            </Heading>
            <div>
              {aboutPage.intro.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <details className={styles.more}>
                <summary>{aboutPage.intro.moreLabel}</summary>
                <ul>
                  {aboutPage.intro.more.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </details>
              <iframe
                className={styles.frame}
                src={`https://www.youtube-nocookie.com/embed/${aboutPage.video.id}?rel=0`}
                title={aboutPage.video.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </Container>
      </Section>
      <section className={styles.difference} aria-labelledby="about-difference-title">
        <Container>
          <Heading level={2} id="about-difference-title" className={styles.differenceTitle}>
            {aboutPage.difference.title}
          </Heading>
          <div className={styles.differenceGrid}>
            {aboutPage.difference.items.map((item) => (
              <article className={styles.differenceCard} key={item.title}>
                <img src={item.image} alt="" />
                <Heading level={3}>{item.title}</Heading>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className={styles.hsse} aria-labelledby="about-hsse-title">
        <Container>
          <div className={styles.hsseLayout}>
            <div>
              <Heading level={2} id="about-hsse-title" className={styles.hsseTitle}>
                {aboutPage.hsse.title}
              </Heading>
              <Heading level={3} className={styles.hsseSubtitle}>
                {aboutPage.hsse.subtitle}
              </Heading>
              {aboutPage.hsse.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <Carousel label="HSSE gallery">
              {aboutPage.hsse.images.map((image, index) => (
                <div className={styles.hsseSlide} key={image}>
                  <img src={image} alt={`HSSE gallery image ${index + 1}`} />
                </div>
              ))}
            </Carousel>
          </div>
        </Container>
      </section>
      <Section aria-labelledby="about-leadership-title">
        <Container>
          <Heading level={2} id="about-leadership-title" className={styles.purposeTitle}>
            {aboutPage.leadership.title}
          </Heading>
          <Heading level={3} className="mt-4">
            {aboutPage.leadership.subtitle}
          </Heading>
          <p className={styles.closing}>{aboutPage.leadership.body}</p>
          <div className="mt-6">
            <LinkButton href={aboutPage.leadership.cta.href}>{aboutPage.leadership.cta.label}</LinkButton>
          </div>
        </Container>
      </Section>
    </div>
  );
}
