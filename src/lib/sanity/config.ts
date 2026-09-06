export function getSanityConfig() {
  const projectId = process.env["NEXT_PUBLIC_SANITY_PROJECT_ID"]?.trim();
  const dataset = process.env["NEXT_PUBLIC_SANITY_DATASET"]?.trim() || "production";
  if (!projectId) return null;
  if (!/^[a-z0-9]+$/.test(projectId) || !/^[a-z0-9_-]+$/.test(dataset)) {
    throw new Error("Invalid Sanity project configuration.");
  }
  return { projectId, dataset, apiVersion: "2026-09-01" };
}
