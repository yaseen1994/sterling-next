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
        variant="tall"
      />
      <Section className={styles.contactSection} aria-labelledby="contact-form-title">
        <Container>
          <div className={styles.intro}>
            <article className={styles.headOffice} aria-labelledby="head-office-title">
              <Heading level={2} id="head-office-title" className={styles.headOfficeTitle}>
                {headOffice.title}
              </Heading>
              <div className={styles.detail}>
                <span className={styles.detailIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="15" height="15" focusable="false">
                    <path
                      fill="currentColor"
                      d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"
                    />
                  </svg>
                </span>
                <div className={styles.detailBody}>
                  <Heading level={3} className={styles.detailLabel}>
                    {headOffice.addressLabel}
                  </Heading>
                  <address>
                    <AddressLines lines={headOffice.address} />
                  </address>
                </div>
              </div>
              <div className={styles.detail}>
                <span className={styles.detailIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="15" height="15" focusable="false">
                    <path
                      fill="currentColor"
                      d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.2 2.2z"
                    />
                  </svg>
                </span>
                <div className={styles.detailBody}>
                  <Heading level={3} className={styles.detailLabel}>
                    {headOffice.phoneLabel}
                  </Heading>
                  <p className={styles.address}>
                    <a href={headOffice.phoneHref}>{headOffice.phone}</a>
                  </p>
                </div>
              </div>
              {headOffice.channels.map((channel) => (
                <div className={styles.detail} key={channel.label}>
                  <span className={styles.detailIcon} aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="15" height="15" focusable="false">
                      <path
                        fill="currentColor"
                        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"
                      />
                    </svg>
                  </span>
                  <div className={styles.detailBody}>
                    <Heading level={3} className={styles.detailLabel}>
                      {channel.label}
                    </Heading>
                    <p className={styles.address}>
                      <a href={channel.href}>{channel.address}</a>
                    </p>
                  </div>
                </div>
              ))}
            </article>
            <div className={styles.formColumn}>
              <Heading level={1} id="contact-form-title" className={styles.formTitle}>
                {form.title}
              </Heading>
              <p className={styles.lead}>
                {form.lead[0]}
                <br />
                {form.lead[1]}
              </p>
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
      <Section className={styles.officesSection} aria-labelledby="international-offices-title">
        <Container>
          <Heading level={2} id="international-offices-title" className={styles.sectionLabel}>
            {international.title}
          </Heading>
          <div className={styles.offices}>
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
