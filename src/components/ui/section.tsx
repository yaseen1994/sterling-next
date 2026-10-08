import type { ComponentPropsWithoutRef } from "react";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  tone?: "light" | "dark";
};

export function Section({
  tone = "light",
  className = "",
  ...props
}: SectionProps) {
  const surface =
    tone === "dark"
      ? "bg-site-dark text-site-inverse [--control-border:var(--color-site-inverse)]"
      : "bg-site-surface text-site-text";

  return <section {...props} className={`py-section ${surface} ${className}`} />;
}
