"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { contactPage } from "@/content/contact";
import styles from "./contact.module.css";

const { form } = contactPage;

export function ContactForm() {
  return (
    <form
      className={styles.form}
      aria-describedby="contact-form-status"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div className={styles.fields}>
        {form.fields.map((field) => {
          const wide = field.type === "textarea";
          return (
            <label className={wide ? `${styles.field} ${styles.wide}` : styles.field} key={field.id} htmlFor={field.id}>
              <span>{field.label}</span>
              {field.type === "textarea" ? (
                <textarea id={field.id} name={field.name} placeholder={field.label} required />
              ) : field.type === "select" ? (
                <select id={field.id} name={field.name} defaultValue="" required>
                  <option value="">{form.servicePlaceholder}</option>
                  {form.services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  placeholder={field.label}
                  autoComplete={field.autoComplete}
                  required
                />
              )}
            </label>
          );
        })}
      </div>
      <label className={styles.consent}>
        <input type="checkbox" name="personal-information" required />
        <span>{form.personalConsent}</span>
      </label>
      <label className={styles.consent}>
        <input type="checkbox" name="privacy-policy" required />
        <span>
          {form.privacyLead} <Link href={form.privacyHref}>{form.privacyLink}</Link>
        </span>
      </label>
      <p id="contact-form-status" className={styles.status}>
        {form.unavailable}
      </p>
      <Button type="submit" disabled aria-describedby="contact-form-status">
        {form.submit}
      </Button>
    </form>
  );
}
