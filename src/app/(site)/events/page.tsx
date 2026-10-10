import type { Metadata } from "next";
import { MediaGallery } from "@/components/editorial/media-gallery";
import styles from "@/components/editorial/editorial.module.css";
import { PageBanner } from "@/components/corporate/page-banner";
import pageStyles from "@/components/corporate/corporate.module.css";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { developmentRobots, eventsPage } from "@/content/editorial";

export const metadata: Metadata = {
  title: eventsPage.title,
  description: eventsPage.description,
  robots: developmentRobots,
};

export default function EventsPage() {
  return (
    <div className={pageStyles.page}>
      <PageBanner
        id="events-banner-title"
        level={1}
        size={2}
        title={eventsPage.banner.title}
        image={eventsPage.banner.image}
        mobileImage={eventsPage.banner.mobileImage}
      />
      <Section aria-labelledby="events-banner-title">
        <Container>
          <div className={styles.events}>
            {eventsPage.items.map((item) => (
              <article className={styles.event} key={item.title}>
                <MediaGallery images={item.images} label={item.title} />
                <div>
                  <h2>{item.title}</h2>
                  <p className={styles.meta}>{item.date}</p>
                  <p className={styles.meta}>{item.place}</p>
                  {item.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
