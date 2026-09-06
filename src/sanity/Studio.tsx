"use client";

import { NextStudio } from "next-sanity/studio";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";

export function Studio({ projectId, dataset }: { projectId: string; dataset: string }) {
  return (
    <NextStudio
      config={defineConfig({
        name: "veer-windows",
        title: "Veer Windows",
        projectId,
        dataset,
        basePath: "/studio",
        plugins: [structureTool()],
        schema: { types: schemaTypes },
      })}
    />
  );
}
