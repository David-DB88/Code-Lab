export type ProcessStep = {
  id: string;
  step: string;
  title: string;
  description: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "idea",
    step: "01",
    title: "Understanding the idea",
    description:
      "We start with conversation. We understand the goal, audience, and the constraints behind your product.",
  },
  {
    id: "planning",
    step: "02",
    title: "Architecture & system design",
    description:
      "We design backend architecture, data models, API contracts, frontend module structure, and infrastructure decisions before code is written. Saves rewrites later.",
  },
  {
    id: "ui",
    step: "03",
    title: "UI implementation",
    description:
      "Component-driven development with clean styles, animations, and responsive layouts across all screens.",
  },
  {
    id: "testing",
    step: "04",
    title: "Testing and optimization",
    description:
      "Cross-device testing, performance profiling, and accessibility checks before anything goes live.",
  },
  {
    id: "delivery",
    step: "05",
    title: "Production delivery",
    description:
      "We ship and stay close after launch — monitoring, iterating, and supporting whatever comes next.",
  },
];
