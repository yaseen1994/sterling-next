import type { Metadata } from "next";
import { ProjectListing } from "@/components/projects/project-listing";
import { developmentRobots } from "@/content/corporate";
import { projectsListing } from "@/content/projects";

export const metadata: Metadata = {
  title: projectsListing.title,
  description: projectsListing.description,
  robots: developmentRobots,
};

export default function ProjectsPage() {
  return <ProjectListing />;
}
