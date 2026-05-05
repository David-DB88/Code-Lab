import type { HTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./container.module.scss";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: "default" | "wide" | "narrow";
};

export const Container = ({
  className,
  size = "default",
  ...rest
}: ContainerProps) => {
  return (
    <div
      className={classNames(styles.container, styles[size], className)}
      {...rest}
    />
  );
};
