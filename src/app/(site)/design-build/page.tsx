import type { Metadata } from "next";
import { ServiceDetail } from "@/components/services/service-detail";
import { developmentRobots } from "@/content/corporate";
import { designBuildPage } from "@/content/services";

export const metadata: Metadata = {
  title: designBuildPage.title,
  description: designBuildPage.description,
  robots: developmentRobots,
};

export default function DesignBuildPage() {
  return <ServiceDetail page={designBuildPage} />;
}
