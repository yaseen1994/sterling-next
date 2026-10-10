import type { Metadata } from "next";
import { ServiceDetail } from "@/components/services/service-detail";
import { developmentRobots } from "@/content/corporate";
import { modularConstructionPage } from "@/content/services";

export const metadata: Metadata = {
  title: modularConstructionPage.title,
  description: modularConstructionPage.description,
  robots: developmentRobots,
};

export default function ModularConstructionPage() {
  return <ServiceDetail page={modularConstructionPage} />;
}
