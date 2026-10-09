import { Logo } from "./logo";
import { Navigation } from "./navigation";
import styles from "./shell.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
