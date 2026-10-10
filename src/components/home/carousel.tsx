"use client";

import { useRef, type ReactNode } from "react";
import styles from "./home.module.css";

export function Carousel({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  const scroller = useRef<HTMLDivElement>(null);

  function move(direction: -1 | 1) {
    const node = scroller.current;
    if (!node) return;
    const card = node.firstElementChild;
    const width =
      card instanceof HTMLElement ? card.getBoundingClientRect().width : node.clientWidth;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    node.scrollBy({ left: direction * (width + 18), behavior: reduced ? "auto" : "smooth" });
  }

  return (
    <div>
      <div ref={scroller} className={styles.scroller} tabIndex={0} aria-label={label}>
        {children}
      </div>
      <div className={styles.controls}>
        <button type="button" className={styles.control} onClick={() => move(-1)} aria-label="Previous slide">
          <span aria-hidden="true">‹</span>
        </button>
        <button type="button" className={styles.control} onClick={() => move(1)} aria-label="Next slide">
          <span aria-hidden="true">›</span>
        </button>
      </div>
    </div>
  );
}
