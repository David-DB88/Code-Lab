import classNames from "classnames";
import type { ButtonProps } from "./button.types";
import styles from "./button.module.scss";

const SHARED_KEYS = [
  "as",
  "variant",
  "size",
  "iconLeft",
  "iconRight",
  "fullWidth",
  "className",
  "children",
] as const;

const omitSharedKeys = <T extends Record<string, unknown>>(props: T) => {
  const result: Record<string, unknown> = {};
  for (const key in props) {
    if (!SHARED_KEYS.includes(key as (typeof SHARED_KEYS)[number])) {
      result[key] = props[key];
    }
  }
  return result;
};

export const Button = (props: ButtonProps) => {
  const {
    variant = "primary",
    size = "md",
    iconLeft,
    iconRight,
    fullWidth,
    className,
    children,
  } = props;

  const classes = classNames(
    styles.button,
    styles[variant],
    styles[size],
    {
      [styles.fullWidth]: fullWidth,
      [styles.iconOnly]: !children,
    },
    className
  );

  const inner = (
    <>
      {iconLeft && <span className={styles.icon}>{iconLeft}</span>}
      {children && <span className={styles.label}>{children}</span>}
      {iconRight && <span className={styles.icon}>{iconRight}</span>}
    </>
  );

  if (props.as === "a") {
    const rest = omitSharedKeys(props as unknown as Record<string, unknown>);
    return (
      <a
        className={classes}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {inner}
      </a>
    );
  }

  const rest = omitSharedKeys(props as unknown as Record<string, unknown>);
  return (
    <button
      className={classes}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {inner}
    </button>
  );
};
