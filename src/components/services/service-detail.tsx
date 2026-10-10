import Link from "next/link";
import { PageBanner } from "@/components/corporate/page-banner";
import { Carousel } from "@/components/home/carousel";
import { LinkButton } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { projectsContent } from "@/content/home";
import type { ServiceDetailContent, ServiceFeature } from "@/content/services";
import styles from "./services.module.css";

export type ServicePageContent = ServiceDetailContent & {
  cta: {
    id: string;
    title: string;
    subtitle: string;
    label: string;
    href: string;
  };
};

function Emphasized({
  text,
  emphasis = [],
}: {
  text: string;
  emphasis?: readonly string[];
}) {
  if (emphasis.length === 0) return text;
  const pattern = new RegExp(`(${emphasis.map(escapeRegExp).join("|")})`, "g");
  return text.split(pattern).map((part, index) =>
    emphasis.includes(part) ? (
      <span className={styles.emphasis} key={`${part}-${index}`}>
        {part}
      </span>
    ) : (
      part
    ),
  );
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function FeatureList({ items }: { items: readonly ServiceFeature[] }) {
  return (
    <ul className={styles.features}>
      {items.map((item) => (
        <li className={styles.card} key={item.title}>
          {item.image ? <img className={styles.icon} src={item.image} alt="" /> : null}
          <Heading level={3}>{item.title}</Heading>
          {item.body ? <p>{item.body}</p> : null}
          {item.notes ? (
            <ul className={styles.notes}>
              {item.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export function EnquireBand({
  id,
  title,
  subtitle,
  label,
  href,
}: ServicePageContent["cta"]) {
  return (
    <Section tone="dark" aria-labelledby={id}>
      <Container>
        <Heading level={2} id={id} className={styles.ctaTitle}>
          {title}
        </Heading>
        <p className={styles.ctaSubtitle}>{subtitle}</p>
        <div className="mt-6">
          <LinkButton className={styles.filled} href={href}>
            {label}
          </LinkButton>
        </div>
      </Container>
    </Section>
  );
}

function ServiceProjects() {
  return (
    <Section aria-labelledby="service-projects-title">
      <Container>
        <div className={styles.projectLayout}>
          <div>
            <Heading level={2} id="service-projects-title">
              From Vision to Reality
            </Heading>
            <Heading level={3} className="mt-3">
              Explore the data centers we’ve brought to life
            </Heading>
            <p>{projectsContent.body}</p>
            <Link className={styles.textLink} href={projectsContent.cta.href}>
              {projectsContent.cta.label}
            </Link>
          </div>
          <Carousel label="Featured projects">
            {projectsContent.items.map((project) => (
              <Link className={styles.projectCard} href={project.href} key={project.href}>
                <img src={project.image} alt="" width={project.width} height={project.height} />
                <h3>{project.title}</h3>
                <p>{project.place}</p>
              </Link>
            ))}
          </Carousel>
        </div>
      </Container>
    </Section>
  );
}

export function ServiceDetail({ page }: { page: ServicePageContent }) {
  const bannerId = `${page.intro.id}-banner`;

  return (
    <div className={styles.page}>
      <PageBanner
        id={bannerId}
        title={page.banner.title}
        image={page.banner.image}
        mobileImage={page.banner.mobileImage}
        tone={page.banner.tone}
        titlePlacement={page.banner.titlePlacement}
      />
      <Section aria-labelledby={page.intro.title ? page.intro.id : undefined}>
        <Container>
          <div className={page.intro.image ? styles.introMedia : styles.intro}>
            {page.intro.title ? (
              <Heading level={2} id={page.intro.id} className={styles.introTitle}>
                <Emphasized text={page.intro.title} emphasis={page.intro.emphasis} />
              </Heading>
            ) : null}
            <div>
              {page.intro.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {page.intro.image ? (
              <img className={styles.photo} src={page.intro.image} alt={page.intro.imageAlt ?? ""} />
            ) : null}
          </div>
        </Container>
      </Section>
      <Section aria-labelledby={page.features.id}>
        <Container>
          <Heading level={2} id={page.features.id} className={styles.sectionTitle}>
            {page.features.title}
          </Heading>
          <FeatureList items={page.features.items} />
        </Container>
      </Section>
      {page.showProjects ? <ServiceProjects /> : null}
      <EnquireBand {...page.cta} />
    </div>
  );
}
