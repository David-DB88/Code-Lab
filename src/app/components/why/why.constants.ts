export type WhyPoint = {
  id: string;
  title: string;
  description: string;
};

export const WHY_POINTS: WhyPoint[] = [
  {
    id: "architecture",
    title: "Clean architecture",
    description:
      "Module-based structure with clear separation between UI, data, and business logic — designed to scale.",
  },
  {
    id: "stack",
    title: "Modern technologies",
    description:
      "React, TypeScript, Three.js, modern build tooling — we pick what's right for the product, not what's trendy.",
  },
  {
    id: "scalable",
    title: "Scalable frontend",
    description:
      "Solutions that survive new features, new teams, and new requirements without rewrites.",
  },
  {
    id: "responsive",
    title: "Responsive UI",
    description:
      "Every layout is intentionally tuned for desktop, tablet, and mobile from the very first pixel.",
  },
  {
    id: "details",
    title: "Attention to detail",
    description:
      "Spacing, motion, typography, focus states — the small details that make a product feel premium.",
  },
  {
    id: "experience",
    title: "Real project experience",
    description:
      "A portfolio of shipped products across entertainment, business, and institutional websites.",
  },
];
