import type { ContactSubmission } from "@/lib/validation/contact";

const RESEND_EMAILS_URL = "https://api.resend.com/emails";

export class ContactEmailConfigurationError extends Error {
  constructor() {
    super("Contact email delivery is not configured.");
    this.name = "ContactEmailConfigurationError";
  }
}

export class ContactEmailDeliveryError extends Error {
  constructor(readonly providerStatus: number | null = null) {
    super("Contact email delivery failed.");
    this.name = "ContactEmailDeliveryError";
  }
}

export async function sendContactInquiry(submission: ContactSubmission) {
  const apiKey = process.env["RESEND_API_KEY"]?.trim();
  const from = process.env["CONTACT_FROM_EMAIL"]?.trim();
  const to = process.env["CONTACT_TO_EMAIL"]?.trim();

  if (!apiKey || !from || !to) {
    throw new ContactEmailConfigurationError();
  }

  let response: Response;
  try {
    response = await fetch(RESEND_EMAILS_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: submission.email,
        subject: `Website inquiry: ${submission.subject}`,
        text: [
          "A new inquiry was submitted through veerwindows.com.",
          "",
          `Name: ${submission.name}`,
          `Email: ${submission.email}`,
          `Phone: ${submission.phone}`,
          `Subject: ${submission.subject}`,
          "",
          "Message:",
          submission.message,
        ].join("\n"),
      }),
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });
  } catch {
    throw new ContactEmailDeliveryError();
  }

  if (!response.ok) {
    throw new ContactEmailDeliveryError(response.status);
  }
}
