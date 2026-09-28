import {
  ContactEmailConfigurationError,
  ContactEmailDeliveryError,
  sendContactInquiry,
} from "@/lib/email/send-contact-inquiry";
import { contactRequestSchema } from "@/lib/validation/contact";

const MAX_REQUEST_BYTES = 12_288;

function jsonError(status: number, message: string, extra: Record<string, unknown> = {}) {
  return Response.json({ success: false, message, ...extra }, { status });
}

function hasSameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  const forwardedHost = request.headers.get("x-forwarded-host")?.split(",")[0]?.trim();
  const requestHost = forwardedHost || request.headers.get("host");
  if (!requestHost) return false;

  try {
    return new URL(origin).host.toLowerCase() === requestHost.toLowerCase();
  } catch {
    return false;
  }
}

async function readRequestBody(request: Request) {
  if (!request.body) return "";

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let totalBytes = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      totalBytes += value.byteLength;
      if (totalBytes > MAX_REQUEST_BYTES) {
        await reader.cancel();
        return null;
      }

      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }

  const body = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }

  return new TextDecoder().decode(body);
}

export async function POST(request: Request) {
  if (!hasSameOrigin(request)) {
    return jsonError(403, "This request could not be verified. Refresh the page and try again.");
  }

  if (!request.headers.get("content-type")?.toLowerCase().includes("application/json")) {
    return jsonError(415, "Send the contact form as JSON.");
  }

  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_BYTES) {
    return jsonError(413, "The contact form submission is too large.");
  }

  let rawBody: unknown;
  try {
    const body = await readRequestBody(request);
    if (body === null) {
      return jsonError(413, "The contact form submission is too large.");
    }
    rawBody = JSON.parse(body);
  } catch {
    return jsonError(400, "The contact form submission is not valid JSON.");
  }

  const parsed = contactRequestSchema.safeParse(rawBody);
  if (!parsed.success) {
    return jsonError(400, "Check the highlighted fields and try again.", {
      fieldErrors: parsed.error.flatten().fieldErrors,
    });
  }

  if (parsed.data.website) {
    return Response.json({
      success: true,
      message: "Thanks! We’ll get back to you within one business day.",
    });
  }

  const { website: _website, ...submission } = parsed.data;

  try {
    await sendContactInquiry(submission);
    return Response.json({
      success: true,
      message: "Thanks! We’ll get back to you within one business day.",
    });
  } catch (error) {
    if (error instanceof ContactEmailConfigurationError) {
      return jsonError(
        503,
        "The contact form is temporarily unavailable. Please email hello@veerwindows.com.",
      );
    }

    if (error instanceof ContactEmailDeliveryError) {
      console.error("Contact inquiry email delivery failed", {
        providerStatus: error.providerStatus,
      });
      return jsonError(
        502,
        "We couldn’t send your message right now. Please try again or email hello@veerwindows.com.",
      );
    }

    console.error("Unexpected contact inquiry failure");
    return jsonError(500, "We couldn’t send your message right now. Please try again later.");
  }
}
