import Link from "next/link";
import { EnquireBand } from "@/components/services/service-detail";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import {
  projectBullet,
  projectEnquiry,
  projectHref,
  projectStamp,
  type ProjectRecord,
} from "@/content/projects";
import { ProjectGallery } from "./project-gallery";
import styles from "./projects.module.css";

function sectionId(heading: string) {
  return `project-${heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
}

function LinkedLine({ text }: { text: string }) {
  const parts = text.split(/(https?:\/\/[^\s]+)/g);
  return parts.map((part, index) =>
    part.startsWith("http://") || part.startsWith("https://") ? (
      <a href={part} key={`${part}-${index}`}>
        {part}
      </a>
    ) : (
      part
    ),
  );
}

function ProjectFact({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <li className={styles.item}>
      <img src={projectBullet} alt="" width={22} height={22} />
      <span>
        {lines.map((line, index) => (
          <span key={line}>
            {index > 0 ? <br /> : null}
            <LinkedLine text={line} />
          </span>
        ))}
      </span>
    </li>
  );
}

export function ProjectDetail({
  project,
  previous,
  next,
}: {
  project: ProjectRecord;
  previous?: ProjectRecord;
  next?: ProjectRecord;
}) {
  const label = `${project.title}, ${project.place}`;
  const photo = project.gallery[0];

  return (
    <div className={styles.page}>
      <Section aria-labelledby="project-title">
        <Container>
          {project.gallery.length > 1 ? (
            <ProjectGallery images={project.gallery} label={label} />
          ) : photo ? (
            <img className={styles.photo} src={photo.src} alt={label} />
          ) : null}
          <nav className={styles.projectNav} aria-label="More projects">
            {previous ? (
              <Link
                className={styles.arrow}
                href={projectHref(previous.slug)}
                aria-label={`Previous project: ${previous.title}, ${previous.place}`}
              >
                <span aria-hidden="true">‹</span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                className={`${styles.arrow} ${styles.arrowNext}`}
                href={projectHref(next.slug)}
                aria-label={`Next project: ${next.title}, ${next.place}`}
              >
                <span aria-hidden="true">›</span>
              </Link>
            ) : null}
          </nav>
          <div className={styles.detail}>
            <div>
              <h1 id="project-title" className={styles.title}>
                {project.title}
                <span className={styles.place}>{project.place}</span>
              </h1>
              {project.sections.map((section) => (
                <section key={section.heading} aria-labelledby={sectionId(section.heading)}>
                  <h2 className={styles.sectionHeading} id={sectionId(section.heading)}>
                    {section.heading}
                  </h2>
                  {section.items.length > 0 ? (
                    <ul className={styles.items}>
                      {section.items.map((item) => (
                        <ProjectFact key={item} text={item} />
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>
            <img
              className={styles.stamp}
              src={projectStamp}
              alt="Our Marquee Projects, Sterling & Wilson Data Center"
            />
          </div>
        </Container>
      </Section>
      <EnquireBand {...projectEnquiry} />
    </div>
  );
}
