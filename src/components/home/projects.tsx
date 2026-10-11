import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { projectsContent } from "@/content/home";
import { Carousel } from "./carousel";
import { SectionHeading } from "./section-heading";
import styles from "./home.module.css";

export function Projects() {
  return (
    <Section
      tone="dark"
      aria-labelledby="projects-title"
      className={styles.projects}
      style={{ backgroundImage: `url(${projectsContent.image})` }}
    >
      <div className={styles.shade} />
      <Container>
        <div className={styles.projectLayout}>
          <div>
            <SectionHeading
              id="projects-title"
              title={projectsContent.title}
              subtitle={projectsContent.subtitle}
              tone="dark"
            />
            <p>{projectsContent.body}</p>
            <Link className={styles.textLink} href={projectsContent.cta.href}>
              {projectsContent.cta.label}
            </Link>
          </div>
          <Carousel label="Featured projects" variant="projects">
            {projectsContent.items.map((project) => (
              <Link className={styles.projectCard} href={project.href} key={project.href}>
                <img
                  src={project.image}
                  alt=""
                  width={project.width}
                  height={project.height}
                />
                <div className={styles.projectCaption}>
                  <h3>{project.title}</h3>
                  <p>{project.place}</p>
                </div>
              </Link>
            ))}
          </Carousel>
        </div>
      </Container>
    </Section>
  );
}
