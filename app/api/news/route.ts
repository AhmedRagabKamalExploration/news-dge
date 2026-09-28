import { fetchTopHeadlines } from "@/lib/news/fetch-top-headlines";

export async function GET() {
  try {
    const data = await fetchTopHeadlines();
    return Response.json(data);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to fetch news";

    const status = message.includes("NEWS_API_KEY") ? 500 : 502;

    return Response.json({ status: "error", message }, { status });
  }
}
