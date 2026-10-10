import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import styles from "./corporate.module.css";

type PageBannerProps = {
  id: string;
  title: string;
  image: string;
  mobileImage?: string;
  level?: 1 | 2;
};

export function PageBanner({ id, title, image, mobileImage, level = 1 }: PageBannerProps) {
  return (
    <header className={styles.banner}>
      <picture>
        {mobileImage ? <source media="(max-width: 767px)" srcSet={mobileImage} /> : null}
        <img className={styles.bannerImage} src={image} alt="" />
      </picture>
      <Container className={styles.bannerContent}>
        <Heading level={level} id={id} className={styles.bannerTitle}>
          {title}
        </Heading>
      </Container>
    </header>
  );
}
