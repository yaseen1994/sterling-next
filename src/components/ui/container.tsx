import type { ComponentPropsWithoutRef } from "react";

export function Container({
  className = "",
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      className={`mx-auto w-[calc(100%_-_2_*_var(--site-gutter))] max-w-site ${className}`}
    />
  );
}
