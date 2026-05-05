import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { ExternalLink, Loader2, ShieldAlert } from "lucide-react";
import type { ProjectPreviewProps } from "./projectPreview.types";
import styles from "./projectPreview.module.scss";

const LOAD_TIMEOUT_MS = 6000;

type Status = "loading" | "ready" | "blocked";

export const ProjectPreview = ({
  title,
  url,
  description,
  previewBlocked,
}: ProjectPreviewProps) => {
  const [status, setStatus] = useState<Status>(
    previewBlocked ? "blocked" : "loading"
  );
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (previewBlocked) return;

    timeoutRef.current = window.setTimeout(() => {
      setStatus((current) => (current === "loading" ? "blocked" : current));
    }, LOAD_TIMEOUT_MS);

    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [previewBlocked]);

  const handleLoad = () => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    setStatus("ready");
  };

  const isBlocked = status === "blocked";

  return (
    <div className={styles.preview}>
      <span className={styles.urlBar}>
        <span className={styles.dot} data-color="red" />
        <span className={styles.dot} data-color="yellow" />
        <span className={styles.dot} data-color="green" />
        <span className={styles.urlText}>{url.replace(/^https?:\/\//, "")}</span>
      </span>

      <div className={styles.frame}>
        {status === "loading" && (
          <div className={styles.loading} aria-live="polite">
            <Loader2 size={20} className={styles.spinner} />
            <span>Loading preview…</span>
          </div>
        )}

        {isBlocked && (
          <div className={styles.fallback} role="status">
            <span className={styles.fallbackTag}>
              <ShieldAlert size={12} />
              Preview not embeddable
            </span>
            <h4>{title}</h4>
            <p>{description}</p>
            <p className={styles.note}>
              This site blocks iframe embedding for security. Open it in a new tab to
              see the live experience.
            </p>
            <a
              className={styles.fallbackLink}
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              Open Project <ExternalLink size={14} />
            </a>
          </div>
        )}

        {!previewBlocked && (
          <iframe
            src={url}
            title={title}
            loading="lazy"
            className={classNames(styles.iframe, {
              [styles.iframeHidden]: status !== "ready",
            })}
            referrerPolicy="no-referrer"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            onLoad={handleLoad}
          />
        )}
      </div>
    </div>
  );
};
