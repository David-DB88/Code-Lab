import { motion } from "framer-motion";
import {
  Brain,
  Layers,
  Layout,
  Palette,
  Server,
  ShoppingBag,
} from "lucide-react";
import type { Service } from "../services.constants";
import styles from "./serviceCard.module.scss";

const ICONS = {
  layers: Layers,
  server: Server,
  brain: Brain,
  layout: Layout,
  shopping: ShoppingBag,
  palette: Palette,
} as const;

type ServiceCardProps = {
  title: string;
  description: string;
  icon: Service["icon"];
  index: number;
};

export const ServiceCard = ({ title, description, icon, index }: ServiceCardProps) => {
  const Icon = ICONS[icon];

  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.iconWrap}>
        <Icon size={20} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.shine} aria-hidden />
    </motion.article>
  );
};
