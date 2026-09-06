import { getSanityConfig } from "@/lib/sanity/config";
import { Studio } from "@/sanity/Studio";

export const dynamic = "force-static";
export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  const config = getSanityConfig();
  if (!config)
    return (
      <main className="mx-auto max-w-xl p-10">
        <h1 className="text-3xl">Connect Sanity</h1>
        <p className="mt-4">
          Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET in your environment, then
          restart or redeploy the app. See docs/sanity.md for setup instructions.
        </p>
      </main>
    );
  return <Studio projectId={config.projectId} dataset={config.dataset} />;
}
