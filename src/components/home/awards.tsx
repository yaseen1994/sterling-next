"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { awardsContent } from "@/content/home";
import { Carousel } from "./carousel";
import { SectionHeading } from "./section-heading";
import styles from "./home.module.css";

type AwardItem = (typeof awardsContent.items)[number];

export function Awards() {
  const [preview, setPreview] = useState<AwardItem | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const node = dialogRef.current;
    if (!node) return;

    if (preview) {
      if (!node.open) node.showModal();
      closeRef.current?.focus();
      const overflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = overflow;
      };
    }

    if (node.open) node.close();
  }, [preview]);

  function openPreview(award: AwardItem, trigger: HTMLButtonElement) {
    triggerRef.current = trigger;
    setPreview(award);
  }

  function dismissPreview() {
    dialogRef.current?.close();
  }

  function handleDialogClose() {
    setPreview(null);
    triggerRef.current?.focus();
    triggerRef.current = null;
  }

  return (
    <Section aria-labelledby="awards-title">
      <Container>
        <SectionHeading
          id="awards-title"
          title={awardsContent.title}
          subtitle={awardsContent.subtitle}
        />
        <div className="mt-8">
          <Carousel label="Awards and recognitions" variant="awards">
            {awardsContent.items.map((award) => (
              <button
                type="button"
                className={styles.awardCard}
                key={award.image}
                onClick={(event) => openPreview(award, event.currentTarget)}
                aria-haspopup="dialog"
              >
                <img
                  src={award.image}
                  alt={award.alt}
                  width={award.width}
                  height={award.height}
                />
              </button>
            ))}
          </Carousel>
        </div>
        <Link className={`${styles.textLink} ${styles.textLinkAccent}`} href={awardsContent.cta.href}>
          {awardsContent.cta.label}
        </Link>
        <dialog
          ref={dialogRef}
          className={styles.awardPreview}
          aria-label={preview?.alt ?? "Award preview"}
          onClose={handleDialogClose}
          onCancel={(event) => {
            event.preventDefault();
            dismissPreview();
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              event.preventDefault();
              dismissPreview();
            }
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget) dismissPreview();
          }}
        >
          {preview ? (
            <div className={styles.awardPreviewPanel}>
              <button
                ref={closeRef}
                type="button"
                className={styles.awardPreviewClose}
                aria-label="Close"
                onClick={dismissPreview}
              >
                ×
              </button>
              <img
                src={preview.image}
                alt={preview.alt}
                width={preview.width}
                height={preview.height}
                className={styles.awardPreviewImage}
              />
            </div>
          ) : null}
        </dialog>
      </Container>
    </Section>
  );
}
