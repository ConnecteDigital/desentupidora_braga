import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    icon: z.string().default('drain'),
    services: z.array(z.string()).default([]), // slugs de serviços relacionados
  }),
});

export const collections = { blog };
