import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container } from "../ui/Container/Container";
import { SectionTitle } from "../ui/SectionTitle/SectionTitle";
import { WHY_POINTS } from "./why.constants";
import styles from "./why.module.scss";

export const WhySection = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <SectionTitle
            eyebrow="Why Code Lab"
            title={
              <>
                Built to <span>last</span>, designed to feel premium
              </>
            }
            description="We treat every project like a long-term product, not a quick deliverable. Every decision serves clarity, scale, and the experience the user actually feels."
            className={styles.intro}
          />

          <ul className={styles.points}>
            {WHY_POINTS.map((point, index) => (
              <motion.li
                key={point.id}
                className={styles.point}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className={styles.bullet} aria-hidden>
                  <Check size={14} />
                </span>
                <div>
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};
