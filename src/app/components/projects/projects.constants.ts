import type { Project } from "./types/project.types";

export const PROJECTS: Project[] = [
  {
    id: "movie-hub",
    title: "Movie Hub",
    url: "https://movie-hub-swart.vercel.app",
    description:
      "A modern movie browsing platform where users can explore movies and discover content through a clean and responsive interface.",
    category: "Entertainment Platform",
  },
  {
    id: "aikikai-armenia",
    title: "Aikikai Armenia",
    url: "https://aikikai.am/",
    description:
      "An informational website for an Aikido organization, presenting activities, philosophy, and official information in a structured way.",
    category: "Organization Website",
  },
  {
    id: "terlemezyan",
    title: "Terlemezyan",
    url: "https://terlemezyan.com/",
    description:
      "A public website with a clean design and structured content presentation for an educational or cultural institution.",
    category: "Institutional Website",
  },
  {
    id: "dcp",
    title: "DCP",
    url: "https://new.dcp.am/",
    description:
      "A professional business website focused on presenting company services, information, and digital presence.",
    category: "Business Website",
  },
  {
    id: "animehub",
    title: "AnimeHub",
    url: "https://animehub.club/",
    description:
      "An anime-focused content platform with a modern interface for browsing and discovering anime content.",
    category: "Entertainment Platform",
    previewBlocked: true,
  },
];
