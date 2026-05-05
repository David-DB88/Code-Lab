import { Link } from "react-router-dom";
import { Code2, Mail, Send } from "lucide-react";
import { ROUTES } from "../../../constants/routes";
import { Container } from "../../ui/Container/Container";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <div className={styles.lead}>
          <span className={styles.brand}>Code Lab</span>
          <p>
            We build modern web applications, interactive digital products, and scalable solutions that grow with your business.
          </p>
        </div>

        <nav className={styles.links} aria-label="Footer">
          <Link to={ROUTES.home}>Home</Link>
          <Link to={ROUTES.projects}>Projects</Link>
          <Link to={ROUTES.about}>About</Link>
          <Link to={ROUTES.contact}>Contact</Link>
        </nav>

        <div className={styles.socials}>
          <a
            href="mailto:code.lab.bis@gmail.com"
            aria-label="Email"
            className={styles.iconLink}
          >
            <Mail size={18} />
          </a>
          <a
            href="https://t.me/CodeLabBisBot"
            target="_blank"
            rel="noreferrer"
            aria-label="Telegram"
            className={styles.iconLink}
          >
            <Send size={18} />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className={styles.iconLink}
          >
            <Code2 size={18} />
          </a>
        </div>
      </Container>

      <Container className={styles.bottom}>
        <span>© {new Date().getFullYear()} Code Lab. All rights reserved.</span>
        <span className={styles.tag}>Crafted with React, TypeScript &amp; Three.js</span>
      </Container>
    </footer>
  );
};
