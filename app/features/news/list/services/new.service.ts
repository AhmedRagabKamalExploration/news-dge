import { httpClient } from "../../../../http/http-client";
import { type NewsResponse, type Article } from "../schemas/new.schema";

export async function getNews(): Promise<Array<Article>> {
  const response = await httpClient.get<NewsResponse>(
    "top-headlines?country=us&apiKey=7036b09db7e64f24891a22c6e5ab54b9",
  );
  return response.articles;
}
