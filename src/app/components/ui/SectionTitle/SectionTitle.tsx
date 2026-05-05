import classNames from "classnames";
import type { ReactNode } from "react";
import styles from "./sectionTitle.module.scss";

type SectionTitleProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export const SectionTitle = ({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionTitleProps) => {
  return (
    <div
      className={classNames(styles.wrapper, styles[align], className)}
    >
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};
