import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/projects/project-detail";
import { developmentRobots } from "@/content/corporate";
import { getProject, projects } from "@/content/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const found = getProject(slug);
  if (!found) {
    return { title: "Project", robots: developmentRobots };
  }

  const { project } = found;
  return {
    title: `${project.title} ${project.place} – Sterling & Wilson Data Center`,
    description: `${project.title}, ${project.place}.`,
    robots: developmentRobots,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const found = getProject(slug);
  if (!found) notFound();
  return <ProjectDetail project={found.project} previous={found.previous} next={found.next} />;
}
