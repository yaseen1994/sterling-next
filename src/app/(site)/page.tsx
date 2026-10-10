import type { Metadata } from "next";
import { Awards } from "@/components/home/awards";
import { Company } from "@/components/home/company";
import { Hero } from "@/components/home/hero";
import { Impact } from "@/components/home/impact";
import { Presence } from "@/components/home/presence";
import { Projects } from "@/components/home/projects";
import { Services } from "@/components/home/services";
import { Testimonials } from "@/components/home/testimonials";
import styles from "@/components/home/home.module.css";
import { homeMeta } from "@/content/home";

export const metadata: Metadata = {
  title: homeMeta.title,
  description: homeMeta.description,
  robots: { index: false, follow: false },
};

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <Services />
      <Company />
      <Impact />
      <Projects />
      <Awards />
      <Testimonials />
      <Presence />
    </div>
  );
}
