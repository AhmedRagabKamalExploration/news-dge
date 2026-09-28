import { z } from "zod";

const ArticleSchema = z.object({
  author: z.string().nullable(),
  title: z.string(),
  description: z.string().nullable(),
  url: z.string(),
  urlToImage: z.string().nullable(),
  publishedAt: z.string(),
  content: z.string().nullable(),
  source: z.object({
    id: z.string(),
    name: z.string(),
  }),
});

export const newsSchema = z.object({
  status: z.string(),
  totalResults: z.number(),
  articles: z.array(ArticleSchema),
});

export type NewsResponse = z.infer<typeof newsSchema>;

export type Article = z.infer<typeof ArticleSchema>;
