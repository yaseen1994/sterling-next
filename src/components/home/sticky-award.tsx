"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./sticky-award.module.css";

const BADGE_SRC = "/assets/images/Construction-Week-Awards-Badge-65ab55.png";

export function StickyAward() {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

  return (
    <div className={styles.wrap}>
      <button
        type="button"
        className={styles.close}
        aria-label="Close"
        onClick={() => setVisible(false)}
      >
        X
      </button>
      <Image
        src={BADGE_SRC}
        alt="Construction Week Awards Badge"
        width={1080}
        height={631}
        className={styles.image}
        sizes="18vw"
      />
    </div>
  );
}
