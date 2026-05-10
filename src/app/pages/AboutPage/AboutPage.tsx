import { motion } from "framer-motion";
import {
  Brain,
  Briefcase,
  Code2,
  Globe2,
  MapPin,
  Palette,
  Server,
  Sparkles,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";
import { Container } from "../../components/ui/Container/Container";
import { SectionTitle } from "../../components/ui/SectionTitle/SectionTitle";
import { ContactCta } from "../../components/contactCta/ContactCta";
import styles from "./aboutPage.module.scss";

type TeamMember = {
  id: string;
  role: string;
  name?: string;
  icon: ReactNode;
  description: string;
  highlights: string[];
};

const TEAM: TeamMember[] = [
  {
    id: "backend",
    role: "Backend Lead",
    icon: <Server size={20} />,
    description:
      "5 years of production .NET experience (.NET 7/8/9/10, EF Core, Dapper, RabbitMQ, Redis, microservices). Prior career in finance and audit. Strong on Clean Architecture, complex data access, and AI integration with the Anthropic SDK.",
    highlights: [".NET / C#", "EF Core", "RabbitMQ", "Redis", "Microservices", "Claude AI"],
  },
  {
    id: "frontend",
    role: "Frontend Lead",
    icon: <Code2 size={20} />,
    description:
      "4+ years building production React and Vue applications at established product companies. Deep experience with TypeScript, performance optimization, complex UI work, and analytical/marketplace platforms.",
    highlights: ["React", "Vue", "TypeScript", "Three.js", "Performance"],
  },
  {
    id: "design",
    role: "Designer",
    icon: <Palette size={20} />,
    description:
      "4+ years of design experience across digital and print. Branding, UI mockups, marketing graphics, and visual systems. Adobe Photoshop, Illustrator, Figma, and CorelDRAW.",
    highlights: ["Figma", "Photoshop", "Illustrator", "Branding", "UI/UX"],
  },
];

const BELIEFS = [
  {
    id: "senior-speed",
    icon: <Users size={18} />,
    text: "Senior teams ship faster than mid-level teams.",
  },
  {
    id: "backend-depth",
    icon: <Server size={18} />,
    text: "Backend depth matters as much as frontend polish.",
  },
  {
    id: "ai-real",
    icon: <Brain size={18} />,
    text: "AI integration is a real capability, not a buzzword.",
  },
  {
    id: "team-beats",
    icon: <Briefcase size={18} />,
    text: "Coordinated teams beat freelancer marketplaces.",
  },
  {
    id: "details",
    icon: <Sparkles size={18} />,
    text:
      "The small details — naming, structure, motion, error handling — are what make software feel professional.",
  },
];

export const AboutPage = () => {
  return (
    <div className={styles.page}>
      <Container>
        <SectionTitle
          align="center"
          eyebrow="About Code Lab"
          title={
            <>
              A small senior team building <span>production-grade</span> software
            </>
          }
          description="Code Lab is a small senior development team based in Yerevan, Armenia. We build production-grade web applications end-to-end — backend, frontend, and design — under one coordinated team."
          className={styles.heading}
        />

        <h3 className={styles.sectionLabel}>The team</h3>
        <div className={styles.teamGrid}>
          {TEAM.map((member, index) => (
            <motion.article
              key={member.id}
              className={styles.member}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className={styles.memberHeader}>
                <div className={styles.iconBox}>{member.icon}</div>
                <div>
                  <span className={styles.role}>{member.role}</span>
                  {member.name && <h4 className={styles.name}>{member.name}</h4>}
                </div>
              </div>
              <p className={styles.memberDescription}>{member.description}</p>
              <ul className={styles.memberTags}>
                {member.highlights.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <h3 className={styles.sectionLabel}>What we believe</h3>
        <ul className={styles.beliefs}>
          {BELIEFS.map((belief, index) => (
            <motion.li
              key={belief.id}
              className={styles.belief}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className={styles.beliefIcon}>{belief.icon}</span>
              <span>{belief.text}</span>
            </motion.li>
          ))}
        </ul>

        <motion.div
          className={styles.location}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.locationIcon}>
            <Globe2 size={20} />
          </div>
          <div>
            <h3 className={styles.locationTitle}>
              <MapPin size={14} />
              Where we work
            </h3>
            <p>
              Yerevan, Armenia (GMT+4). Strong overlap with European and Middle East
              working hours. Available for remote engagements globally.
            </p>
          </div>
        </motion.div>
      </Container>

      <ContactCta />
    </div>
  );
};
