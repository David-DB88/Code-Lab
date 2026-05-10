export type WhyPoint = {
  id: string;
  title: string;
  description: string;
};

export const WHY_POINTS: WhyPoint[] = [
  {
    id: "senior-team",
    title: "Senior team, no juniors disguised as seniors",
    description:
      "Backend Lead with 5 years of .NET production experience and a prior career in finance and audit. Frontend Lead with 4+ years at established product companies. In-house designer. No outsourcing.",
  },
  {
    id: "backend-depth",
    title: "Backend depth",
    description:
      "Real production experience with .NET, microservices, complex data access, message queues, and scalable architecture. We build software that runs reliably under load.",
  },
  {
    id: "ai-capability",
    title: "AI integration capability",
    description:
      "We integrate Claude AI into production .NET systems — one of few small teams with hands-on production AI integration experience.",
  },
  {
    id: "in-house-design",
    title: "In-house design",
    description:
      "UI/UX, branding, and visual assets handled by our designer — not subcontracted. Tight coordination between code and design.",
  },
  {
    id: "domain-expertise",
    title: "Domain expertise: Fintech & Audit-Tech",
    description:
      "Real understanding of financial systems, IFRS, internal controls, and compliance requirements — not just developers who can write code in that domain.",
  },
  {
    id: "team-coordination",
    title: "Tight team coordination",
    description:
      "We work as one team, not strangers paired together. No \"frontend waiting for backend\" delays.",
  },
];
