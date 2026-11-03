import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

export const TOPICS = {
  conflict: "Conflict",
  resources: "Supply Chains & Resources",
  ai: "AI for Social Science",
  methods: "Spatial & Network Methods",
} as const;

const papers = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/papers" }),
  schema: z.object({
    title: z.string(),
    // Co-authors only (shown as "with A, B and C"). Leave empty for solo work.
    coauthors: z.array(z.object({ name: z.string(), url: z.string().url().optional() })).default([]),
    authorNote: z.string().optional(), // overrides the "with ..." line, e.g. for book chapters
    type: z.enum(["working", "published", "book"]),
    order: z.number(), // smaller = higher within its section
    year: z.number(),
    topics: z.array(z.enum(Object.keys(TOPICS) as [keyof typeof TOPICS, ...(keyof typeof TOPICS)[]])),
    venue: z.string().optional(), // journal / book (set in italics)
    venueNote: z.string().optional(), // e.g. "No. 2, 2022, pp. 86–123 · In Chinese"
    status: z.string().optional(), // e.g. "Presented at ISA 2025" (shown in italics)
    summary: z.string().optional(), // one-line plain-language summary
    featured: z.boolean().default(false), // show on homepage
    links: z
      .array(z.object({ label: z.string(), href: z.string() }))
      .default([]),
    titleZh: z.string().optional(),
    bibtex: z.string().optional(),
  }),
});

export const collections = { papers };
