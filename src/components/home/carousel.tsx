"use client";

import { useRef, type ReactNode } from "react";
import styles from "./home.module.css";

export function Carousel({
  label,
  children,
  variant = "default",
}: {
  label: string;
  children: ReactNode;
  variant?: "default" | "projects" | "awards";
}) {
  const scroller = useRef<HTMLDivElement>(null);
  const scrollerClass =
    variant === "projects"
      ? `${styles.scroller} ${styles.projectScroller}`
      : variant === "awards"
        ? `${styles.scroller} ${styles.awardScroller}`
        : styles.scroller;
  const controlClass =
    variant === "projects"
      ? `${styles.control} ${styles.projectControl}`
      : variant === "awards"
        ? `${styles.control} ${styles.awardControl}`
        : styles.control;

  function move(direction: -1 | 1) {
    const node = scroller.current;
    if (!node) return;
    const card = node.firstElementChild;
    const width =
      card instanceof HTMLElement ? card.getBoundingClientRect().width : node.clientWidth;
    const gap = variant === "awards" ? 24 : 18;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    node.scrollBy({ left: direction * (width + gap), behavior: reduced ? "auto" : "smooth" });
  }

  return (
    <div>
      <div ref={scroller} className={scrollerClass} tabIndex={0} aria-label={label}>
        {children}
      </div>
      <div className={styles.controls}>
        <button type="button" className={controlClass} onClick={() => move(-1)} aria-label="Previous slide">
          <span aria-hidden="true">‹</span>
        </button>
        <button type="button" className={controlClass} onClick={() => move(1)} aria-label="Next slide">
          <span aria-hidden="true">›</span>
        </button>
      </div>
    </div>
  );
}
