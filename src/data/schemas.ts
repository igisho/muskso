import { z } from "zod";

export const heritageSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  type: z.string().min(1),
  year_start: z.number().int(),
  year_end: z.number().int().optional(),
  importance: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]).optional(),
  authors: z.array(z.string().min(1)).min(1),
  tags: z.array(z.string().min(1)),
  status: z.enum(["verified", "draft", "disputed"]),
  platform: z.string().min(1),
  summary: z.string().min(1).max(300),
  storyMarkdown: z.string().min(1).optional(),
  cover: z.string().optional(),
  coverAlt: z.string().min(1).optional(),
  coverCredit: z.string().min(1).optional(),
  coverSourceUrl: z.string().url().optional(),
  coverOrigin: z.enum(["official", "archive", "own-capture", "press", "unknown"]).optional(),
  coverLicense: z.string().min(1).optional(),
  sources: z.array(z.string().url()),
  company: z.string().optional(),
});

export const personSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  bio: z.string().min(1),
  roles: z.array(z.string().min(1)).min(1),
  periods: z.array(z.string().min(1)).min(1),
  projects: z.array(z.string().min(1)),
});

export const companySchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  overview: z.string().min(1),
  founded: z.number().int(),
  dissolved: z.number().int().optional(),
  milestones: z.array(
    z.object({
      year: z.number().int(),
      event: z.string().min(1),
    })
  ),
  projects: z.array(z.string().min(1)),
});
