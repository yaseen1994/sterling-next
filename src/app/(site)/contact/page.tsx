import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import styles from "@/components/contact/contact.module.css";
import { PageBanner } from "@/components/corporate/page-banner";
import pageStyles from "@/components/corporate/corporate.module.css";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { contactPage } from "@/content/contact";
import { developmentRobots } from "@/content/corporate";

export const metadata: Metadata = {
  title: contactPage.title,
  description: contactPage.description,
  robots: developmentRobots,
};

function AddressLines({ lines }: { lines: readonly string[] }) {
  return (
    <p className={styles.address}>
      {lines.map((line) => (
        <span className={styles.line} key={line}>
          {line}
        </span>
      ))}
    </p>
  );
}

export default function ContactPage() {
  const { headOffice, form, international } = contactPage;

  return (
    <div className={pageStyles.page}>
      <PageBanner
        id="contact-banner-title"
        level={2}
        title={contactPage.banner.title}
        image={contactPage.banner.image}
        mobileImage={contactPage.banner.mobileImage}
      />
      <Section aria-labelledby="contact-form-title">
        <Container>
          <div className={styles.intro}>
            <article className={styles.headOffice} aria-labelledby="head-office-title">
              <Heading level={2} id="head-office-title">
                {headOffice.title}
              </Heading>
              <div className={styles.detail}>
                <Heading level={3}>{headOffice.addressLabel}</Heading>
                <address>
                  <AddressLines lines={headOffice.address} />
                </address>
              </div>
              <div className={styles.detail}>
                <Heading level={3}>{headOffice.phoneLabel}</Heading>
                <p className={styles.address}>
                  <a href={headOffice.phoneHref}>{headOffice.phone}</a>
                </p>
              </div>
              {headOffice.channels.map((channel) => (
                <div className={styles.detail} key={channel.label}>
                  <Heading level={3}>{channel.label}</Heading>
                  <p className={styles.address}>
                    <a href={channel.href}>{channel.address}</a>
                  </p>
                </div>
              ))}
            </article>
            <div>
              <Heading level={1} id="contact-form-title" className={pageStyles.accent}>
                {form.title}
              </Heading>
              {form.lead.map((line) => (
                <p className={styles.lead} key={line}>
                  {line}
                </p>
              ))}
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
      <Section aria-labelledby="international-offices-title">
        <Container>
          <Heading level={2} id="international-offices-title" className={styles.sectionLabel}>
            {international.title}
          </Heading>
          <div className={`${styles.offices} mt-8`}>
            {international.offices.map((office) => (
              <article className={styles.office} key={office.location}>
                <Heading level={2} className={styles.location}>
                  {office.location}
                </Heading>
                <Heading level={3} className={styles.company}>
                  {office.company}
                </Heading>
                <AddressLines lines={office.address} />
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
