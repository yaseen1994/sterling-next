"use client";

import { useState } from "react";
import styles from "./editorial.module.css";

export function MediaGallery({
  images,
  label,
}: {
  images: readonly string[];
  label: string;
}) {
  const [index, setIndex] = useState(0);
  const total = images.length;
  const src = images[index];
  if (!src) return null;

  const alt = total === 1 ? label : `${label}, image ${index + 1} of ${total}`;

  if (total === 1) {
    return <img className={styles.eventImage} src={src} alt={alt} />;
  }

  function show(nextIndex: number) {
    setIndex((nextIndex + total) % total);
  }

  return (
    <div>
      <img className={styles.eventImage} src={src} alt={alt} />
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
