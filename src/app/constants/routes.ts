export const ROUTES = {
  home: "/",
  projects: "/projects",
  about: "/about",
  contact: "/contact",
} as const;

export type RouteKey = keyof typeof ROUTES;
