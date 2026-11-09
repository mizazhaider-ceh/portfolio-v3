import { useState, type FormEvent } from "react";
import { Check } from "@phosphor-icons/react";
import { CONTACT } from "../data";

type Status = "idle" | "sending" | "sent" | "error";

/** Formspree contact form: client side validation, inline errors, calm
    confirmation only after a real send. */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const next: typeof errors = {};
    if (!name) next.name = "Enter your name.";
    if (!email) next.email = "Enter an email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "That email address does not look right. Check it and try again.";
    if (!message) next.message = "Write a message first.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setStatus("sending");
    try {
      const res = await fetch(CONTACT.formspree, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputCls = "input";

  if (status === "sent") {
    return (
      <div className="card flex items-start gap-3" role="status">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center" aria-hidden="true" style={{ color: "var(--ink, #1C1A17)" }}>
          <Check size={18} weight="bold" />
        </span>
        <div>
          <p className="title-small">Message sent. Thank you.</p>
          <p className="body-small mt-2" style={{ color: "var(--muted, #6E6A61)" }}>I will reply soon.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card space-y-4" aria-label="Contact form">
      <div>
        <label htmlFor="contact-name" className="label mb-2 block">Name</label>
        <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Your name" className={inputCls} aria-invalid={!!errors.name} aria-describedby={errors.name ? "contact-name-error" : undefined} />
        {errors.name && <p id="contact-name-error" className="field-error mt-2" role="alert">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="contact-email" className="label mb-2 block">Email</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" className={inputCls} aria-invalid={!!errors.email} aria-describedby={errors.email ? "contact-email-error" : undefined} />
        {errors.email && <p id="contact-email-error" className="field-error mt-2" role="alert">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="contact-message" className="label mb-2 block">Message</label>
        <textarea id="contact-message" name="message" rows={3} placeholder="What would you like to talk about?" className={inputCls} aria-invalid={!!errors.message} aria-describedby={errors.message ? "contact-message-error" : undefined} />
        {errors.message && <p id="contact-message-error" className="field-error mt-2" role="alert">{errors.message}</p>}
      </div>
      {status === "error" && (
        <p className="field-error" role="alert">Sending failed. Check your connection and try again, or <a href={`mailto:${CONTACT.email}`}>email me directly</a>.</p>
      )}
      <button type="submit" className="btn-primary" disabled={status === "sending"}>
        {status === "sending" ? "Sending" : "Send message"}
      </button>
    </form>
  );
}
