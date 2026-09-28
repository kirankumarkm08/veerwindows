"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

import {
  contactRequestSchema,
  type ContactField,
} from "@/lib/validation/contact";
import { Reveal } from "./Reveal";

const responseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  fieldErrors: z.record(z.string(), z.array(z.string())).optional(),
});

type Field = ContactField;

const FIELDS: { name: Field; label: string; type?: string; full?: boolean }[] = [
  { name: "name", label: "Full name" },
  { name: "email", label: "Email address", type: "email" },
  { name: "phone", label: "Phone number", type: "tel" },
  { name: "subject", label: "Subject" },
];
const FIELD_NAMES = new Set<string>(["name", "email", "phone", "subject", "message"]);

export function ContactForm() {
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [sending, setSending] = useState(false);
  const [responseError, setResponseError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setResponseError("");
    const parsed = contactRequestSchema.safeParse(Object.fromEntries(new FormData(form)));
    if (!parsed.success) {
      const next: Partial<Record<Field, string>> = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0];
        if (typeof field === "string" && FIELD_NAMES.has(field) && !next[field as Field]) {
          next[field as Field] = issue.message;
        }
      }
      setErrors(next);
      return;
    }

    setErrors({});
    setResponseError("");
    setSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const responseBody: unknown = await response.json();
      const result = responseSchema.safeParse(responseBody);

      if (!result.success) {
        throw new Error("We couldn’t send your message. Please try again.");
      }

      if (!response.ok || !result.data.success) {
        const next: Partial<Record<Field, string>> = {};
        for (const [field, messages] of Object.entries(result.data.fieldErrors ?? {})) {
          if (FIELD_NAMES.has(field) && messages[0]) next[field as Field] = messages[0];
        }
        setErrors(next);
        setResponseError(result.data.message);
        toast.error(result.data.message);
        return;
      }

      form.reset();
      toast.success(result.data.message);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "We couldn’t send your message. Please try again.";
      setResponseError(message);
      toast.error(message);
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="section">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-6 lg:grid-cols-[1fr_1.2fr]">
        <Reveal from="left">
          <h2 className="text-3xl sm:text-4xl">Get in touch</h2>
          <ul className="mt-8 grid gap-6 text-sm text-muted-foreground">
            <li className="flex gap-4">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
              <span>
                <strong className="block text-foreground">Veer Windows</strong>
                Sy No.05, Shed No-8, 2nd Cross Gangondanahalli, Post, Lakshmipura, Bengaluru,
                Karnataka 562162
              </span>
            </li>
            <li className="flex gap-4">
              <Phone className="mt-0.5 size-5 shrink-0 text-primary" />
              <span>
                <strong className="block text-foreground">Toll-free</strong>
                <a href="tel:08150995171" className="hover:text-primary">
                  081509 95171
                </a>
              </span>
            </li>
            <li className="flex gap-4">
              <Mail className="mt-0.5 size-5 shrink-0 text-primary" />
              <span>
                <strong className="block text-foreground">Email</strong>
                <a href="mailto:hello@veerwindows.com" className="hover:text-primary">
                  hello@veerwindows.com
                </a>
              </span>
            </li>
          </ul>
        </Reveal>

        <Reveal from="right">
          <form
            onSubmit={onSubmit}
            noValidate
            className="grid gap-6 border border-border bg-surface p-8 sm:grid-cols-2"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-[10000px] size-px overflow-hidden"
            >
              <label htmlFor="website">Leave this field empty</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            {FIELDS.map((f) => (
              <div key={f.name} className="grid gap-2">
                <label
                  htmlFor={f.name}
                  className="text-xs font-extrabold uppercase tracking-[0.16em] text-foreground"
                >
                  {f.label}
                </label>
                <input
                  id={f.name}
                  name={f.name}
                  type={f.type ?? "text"}
                  required
                  autoComplete={
                    f.name === "name"
                      ? "name"
                      : f.name === "email"
                        ? "email"
                        : f.name === "phone"
                          ? "tel"
                          : "off"
                  }
                  aria-invalid={Boolean(errors[f.name])}
                  aria-describedby={errors[f.name] ? `${f.name}-error` : undefined}
                  className="h-12 border border-input bg-background px-4 text-sm outline-none transition-colors focus:border-primary aria-invalid:border-destructive"
                />
                {errors[f.name] && (
                  <p id={`${f.name}-error`} className="text-xs font-semibold text-destructive">
                    {errors[f.name]}
                  </p>
                )}
              </div>
            ))}
            <div className="grid gap-2 sm:col-span-2">
              <label
                htmlFor="message"
                className="text-xs font-extrabold uppercase tracking-[0.16em] text-foreground"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                maxLength={1000}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                className="border border-input bg-background p-4 text-sm outline-none transition-colors focus:border-primary aria-invalid:border-destructive"
              />
              {errors.message && (
                <p id="message-error" className="text-xs font-semibold text-destructive">
                  {errors.message}
                </p>
              )}
            </div>
            <div className="sm:col-span-2">
              {responseError && (
                <p role="alert" className="mb-4 text-sm font-semibold text-destructive">
                  {responseError}
                </p>
              )}
              <button
                type="submit"
                disabled={sending}
                className="btn-sweep bg-primary-deep px-8 py-4 text-xs font-extrabold uppercase tracking-[0.16em] text-white disabled:opacity-60"
              >
                {sending ? "Sending…" : "Send Message"}
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
