export type SiteLink = { label: string; href: string; newTab?: boolean };
export type NavigationItem = { label: string; href?: string; children?: SiteLink[] };

// Observed shared shell order/targets, 2026-10-09; see docs/milestone-3.md.
const about: SiteLink[] = [
  { label: "Overview", href: "/about-us/" },
  { label: "Awards & Recognitions", href: "/awards-recognitions/" },
  { label: "Leadership", href: "/leadership/" },
  { label: "Industry Memberships and Recognitions", href: "/industry-memberships-and-recognitions/" },
  { label: "Corporate Governance", href: "/corporate-governance/" },
];
const services: SiteLink[] = [
  { label: "Design & Build", href: "/design-build/" },
  { label: "Modular Construction", href: "/modular-construction/" },
  { label: "Smart Operations", href: "/smart-operations/" },
  { label: "Sustainable Execution", href: "/sustainable-execution/" },
  { label: "O&M Services", href: "/om-services/" },
];
const media: SiteLink[] = [
  { label: "News & Press Release", href: "/news-press-release/" },
  { label: "Events", href: "/events/" },
  { label: "Blogs", href: "/blogs/" },
];
export const navigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/", children: about },
  { label: "Projects", href: "/projects/" },
  { label: "Services", children: services },
  { label: "Media", children: media },
  { label: "Careers", href: "/careers/" },
  { label: "Contact", href: "/contact/" },
];

// The reference footer deliberately differs from the header: no Governance/Blogs.
export const footerColumns = [
  { label: "About Us", links: about.slice(0, 4), following: [{ label: "Projects", href: "/projects/" }] },
  { label: "Services", links: services, following: [] },
  { label: "Media", links: media.slice(0, 2), following: [{ label: "Careers", href: "/careers/" }, { label: "Contact", href: "/contact/" }] },
] satisfies { label: string; links: SiteLink[]; following: SiteLink[] }[];

export const footerContent = {
  tagline: ["Your trusted partner in designing, building", "and managing world-class data centers"],
  connect: "Let’s Connect",
  social: { label: "LinkedIn", href: "https://www.linkedin.com/company/sterling-and-wilson-data-center/", newTab: true },
  policies: [
    { label: "Privacy Policy", href: "/privacy-policy/" },
    { label: "HSE Policy", href: "https://sterlingandwilsondc.com/wp-content/uploads/2025/12/SW-HSE-Policy-June-2025.pdf", newTab: true },
  ] satisfies SiteLink[],
};
