import type { ReactNode } from "react";
import { Header } from "@/components/shell/header";
import { Footer } from "@/components/shell/footer";
import styles from "@/components/shell/shell.module.css";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return <>
    <a className={styles.skipLink} href="#content">Skip to content</a>
    <Header />
    <main id="content" tabIndex={-1} className={styles.main}>{children}</main>
    <Footer />
  </>;
}
