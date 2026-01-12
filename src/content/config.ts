import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    ageRange: z.string(),
    heroImage: z.string(),
    published: z.boolean().default(true),
    priority: z.number().min(0).max(100).default(50),
    lastmod: z.string().optional(),
    faq: z.array(z.object({
      q: z.string(),
      a: z.string(),
    })).default([]),
  }),
});

export const collections = { services };
