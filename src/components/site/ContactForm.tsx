"use client";

import { useState, type FormEvent } from "react";
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
    <Reveal
      from="right"
      className="relative bg-white p-5 shadow-[0_28px_80px_-32px_rgba(0,20,30,0.55)] sm:p-8 lg:p-9"
    >
      <form onSubmit={onSubmit} noValidate className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        <div className="sm:col-span-2">
          <p className="eyebrow text-[#a27e3d]">Free consultation</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-heading sm:text-3xl">
            Tell us what you need.
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#71818a]">
            Leave your details and our team will get back to you.
          </p>
        </div>
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
              className="h-12 border border-[#dce3e3] bg-[#f7f9f8] px-4 text-sm text-heading outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15 aria-invalid:border-destructive"
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
            rows={4}
            required
            maxLength={1000}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className="min-h-28 border border-[#dce3e3] bg-[#f7f9f8] p-4 text-sm text-heading outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15 aria-invalid:border-destructive"
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
            className="btn-sweep w-full bg-primary-deep px-8 py-4 text-xs font-extrabold uppercase tracking-[0.16em] text-white transition-colors hover:bg-ink disabled:opacity-60 sm:w-auto"
          >
            {sending ? "Sending…" : "Send Message"}
          </button>
        </div>
      </form>
    </Reveal>
  );
}
