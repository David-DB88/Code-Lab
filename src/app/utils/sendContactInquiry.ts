const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;
const TELEGRAM_ENDPOINT = TELEGRAM_BOT_TOKEN
  ? `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`
  : "";

export type ContactInquiry = {
  name: string;
  email: string;
  type: string;
  message: string;
};

export type SendResult = {
  ok: boolean;
  errorMessage?: string;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const buildTelegramMessage = (inquiry: ContactInquiry) => {
  const name = escapeHtml(inquiry.name);
  const email = escapeHtml(inquiry.email);
  const type = escapeHtml(inquiry.type || "—");
  const message = escapeHtml(inquiry.message);

  return [
    "🆕 <b>New project inquiry — Code Lab</b>",
    "",
    `👤 <b>Name:</b> ${name}`,
    `📧 <b>Email:</b> <a href="mailto:${email}">${email}</a>`,
    `🏷 <b>Type:</b> ${type}`,
    "",
    "💬 <b>Message:</b>",
    message,
  ].join("\n");
};

const sendToWeb3Forms = async (
  formData: FormData
): Promise<SendResult> => {
  if (!WEB3FORMS_ACCESS_KEY) {
    return {
      ok: false,
      errorMessage: "Email service is not configured (missing VITE_WEB3FORMS_ACCESS_KEY).",
    };
  }

  formData.append("access_key", WEB3FORMS_ACCESS_KEY);
  formData.append("subject", "New project inquiry — Code Lab");
  formData.append("from_name", "Code Lab Website");

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.success) return { ok: true };
    return { ok: false, errorMessage: data.message ?? "Email delivery failed." };
  } catch {
    return { ok: false, errorMessage: "Network error reaching email service." };
  }
};

const sendToTelegram = async (
  inquiry: ContactInquiry
): Promise<SendResult> => {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    return {
      ok: false,
      errorMessage:
        "Telegram is not configured (missing VITE_TELEGRAM_BOT_TOKEN or VITE_TELEGRAM_CHAT_ID).",
    };
  }

  const params = new URLSearchParams({
    chat_id: TELEGRAM_CHAT_ID,
    text: buildTelegramMessage(inquiry),
    parse_mode: "HTML",
    disable_web_page_preview: "true",
  });

  try {
    const response = await fetch(TELEGRAM_ENDPOINT, {
      method: "POST",
      body: params,
    });
    const data = await response.json();
    if (data.ok) return { ok: true };
    console.error("Telegram delivery failed:", data);
    return {
      ok: false,
      errorMessage: data.description ?? "Telegram delivery failed.",
    };
  } catch (error) {
    console.error("Telegram fetch error:", error);
    return { ok: false, errorMessage: "Network error reaching Telegram." };
  }
};

export type SendInquiryResult = {
  ok: boolean;
  email: SendResult;
  telegram: SendResult;
  errorMessage?: string;
};

export const sendContactInquiry = async (
  formData: FormData,
  inquiry: ContactInquiry
): Promise<SendInquiryResult> => {
  const [emailResult, telegramResult] = await Promise.all([
    sendToWeb3Forms(formData),
    sendToTelegram(inquiry),
  ]);

  const ok = emailResult.ok || telegramResult.ok;
  const errorMessage = ok
    ? undefined
    : emailResult.errorMessage ??
      telegramResult.errorMessage ??
      "Submission failed. Please try again.";

  return { ok, email: emailResult, telegram: telegramResult, errorMessage };
};
