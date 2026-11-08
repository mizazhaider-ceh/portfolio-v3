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

  const inputCls =
    "w-full rounded-lg border border-[var(--line-soft)] bg-[var(--surface)] px-4 py-3 body-3 text-[var(--ink)] placeholder:text-[var(--faint)] fade focus-visible:border-[var(--periwinkle)]";

  if (status === "sent") {
    return (
      <div className="card flex items-start gap-3" role="status">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sage)] text-[var(--green)]" aria-hidden="true">
          <Check size={18} weight="bold" />
        </span>
        <div>
          <p className="title-2">Message sent. Thank you.</p>
          <p className="body-6 mt-2 text-[var(--muted)]">I will reply soon.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card space-y-4" aria-label="Contact form">
      <div>
        <label htmlFor="contact-name" className="title-4 mb-2 block">Name</label>
        <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Your name" className={inputCls} aria-invalid={!!errors.name} aria-describedby={errors.name ? "contact-name-error" : undefined} />
        {errors.name && <p id="contact-name-error" className="caption-2 mt-2 text-[var(--danger)]" role="alert">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="contact-email" className="title-4 mb-2 block">Email</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" className={inputCls} aria-invalid={!!errors.email} aria-describedby={errors.email ? "contact-email-error" : undefined} />
        {errors.email && <p id="contact-email-error" className="caption-2 mt-2 text-[var(--danger)]" role="alert">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="contact-message" className="title-4 mb-2 block">Message</label>
        <textarea id="contact-message" name="message" rows={3} placeholder="What would you like to talk about?" className={inputCls} aria-invalid={!!errors.message} aria-describedby={errors.message ? "contact-message-error" : undefined} />
        {errors.message && <p id="contact-message-error" className="caption-2 mt-2 text-[var(--danger)]" role="alert">{errors.message}</p>}
      </div>
      {status === "error" && (
        <p className="body-6 text-[var(--danger)]" role="alert">Sending failed. Check your connection and try again, or email me directly.</p>
      )}
      <button type="submit" className="btn-primary" disabled={status === "sending"}>
        {status === "sending" ? "Sending" : "Send message"}
      </button>
    </form>
  );
}
