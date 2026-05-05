import { motion } from "framer-motion";
import { Container } from "../ui/Container/Container";
import { SectionTitle } from "../ui/SectionTitle/SectionTitle";
import { PROCESS_STEPS } from "./process.constants";
import styles from "./process.module.scss";

export const ProcessSection = () => {
  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle
          align="center"
          eyebrow="How we work"
          title={
            <>
              From idea to <span>production</span> in five clean steps
            </>
          }
          description="A proven, transparent process — so you always know where the project stands and where it's going."
        />

        <ol className={styles.timeline}>
          {PROCESS_STEPS.map((step, index) => (
            <motion.li
              key={step.id}
              className={styles.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className={styles.step_index}>{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  );
};
