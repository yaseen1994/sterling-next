import type { ServiceIcon } from "@/content/home";

const icons: Record<
  ServiceIcon,
  { src: string; width: number; height: number }
> = {
  design: {
    src: "/assets/icons/services/design.svg",
    width: 55,
    height: 55,
  },
  modular: {
    src: "/assets/icons/services/modular.svg",
    width: 60,
    height: 60,
  },
  smart: {
    src: "/assets/icons/services/smart.svg",
    width: 65,
    height: 65,
  },
  sustainable: {
    src: "/assets/icons/services/sustainable.svg",
    width: 60,
    height: 60,
  },
  operations: {
    src: "/assets/icons/services/operations.svg",
    width: 50,
    height: 50,
  },
};

export function ServiceGlyph({ name }: { name: ServiceIcon }) {
  const icon = icons[name];

  return (
    <img
      src={icon.src}
      alt=""
      width={icon.width}
      height={icon.height}
      aria-hidden="true"
      draggable={false}
    />
  );
}
