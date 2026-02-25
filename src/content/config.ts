import { defineCollection, z } from 'astro:content';

const aktuelles = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        category: z.string().default('Allgemein'),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
    }),
});

export const collections = { aktuelles };
