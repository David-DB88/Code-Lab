import { useState, type FormEvent, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Check,
  CheckCircle2,
  Copy,
  Loader2,
  Mail,
  MapPin,
  Send,
  TriangleAlert,
} from "lucide-react";
import classNames from "classnames";
import { Container } from "../../components/ui/Container/Container";
import { SectionTitle } from "../../components/ui/SectionTitle/SectionTitle";
import { Button } from "../../components/ui/Button/Button";
import { Select } from "../../components/ui/Select/Select";
import { sendContactInquiry } from "../../utils/sendContactInquiry";
import styles from "./contactPage.module.scss";

const PROJECT_TYPES = [
  { value: "Landing page", label: "Landing page" },
  { value: "Business website", label: "Business website" },
  { value: "Web application", label: "Web application" },
  { value: "Other", label: "Other" },
];

type SubmitStatus = "idle" | "sending" | "success" | "error";

type Channel = {
  id: string;
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
  copyable?: boolean;
};

const CHANNELS: Channel[] = [
  {
    id: "email",
    icon: <Mail size={18} />,
    label: "Email",
    value: "code.lab.bis@gmail.com",
    copyable: true,
  },
  {
    id: "telegram",
    icon: <Send size={18} />,
    label: "Telegram",
    value: "@CodeLabDev",
    href: "https://t.me/CodeLabDev",
  },
  {
    id: "location",
    icon: <MapPin size={18} />,
    label: "Studio",
    value: "Remote-first, EU & Armenia",
  },
];

export const ContactPage = () => {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      window.setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // ignore — older browsers without clipboard API
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const inquiry = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      type: String(formData.get("type") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    setStatus("sending");
    setErrorMessage(null);

    const result = await sendContactInquiry(formData, inquiry);

    if (result.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
      setErrorMessage(
        result.errorMessage ?? "Submission failed. Please try again."
      );
    }
  };

  const isSending = status === "sending";

  return (
    <div className={styles.page}>
      <Container>
        <SectionTitle
          align="center"
          eyebrow="Get in touch"
          title={
            <>
              Tell us about your <span>project</span>
            </>
          }
          description="Send a short brief and we'll get back within one business day. You can also reach us on any of the channels below."
          className={styles.heading}
        />

        <div className={styles.layout}>
          <motion.aside
            className={styles.channels}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3>Direct channels</h3>
            <ul>
              {CHANNELS.map((channel) => (
                <li key={channel.id}>
                  <span className={styles.channelIcon}>{channel.icon}</span>
                  <div>
                    <span className={styles.channelLabel}>{channel.label}</span>
                    {channel.copyable ? (
                      <button
                        type="button"
                        className={styles.copyButton}
                        onClick={() => handleCopy(channel.id, channel.value)}
                        aria-label={`Copy ${channel.label}`}
                      >
                        <span>{channel.value}</span>
                        {copiedId === channel.id ? (
                          <Check size={14} className={styles.copiedIcon} />
                        ) : (
                          <Copy size={14} className={styles.copyIcon} />
                        )}
                      </button>
                    ) : channel.href ? (
                      <a
                        href={channel.href}
                        target={channel.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                      >
                        {channel.value}
                      </a>
                    ) : (
                      <span>{channel.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </motion.aside>

          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            noValidate
          >
            <label className={styles.field}>
              <span>Your name</span>
              <input
                type="text"
                name="name"
                placeholder="Jane Doe"
                required
                disabled={isSending}
              />
            </label>

            <label className={styles.field}>
              <span>Email</span>
              <input
                type="email"
                name="email"
                placeholder="jane@company.com"
                required
                disabled={isSending}
              />
            </label>

            <div className={styles.field}>
              <span>Project type</span>
              <Select
                name="type"
                placeholder="Choose a project type…"
                options={PROJECT_TYPES}
                disabled={isSending}
              />
            </div>

            <label className={styles.field}>
              <span>Message</span>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us a bit about your idea, goals, and timeline."
                required
                disabled={isSending}
              />
            </label>

            {/* Web3Forms honeypot — should stay empty */}
            <input
              type="checkbox"
              name="botcheck"
              className={styles.honeypot}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <Button
              size="lg"
              type="submit"
              disabled={isSending}
              iconRight={
                isSending ? (
                  <Loader2 size={16} className={styles.spinner} />
                ) : (
                  <Send size={16} />
                )
              }
            >
              {isSending ? "Sending…" : "Send message"}
            </Button>

            {status === "success" && (
              <div
                className={classNames(styles.banner, styles.bannerSuccess)}
                role="status"
              >
                <CheckCircle2 size={18} />
                <div>
                  <strong>Message sent!</strong>
                  <span>
                    We received your inquiry and will reply within one business day.
                  </span>
                </div>
              </div>
            )}

            {status === "error" && (
              <div
                className={classNames(styles.banner, styles.bannerError)}
                role="alert"
              >
                <TriangleAlert size={18} />
                <div>
                  <strong>Couldn't send the message.</strong>
                  <span>
                    {errorMessage ?? "Please try again or email us directly."}
                  </span>
                </div>
              </div>
            )}

            {status === "idle" && (
              <p className={styles.notice}>
                We never share your details — they go straight to our team inbox.
              </p>
            )}
          </motion.form>
        </div>
      </Container>
    </div>
  );
};
