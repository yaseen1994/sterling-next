import type { ComponentPropsWithoutRef } from "react";

type HeadingProps = ComponentPropsWithoutRef<"h2"> & {
  level: 1 | 2 | 3;
};

const sizes = {
  1: "text-site-page font-bold",
  2: "text-site-section font-bold",
  3: "text-site-subheading font-medium",
};

export function Heading({ level, className = "", ...props }: HeadingProps) {
  const Tag = `h${level}` as "h1" | "h2" | "h3";
  return <Tag {...props} className={`${sizes[level]} ${className}`} />;
}
