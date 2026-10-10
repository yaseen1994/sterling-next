import type { Metadata } from "next";
import { SmartOperationsPage } from "@/components/services/smart-operations";
import { developmentRobots } from "@/content/corporate";
import { smartOperationsPage } from "@/content/services";

export const metadata: Metadata = {
  title: smartOperationsPage.title,
  description: smartOperationsPage.description,
  robots: developmentRobots,
};

export default function SmartOperationsRoute() {
  return <SmartOperationsPage />;
}
