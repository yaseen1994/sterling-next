import Link from "next/link";
import { HeroVideo } from "@/components/home/hero-video";
import { Container } from "@/components/ui/container";
import { projectHref, projects, projectsListing } from "@/content/projects";
import styles from "./projects.module.css";

export function ProjectListing() {
  return (
    <div className={styles.page}>
      <header className={styles.banner}>
        <HeroVideo src={projectsListing.video} />
        <div className={styles.shade} aria-hidden="true" />
        <Container className={styles.bannerContent}>
          <h1 id="projects-page-title" className={styles.bannerTitle}>
            {projectsListing.heading}
          </h1>
        </Container>
      </header>
      <section className={styles.listing} aria-labelledby="projects-page-title">
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
      </section>
    </div>
  );
}
