import type { ServiceIcon } from "@/content/home";

const common = {
  viewBox: "0 0 64 64",
  width: 56,
  height: 56,
  fill: "none",
  stroke: "white",
  strokeWidth: 2.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function DesignIcon() {
  return (
    <svg {...common}>
      <path d="M14 46 40 20l6 6L20 52H14v-6Z" />
      <path d="m36 16 6-6 8 8-6 6" />
      <path d="M42 38c6 2 12 8 12 14" />
      <path d="M46 46c2 6 8 10 14 10" />
    </svg>
  );
}

function ModularIcon() {
  return (
    <svg {...common}>
      <path d="M10 28 32 16l22 12-22 12L10 28Z" />
      <path d="M10 28v16l22 12 22-12V28" />
      <path d="M32 40v16" />
      <path d="M22 22v8M32 18v8M42 22v8" />
    </svg>
  );
}

function SmartIcon() {
  return (
    <svg {...common}>
      <path d="M24 38a12 12 0 1 1 16 0c-2 2-3 4-3 7H27c0-3-1-5-3-7Z" />
      <path d="M27 49h10M29 54h6" />
      <path d="M32 14v4M18 20l3 3M46 20l-3 3" />
    </svg>
  );
}

function SustainableIcon() {
  return (
    <svg {...common}>
      <path d="M32 52V28" />
      <path d="M32 36c-10-2-16-10-18-20 12 0 20 6 22 16" />
      <path d="M32 32c8-6 16-8 24-8-2 12-10 18-20 18" />
    </svg>
  );
}

function OperationsIcon() {
  return (
    <svg {...common}>
      <path d="M18 40c0-8 6-14 14-14s14 6 14 14v4H18v-4Z" />
      <path d="M24 44v4a8 8 0 0 0 16 0v-4" />
      <circle cx="32" cy="30" r="3" />
      <path d="M32 18v4M20 22l3 3M44 22l-3 3" />
    </svg>
  );
}

const icons = {
  design: DesignIcon,
  modular: ModularIcon,
  smart: SmartIcon,
  sustainable: SustainableIcon,
  operations: OperationsIcon,
};

export function ServiceGlyph({ name }: { name: ServiceIcon }) {
  const Icon = icons[name];
  return <Icon />;
}
