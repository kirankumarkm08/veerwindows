import { z } from "zod";

const phonePattern = /^[+()\d.\s-]+$/;

export const contactSubmissionSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Enter a valid email").max(255, "Email address is too long"),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20, "Phone number is too long")
    .regex(phonePattern, "Enter a valid phone number")
    .refine((value) => (value.match(/\d/g)?.length ?? 0) >= 7, "Enter a valid phone number"),
  subject: z
    .string()
    .trim()
    .min(1, "Please add a subject")
    .max(120, "Subject is too long")
    .refine((value) => !/[\r\n]/.test(value), "Subject must be on one line"),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a bit more about your project")
    .max(1000, "Message must be 1,000 characters or fewer"),
});

export const contactRequestSchema = contactSubmissionSchema
  .extend({ website: z.string().trim().max(200).optional() })
  .strict();

export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;
export type ContactRequest = z.infer<typeof contactRequestSchema>;
export type ContactField = keyof ContactSubmission;
