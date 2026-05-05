import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import classNames from "classnames";
import styles from "./select.module.scss";

export type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = {
  name: string;
  options: SelectOption[];
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
};

export const Select = ({
  name,
  options,
  placeholder = "Select…",
  required,
  disabled,
}: SelectProps) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const selectedLabel = options.find((option) => option.value === selected)?.label;

  return (
    <div
      ref={wrapperRef}
      className={classNames(styles.wrapper, {
        [styles.disabled]: disabled,
        [styles.open]: open,
      })}
    >
      <button
        type="button"
        className={styles.trigger}
        onClick={() => !disabled && setOpen((value) => !value)}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={selectedLabel ? styles.value : styles.placeholder}>
          {selectedLabel ?? placeholder}
        </span>
        <ChevronDown size={16} className={styles.chevron} />
      </button>

      {open && (
        <ul className={styles.list} role="listbox">
          {options.map((option) => {
            const isSelected = option.value === selected;
            return (
              <li key={option.value} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  className={classNames(styles.option, {
                    [styles.optionSelected]: isSelected,
                  })}
                  onClick={() => {
                    setSelected(option.value);
                    setOpen(false);
                  }}
                >
                  <span>{option.label}</span>
                  {isSelected && <Check size={14} />}
                </button>
              </li>
            );
          })}
        </ul>
      )}

      <input
        type="hidden"
        name={name}
        value={selected}
        required={required}
      />
    </div>
  );
};
