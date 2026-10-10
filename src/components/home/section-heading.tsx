import { Heading } from "@/components/ui/heading";
import styles from "./home.module.css";

type SectionHeadingProps = {
  id: string;
  title: string;
  subtitle?: string;
  tone?: "light" | "dark";
};

export function SectionHeading({
  id,
  title,
  subtitle,
  tone = "light",
}: SectionHeadingProps) {
  return (
    <div className={styles.intro}>
      <div className={tone === "dark" ? styles.barInverse : styles.bar} />
      <Heading
        level={1}
        id={id}
        className={tone === "dark" ? "text-site-inverse" : "text-site-accent"}
      >
        {title}
      </Heading>
      {subtitle ? (
        <Heading
          level={3}
          className={tone === "dark" ? "mt-3 text-site-inverse" : "mt-3 text-site-ink"}
        >
          {subtitle}
        </Heading>
      ) : null}
    </div>
  );
}
