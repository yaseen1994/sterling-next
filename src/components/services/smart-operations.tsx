import { EnquireBand } from "@/components/services/service-detail";
import { LinkButton } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { smartOperationsPage, type SmartCard } from "@/content/services";
import styles from "./services.module.css";

const page = smartOperationsPage;

function Emphasized({ text, emphasis }: { text: string; emphasis: readonly string[] }) {
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

function Cards({
  items,
  className,
  imageClass,
}: {
  items: readonly SmartCard[];
  className: string;
  imageClass?: string;
}) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li className={item.imageAlt ? styles.sector : styles.card} key={item.title}>
          {item.image ? (
            <img
              className={imageClass ?? styles.icon}
              src={item.image}
              alt={item.imageAlt ?? ""}
            />
          ) : null}
          <Heading level={3}>{item.title}</Heading>
          {item.body ? <p>{item.body}</p> : null}
        </li>
      ))}
    </ul>
  );
}

export function SmartOperationsPage() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <img className={styles.heroMedia} src={page.hero.image} alt={page.hero.imageAlt} />
        <div className={styles.heroShade} />
        <Container className={styles.heroContent}>
          <Heading level={1} id={page.hero.id}>
            <Emphasized text={page.hero.title} emphasis={page.hero.emphasis} />
          </Heading>
          <p className={styles.heroLead}>{page.hero.lead}</p>
          <div className="mt-6">
            <LinkButton className={styles.filled} href={page.hero.cta.href}>
              {page.hero.cta.label}
            </LinkButton>
          </div>
          <ul className={styles.pills} aria-label="Smart Operations highlights">
            {page.hero.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Container>
      </header>

      <Section aria-labelledby={page.transform.id}>
        <Container>
          <Heading level={2} id={page.transform.id} className={styles.sectionTitle}>
            {page.transform.title}
          </Heading>
          {page.transform.paragraphs.map((paragraph) => (
            <p className={styles.lead} key={paragraph}>
              {paragraph}
            </p>
          ))}
        </Container>
      </Section>

      <Section aria-labelledby={page.delivers.id}>
        <Container>
          <Heading level={2} id={page.delivers.id} className={styles.sectionTitle}>
            {page.delivers.title}
          </Heading>
          <p className={styles.lead}>{page.delivers.lead}</p>
          <Cards items={page.delivers.items} className={styles.deliverables} />
        </Container>
      </Section>

      <Section aria-labelledby={page.capabilities.id}>
        <Container>
          <Heading level={2} id={page.capabilities.id} className={styles.sectionTitle}>
            {page.capabilities.title}
          </Heading>
          <Cards items={page.capabilities.items} className={styles.capabilities} />
        </Container>
      </Section>

      <Section aria-labelledby={page.sectors.id}>
        <Container>
          <Heading level={2} id={page.sectors.id} className={styles.sectionTitle}>
            {page.sectors.title}
          </Heading>
          <Cards items={page.sectors.items} className={styles.sectors} imageClass={styles.photo} />
        </Container>
      </Section>

      <Section aria-labelledby={page.impact.id}>
        <Container>
          <Heading level={2} id={page.impact.id} className={styles.sectionTitle}>
            {page.impact.title}
          </Heading>
          <p className={styles.lead}>{page.impact.lead}</p>
          <Cards items={page.impact.items} className={styles.impacts} />
        </Container>
      </Section>

      <Section aria-labelledby={page.platform.id}>
        <Container>
          <img className={styles.diagram} src={page.platform.diagram} alt={page.platform.diagramAlt} />
          <div className={`${styles.panels} mt-8`}>
            <article className={styles.panel} aria-labelledby={page.platform.id}>
              <Heading level={2} id={page.platform.id}>
                {page.platform.title}
              </Heading>
              {page.platform.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <ul>
                {page.platform.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
            <article className={styles.panel} aria-labelledby={page.why.id}>
              <img className={styles.monitor} src={page.platform.monitor} alt={page.platform.monitorAlt} />
              <Heading level={2} id={page.why.id}>
                {page.why.title}
              </Heading>
              <ul>
                {page.why.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          </div>
        </Container>
      </Section>

      <section className={styles.band} aria-labelledby={page.geography.id}>
        <img className={styles.heroMedia} src={page.geography.image} alt="" />
        <div className={styles.heroShade} />
        <Container className={styles.bandContent}>
          <Heading level={2} id={page.geography.id}>
            {page.geography.title}
          </Heading>
          {page.geography.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Container>
      </section>

      <Section aria-labelledby={page.faqs.id}>
        <Container>
          <Heading level={2} id={page.faqs.id} className={styles.sectionTitle}>
            {page.faqs.title}
          </Heading>
          <div className={styles.faqs}>
            {page.faqs.items.map((item) => (
              <details className={styles.faq} key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      <EnquireBand {...page.cta} />
    </div>
  );
}
