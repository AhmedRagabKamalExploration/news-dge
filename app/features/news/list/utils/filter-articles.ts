import type { NewsTabValue } from "../constants/news-tabs";
import type { Article } from "../schemas/new.schema";

function matchesQuery(value: string | null | undefined, query: string) {
  return value?.toLowerCase().includes(query) ?? false;
}

export function filterArticles(
  articles: Article[],
  { q, tab }: { q: string; tab: NewsTabValue },
): Article[] {
  const query = q.trim().toLowerCase();
  if (!query) {
    return articles;
  }

  if (tab === "author") {
    return articles.filter((article) => matchesQuery(article.author, query));
  }

  if (tab === "topic") {
    return articles.filter(
      (article) =>
        matchesQuery(article.title, query) ||
        matchesQuery(article.description, query),
    );
  }

  return articles.filter((article) => matchesQuery(article.title, query));
}
