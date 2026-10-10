"use client";

import { useEffect, useRef } from "react";
import styles from "./home.module.css";

export function HeroVideo({ src }: { src: string }) {
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const node = video.current;
    if (!node) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (motion.matches) node.pause();
      else void node.play().catch(() => undefined);
    };
    apply();
    motion.addEventListener("change", apply);
    return () => motion.removeEventListener("change", apply);
  }, []);

  return (
    <video
      ref={video}
      className={styles.heroMedia}
      autoPlay
      muted
      loop
      playsInline
      aria-hidden="true"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
