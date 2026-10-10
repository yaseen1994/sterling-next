import type { Metadata } from "next";
import { ServiceDetail } from "@/components/services/service-detail";
import { developmentRobots } from "@/content/corporate";
import { omServicesPage } from "@/content/services";

export const metadata: Metadata = {
  title: omServicesPage.title,
  description: omServicesPage.description,
  robots: developmentRobots,
};

export default function OmServicesPage() {
  return <ServiceDetail page={omServicesPage} />;
}
