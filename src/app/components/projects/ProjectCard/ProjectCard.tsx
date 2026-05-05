import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ProjectCardProps } from "./projectCard.types";
import { ProjectPreview } from "../ProjectPreview/ProjectPreview";
import styles from "./projectCard.module.scss";

export const ProjectCard = ({
  title,
  description,
  category,
  url,
  previewBlocked,
  index = 0,
}: ProjectCardProps) => {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <ProjectPreview
        title={title}
        url={url}
        description={description}
        previewBlocked={previewBlocked}
      />

      <div className={styles.body}>
        <span className={styles.category}>{category}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.actions}>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className={styles.openLink}
          >
            Open Project
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </motion.article>
  );
};
