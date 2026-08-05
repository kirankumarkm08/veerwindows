"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

import { Reveal } from "./Reveal";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  subject: z.string().trim().min(1, "Please add a subject").max(120),
  message: z.string().trim().min(10, "Tell us a bit more about your project").max(1000),
});

type Field = keyof z.infer<typeof schema>;

const FIELDS: { name: Field; label: string; type?: string; full?: boolean }[] = [
  { name: "name", label: "Full name" },
  { name: "email", label: "Email address", type: "email" },
  { name: "phone", label: "Phone number", type: "tel" },
  { name: "subject", label: "Subject" },
];

export function ContactForm() {
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [sending, setSending] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Partial<Record<Field, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as Field;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setSending(true);
    setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Thanks! We'll get back to you within one business day.");
    }, 600);
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
                  className="h-12 border border-input bg-background px-4 text-sm outline-none transition-colors focus:border-primary"
                />
                {errors[f.name] && (
                  <p className="text-xs font-semibold text-destructive">{errors[f.name]}</p>
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
                className="border border-input bg-background p-4 text-sm outline-none transition-colors focus:border-primary"
              />
              {errors.message && (
                <p className="text-xs font-semibold text-destructive">{errors.message}</p>
              )}
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={sending}
                className="btn-sweep bg-primary-deep px-8 py-4 text-xs font-extrabold uppercase tracking-[0.16em] text-white disabled:opacity-60"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
