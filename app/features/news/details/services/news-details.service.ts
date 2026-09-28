import { getNews } from "../../list/services/new.service";
import type { Article } from "../../list/schemas/new.schema";

export class ArticleNotFoundError extends Error {
  constructor(readonly articleId: string) {
    super("Article not found");
    this.name = "ArticleNotFoundError";
  }
}

export function decodeArticleId(encodedId: string): string {
  return decodeURIComponent(encodedId);
}

export async function getNewsById(encodedId: string): Promise<Article> {
  const articleUrl = decodeArticleId(encodedId);
  const articles = await getNews();
  const article = articles.find((item) => item.url === articleUrl);

  if (!article) {
    throw new ArticleNotFoundError(encodedId);
  }

  return article;
}
