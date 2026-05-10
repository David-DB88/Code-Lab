import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "../ui/Container/Container";
import { Button } from "../ui/Button/Button";
import { HeroScene } from "./HeroScene/HeroScene";
import styles from "./hero.module.scss";

const HIGHLIGHTS = [
  ".NET / C#",
  "React / Vue",
  "TypeScript",
  "AI Integration",
];

export const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <HeroScene />

      <Container className={styles.inner}>
        <motion.div
          className={styles.copy}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={styles.eyebrow}>
            <Sparkles size={14} />
            Code Lab — A Senior Development Team
          </span>

          <h1 className={styles.title}>
            We build <span className={styles.gradient}>production-grade</span> web
            applications <span className={styles.gradientAlt}>end-to-end</span>.
          </h1>

          <p className={styles.lead}>
            .NET backend, React/Vue frontend, AI integration, and in-house design — under
            one coordinated team. Built for startups, SaaS companies, and fintech.
          </p>

          <div className={styles.actions}>
            <Button
              as="a"
              href="#projects"
              size="lg"
              iconRight={<ArrowRight size={16} />}
            >
              Explore Projects
            </Button>
            <Button as="a" href="/contact" size="lg" variant="secondary">
              Contact Us
            </Button>
          </div>

          <ul className={styles.tags} aria-label="Stack highlights">
            {HIGHLIGHTS.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </motion.div>
      </Container>

      <div className={styles.scrollHint} aria-hidden>
        <span />
      </div>
    </section>
  );
};
