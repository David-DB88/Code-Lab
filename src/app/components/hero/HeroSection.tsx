import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "../ui/Container/Container";
import { Button } from "../ui/Button/Button";
import { HeroScene } from "./HeroScene/HeroScene";
import styles from "./hero.module.scss";

const HIGHLIGHTS = [
  "React + TypeScript",
  "Three.js scenes",
  "Framer Motion",
  "Responsive UI",
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
            Code Lab — Software Studio
          </span>

          <h1 className={styles.title}>
            We build digital products that look{" "}
            <span className={styles.gradient}>beautiful</span>, work fast, and{" "}
            <span className={styles.gradientAlt}>scale</span> with your business.
          </h1>

          <p className={styles.lead}>
            Code Lab creates modern web applications, business websites, interactive
            platforms, and custom frontend solutions for companies and startups.
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
            <Button as="a" href="#contact" size="lg" variant="secondary">
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
