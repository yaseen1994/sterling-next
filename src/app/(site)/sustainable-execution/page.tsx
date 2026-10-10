import type { Metadata } from "next";
import { ServiceDetail } from "@/components/services/service-detail";
import { developmentRobots } from "@/content/corporate";
import { sustainableExecutionPage } from "@/content/services";

export const metadata: Metadata = {
  title: sustainableExecutionPage.title,
  description: sustainableExecutionPage.description,
  robots: developmentRobots,
};

export default function SustainableExecutionPage() {
  return <ServiceDetail page={sustainableExecutionPage} />;
}
