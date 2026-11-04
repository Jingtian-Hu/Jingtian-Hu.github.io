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
    // Full author list in order, including yourself; your own name is set in bold.
    authors: z.array(z.object({ name: z.string(), url: z.string().url().optional() })).default([]),
    authorNote: z.string().optional(), // replaces the author line, e.g. for book chapters
    type: z.enum(["working", "published", "book"]),
    order: z.number(), // smaller = higher within its section
    year: z.number(),
    topics: z.array(z.enum(Object.keys(TOPICS) as [keyof typeof TOPICS, ...(keyof typeof TOPICS)[]])).default([]), // for your own bookkeeping; not shown
    venue: z.string().optional(), // journal / book (set in italics)
    venueNote: z.string().optional(), // e.g. "No. 2, 2022, pp. 86–123 · In Chinese"
    status: z.string().optional(), // e.g. "Presented at ISA 2025" (shown in italics)
    summary: z.string().optional(), // one-line plain-language summary
    featured: z.boolean().default(false), // show on homepage
    links: z
      .array(z.object({ label: z.string(), href: z.string() }))
      .default([]),
    titleZh: z.string().optional(),
    thumbnail: z.string().optional(), // first-page preview, /images/papers/<id>.jpg
    bibtex: z.string().optional(),
  }),
});

export const collections = { papers };
