import Link from "next/link";
import { HeroVideo } from "@/components/home/hero-video";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { projectHref, projects, projectsListing } from "@/content/projects";
import styles from "./projects.module.css";

export function ProjectListing() {
  return (
    <div className={styles.page}>
      <header className={styles.banner}>
        <HeroVideo src={projectsListing.video} />
        <div className={styles.shade} aria-hidden="true" />
        <Container className={styles.bannerContent}>
          <Heading level={1} id="projects-page-title" className={styles.bannerTitle}>
            {projectsListing.heading}
          </Heading>
        </Container>
      </header>
      <Section aria-labelledby="projects-page-title">
        <Container>
          <ul className={styles.grid}>
            {projects.map((project) => (
              <li key={project.slug}>
                <Link className={styles.card} href={projectHref(project.slug)}>
                  <img src={project.cardImage} alt="" width={513} height={338} />
                  <span className={styles.cardBody}>
                    <h2 className={styles.cardTitle}>
                      {project.title}
                      <span className={styles.place}>{project.place}</span>
                    </h2>
                    <span className={styles.more}>{projectsListing.moreLabel}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </div>
  );
}
