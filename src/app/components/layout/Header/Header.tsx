import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import classNames from "classnames";
import { ROUTES } from "../../../constants/routes";
import { Container } from "../../ui/Container/Container";
import styles from "./header.module.scss";

const NAV_LINKS = [
  { to: ROUTES.home, label: "Home" },
  { to: ROUTES.projects, label: "Projects" },
  { to: ROUTES.about, label: "About" },
  { to: ROUTES.contact, label: "Contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className={classNames(styles.header, { [styles.scrolled]: scrolled })}>
      <Container className={styles.inner}>
        <Link to={ROUTES.home} className={styles.brand} onClick={() => setIsOpen(false)}>
          <span className={styles.brandMark} aria-hidden />
          <span className={styles.brandText}>
            Code<span>Lab</span>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === ROUTES.home}
              className={({ isActive }) =>
                classNames(styles.navLink, { [styles.active]: isActive })
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <a href="#contact" className={styles.cta}>
          Start a project
        </a>

        <button
          type="button"
          className={styles.menuButton}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      <div className={classNames(styles.mobile, { [styles.mobileOpen]: isOpen })}>
        <nav className={styles.mobileNav} aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === ROUTES.home}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                classNames(styles.mobileLink, { [styles.active]: isActive })
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className={styles.mobileCta}
          >
            Start a project
          </a>
        </nav>
      </div>
    </header>
  );
};
