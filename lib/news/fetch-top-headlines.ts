import { newsSchema, type NewsResponse } from "@/app/features/news/list/schemas/new.schema";

function getNewsApiKey(): string {
  const apiKey = process.env.NEWS_API_KEY;
  if (!apiKey) {
    throw new Error("NEWS_API_KEY is not configured");
  }
  return apiKey;
}

export async function fetchTopHeadlines(): Promise<NewsResponse> {
  const apiKey = getNewsApiKey();
  const apiUrl = process.env.NEWS_API_URL ?? "https://newsapi.org";
  const apiVersion = process.env.NEWS_API_VERSION ?? "v2";

  const url = `${apiUrl}/${apiVersion}/top-headlines?country=us&apiKey=${encodeURIComponent(apiKey)}`;

  const response = await fetch(url, {
    headers: { Accept: "application/json" },
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `News API error: ${response.status}`);
  }

  const json: unknown = await response.json();
  return newsSchema.parse(json);
}
