import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/editorial/editorial.module.css";
import { PageBanner } from "@/components/corporate/page-banner";
import pageStyles from "@/components/corporate/corporate.module.css";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { blogsPage, developmentRobots } from "@/content/editorial";

export const metadata: Metadata = {
  title: blogsPage.title,
  description: blogsPage.description,
  robots: developmentRobots,
};

export default function BlogsPage() {
  return (
    <div className={pageStyles.page}>
      <PageBanner
        id="blogs-banner-title"
        level={1}
        size={2}
        title={blogsPage.banner.title}
        image={blogsPage.banner.image}
        mobileImage={blogsPage.banner.mobileImage}
      />
      <Section aria-labelledby="blogs-banner-title">
        <Container>
          <ul className={styles.blogList}>
            {blogsPage.items.map((item) => (
              <li key={item.href}>
                <article className={styles.articleCard}>
                  <Link href={item.href}>
                    <img src={item.image.src} alt={item.image.alt} />
                  </Link>
                  <Heading level={2}>
                    <Link href={item.href}>{item.title}</Link>
                  </Heading>
                  <Link href={item.href}>Read More</Link>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </div>
  );
}
