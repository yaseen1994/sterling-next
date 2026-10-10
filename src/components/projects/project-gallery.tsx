"use client";

import { useState } from "react";
import type { ProjectImage } from "@/content/projects";
import styles from "./projects.module.css";

export function ProjectGallery({
  images,
  label,
}: {
  images: readonly ProjectImage[];
  label: string;
}) {
  const [index, setIndex] = useState(0);
  const total = images.length;
  const image = images[index];
  if (!image) return null;

  function show(nextIndex: number) {
    setIndex((nextIndex + total) % total);
  }

  return (
    <div className={styles.gallery}>
      <img src={image.src} alt={`${label}, image ${index + 1} of ${total}`} />
      <div className={styles.galleryControls}>
        <button type="button" className={styles.control} onClick={() => show(index - 1)} aria-label="Previous image">
          <span aria-hidden="true">‹</span>
        </button>
        <p>
          {index + 1} of {total}
        </p>
        <button type="button" className={styles.control} onClick={() => show(index + 1)} aria-label="Next image">
          <span aria-hidden="true">›</span>
        </button>
      </div>
    </div>
  );
}
