export type Service = {
  id: string;
  title: string;
  description: string;
  icon: "code" | "layout" | "rocket" | "layers" | "smartphone" | "gauge" | "sparkles" | "wand";
};

export const SERVICES: Service[] = [
  {
    id: "web-apps",
    title: "Web application development",
    description:
      "Production-ready React applications built with strong architecture, clear data flow, and a focus on long-term maintainability.",
    icon: "code",
  },
  {
    id: "business-sites",
    title: "Business websites",
    description:
      "Conversion-driven business sites that present your services and brand with structured, trustworthy presentation.",
    icon: "layout",
  },
  {
    id: "landing",
    title: "Landing pages",
    description:
      "High-impact landing pages designed to launch products, validate ideas, and convert visitors into qualified leads.",
    icon: "rocket",
  },
  {
    id: "interactive",
    title: "Interactive platforms",
    description:
      "Animated, interactive product experiences with smooth transitions, 3D scenes, and rich state management.",
    icon: "sparkles",
  },
  {
    id: "architecture",
    title: "Frontend architecture",
    description:
      "Scalable module structure, type-safe domains, and clean component boundaries that survive growing teams.",
    icon: "layers",
  },
  {
    id: "ui",
    title: "UI implementation",
    description:
      "Pixel-accurate implementations of design systems with attention to spacing, typography, and motion details.",
    icon: "wand",
  },
  {
    id: "responsive",
    title: "Responsive design",
    description:
      "Mobile-first layouts that look intentional on every breakpoint, from 320px phones to ultrawide displays.",
    icon: "smartphone",
  },
  {
    id: "performance",
    title: "Performance optimization",
    description:
      "Faster loads, smoother animations, and leaner bundles — measured with real-world performance budgets.",
    icon: "gauge",
  },
];
