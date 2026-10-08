import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

const appearance =
  "inline-flex min-h-11 items-center justify-center rounded-control border-2 border-[color:var(--control-border)] bg-transparent px-6 py-3 text-[15px] font-medium leading-none text-inherit no-underline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-current disabled:cursor-not-allowed disabled:opacity-50";

export function Button({
  type = "button",
  className = "",
  ...props
}: ComponentPropsWithoutRef<"button">) {
  return (
    <button {...props} type={type} className={`${appearance} ${className}`} />
  );
}

export function LinkButton({
  className = "",
  ...props
}: ComponentPropsWithoutRef<typeof Link>) {
  return <Link {...props} className={`${appearance} ${className}`} />;
}
