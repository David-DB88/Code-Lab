import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Container } from "../ui/Container/Container";
import { Button } from "../ui/Button/Button";
import styles from "./contactCta.module.scss";

export const ContactCta = () => {
  return (
    <section id="contact" className={styles.section}>
      <Container>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.glow} aria-hidden />

          <div className={styles.content}>
            <span className={styles.eyebrow}>Let's talk</span>
            <h2 className={styles.title}>
              Have an idea?{" "}
              <span className={styles.gradient}>Let's build it together.</span>
            </h2>
            <p className={styles.lead}>
              Tell us what you want to ship — a landing page, a business website, or a
              full interactive product. We'll come back with a clean plan.
            </p>

            <div className={styles.actions}>
              <Button
                as="a"
                href="mailto:code.lab.bis@gmail.com"
                size="lg"
                iconLeft={<Mail size={16} />}
                iconRight={<ArrowRight size={16} />}
              >
                Contact Code Lab
              </Button>
              <Button as="a" href="/contact" size="lg" variant="secondary">
                Get in touch
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
