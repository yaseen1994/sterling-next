import { footerColumns, footerContent, type SiteLink } from "@/content/navigation";
import { Logo } from "./logo";
import styles from "./shell.module.css";

function FooterLink({ link }: { link: SiteLink }) {
  return <a href={link.href} target={link.newTab ? "_blank" : undefined} rel={link.newTab ? "noopener noreferrer" : undefined}>{link.label}</a>;
}

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerBrand}>
          <Logo inverse />
          <p>{footerContent.tagline[0]} <br className={styles.taglineBreak} />{footerContent.tagline[1]}</p>
        </div>
        {footerColumns.map((column) => (
          <div className={styles.footerColumn} key={column.label}>
            <h2>{column.label}</h2>
            <ul>{column.links.map((link) => <li key={link.href}><FooterLink link={link} /></li>)}</ul>
            {column.following.map((link) => <h2 className={styles.following} key={link.href}><FooterLink link={link} /></h2>)}
          </div>
        ))}
        <div className={styles.footerColumn}>
          <h2>{footerContent.connect}</h2>
          <a className={styles.social} href={footerContent.social.href} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)"><span aria-hidden="true">in</span></a>
          <ul>{footerContent.policies.map((link) => <li key={link.href}><FooterLink link={link} /></li>)}</ul>
        </div>
      </div>
    </footer>
  );
}
