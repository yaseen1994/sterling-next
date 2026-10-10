import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import styles from "./corporate.module.css";

type PageBannerProps = {
  id: string;
  title: string;
  image: string;
  mobileImage?: string;
};

export function PageBanner({ id, title, image, mobileImage }: PageBannerProps) {
  return (
    <header className={styles.banner}>
      <picture>
        {mobileImage ? <source media="(max-width: 767px)" srcSet={mobileImage} /> : null}
        <img className={styles.bannerImage} src={image} alt="" />
      </picture>
      <Container className={styles.bannerContent}>
        <Heading level={1} id={id} className={styles.bannerTitle}>
          {title}
        </Heading>
      </Container>
    </header>
  );
}
