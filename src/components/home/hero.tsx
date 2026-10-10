import Link from "next/link";
import { Container } from "@/components/ui/container";
import { heroContent } from "@/content/home";
import { HeroVideo } from "./hero-video";
import styles from "./home.module.css";

export function Hero() {
  return (
    <>
      <div className={styles.ticker}>
        <div className={styles.tickerTrack}>
          <span>{heroContent.ticker}</span>
          <span aria-hidden="true">{heroContent.ticker}</span>
        </div>
      </div>
      <section className={styles.hero} aria-labelledby="hero-title">
        <HeroVideo src={heroContent.video} />
        <div className={styles.heroShade} />
        <Container>
          <div className={styles.heroCopy}>
            <h2 id="hero-title">{heroContent.title}</h2>
            <p>{heroContent.body}</p>
            <Link className={styles.textLink} href={heroContent.cta.href}>
              {heroContent.cta.label}
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
