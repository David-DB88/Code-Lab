export type Service = {
  id: string;
  title: string;
  description: string;
  icon:
    | "layers"
    | "server"
    | "brain"
    | "layout"
    | "shopping"
    | "palette";
};

export const SERVICES: Service[] = [
  {
    id: "full-stack",
    title: "Full-Stack Web Applications",
    description:
      "Production web applications built end-to-end. .NET backend with EF Core and microservices, React or Vue frontend with TypeScript, and integrated UI design. Clean Architecture, scalable, maintainable.",
    icon: "layers",
  },
  {
    id: "backend-api",
    title: "Backend & API Development",
    description:
      ".NET / ASP.NET Core REST APIs, microservices, and integrations. EF Core, Dapper, RabbitMQ, Redis, complex SQL, and third-party API connections. Strong on Clean Architecture and senior-level system design.",
    icon: "server",
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    description:
      "We integrate Claude AI into production .NET systems — agentic workflows, tool calling, structured outputs, and Model Context Protocol (MCP). Real production AI integration, not experiments.",
    icon: "brain",
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Senior React and Vue applications. TypeScript, scalable component architecture, performance optimization, and pixel-accurate UI implementation. Built for products that grow.",
    icon: "layout",
  },
  {
    id: "ecommerce",
    title: "Ecommerce & Marketplaces",
    description:
      "Full-stack ecommerce platforms with payment integrations, real-time features, multi-vendor support, and admin tools. Backend, frontend, and design coordinated as one team.",
    icon: "shopping",
  },
  {
    id: "design",
    title: "UI/UX Design & Branding",
    description:
      "In-house design — UI mockups in Figma, branding, marketing materials, and visual systems. Designs that are buildable, not just pretty.",
    icon: "palette",
  },
];
