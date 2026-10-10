import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import styles from "./corporate.module.css";

type PageBannerProps = {
  id: string;
  title: string;
  image: string;
  mobileImage?: string;
  level?: 1 | 2;
  size?: 1 | 2;
  tone?: "inverse" | "ink";
  titlePlacement?: "overlay" | "below";
  variant?: "default" | "tall";
};

export function PageBanner({
  id,
  title,
  image,
  mobileImage,
  level = 1,
  size,
  tone = "inverse",
  titlePlacement = "overlay",
  variant = "default",
}: PageBannerProps) {
  const titleClass = tone === "ink" ? styles.bannerTitleInk : styles.bannerTitle;
  const picture = (
    <picture>
      {mobileImage ? <source media="(max-width: 767px)" srcSet={mobileImage} /> : null}
      <img
        className={titlePlacement === "below" ? styles.bannerStackImage : styles.bannerImage}
        src={image}
        alt=""
      />
    </picture>
  );

  if (titlePlacement === "below") {
    return (
      <header className={styles.bannerStack}>
        {picture}
        <Container className={styles.bannerStackContent}>
          <Heading level={level} size={size} id={id} className={titleClass}>
            {title}
          </Heading>
        </Container>
      </header>
    );
  }

  return (
    <header className={variant === "tall" ? `${styles.banner} ${styles.bannerTall}` : styles.banner}>
      {picture}
      <Container className={styles.bannerContent}>
        <Heading level={level} size={size} id={id} className={titleClass}>
          {title}
        </Heading>
      </Container>
    </header>
  );
}
