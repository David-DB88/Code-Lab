import { motion } from "framer-motion";
import { Code2, Layers, Rocket, ShieldCheck } from "lucide-react";
import { Container } from "../../components/ui/Container/Container";
import { SectionTitle } from "../../components/ui/SectionTitle/SectionTitle";
import { ContactCta } from "../../components/contactCta/ContactCta";
import styles from "./aboutPage.module.scss";

const PILLARS = [
  {
    id: "studio",
    icon: <Code2 size={20} />,
    title: "A focused studio",
    description:
      "Code Lab is a development studio focused on building modern, fast, and visually polished web applications.",
  },
  {
    id: "stack",
    icon: <Layers size={20} />,
    title: "Strong frontend stack",
    description:
      "We combine clean frontend architecture, strong UI implementation, and interactive technologies.",
  },
  {
    id: "products",
    icon: <Rocket size={20} />,
    title: "Range of products",
    description:
      "Informational websites, entertainment platforms, business websites, and custom interactive applications.",
  },
  {
    id: "trust",
    icon: <ShieldCheck size={20} />,
    title: "Built to be trusted",
    description:
      "We care about clean code, scalable architecture, and the small details that make a product feel reliable.",
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
              We build digital products that <span>feel professional</span>
            </>
          }
          description="Code Lab creates modern, fast, and visually polished web applications. We work across informational websites, entertainment platforms, and business products of different complexity levels."
          className={styles.heading}
        />

        <div className={styles.grid}>
          {PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              className={styles.pillar}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className={styles.iconBox}>{pillar.icon}</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>

      <ContactCta />
    </div>
  );
};
