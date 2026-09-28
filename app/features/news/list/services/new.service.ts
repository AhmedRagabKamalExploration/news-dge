import { HttpError } from "../../../../http/http-client";
import { type NewsResponse, type Article } from "../schemas/new.schema";

export async function getNews(): Promise<Array<Article>> {
  const response = await fetch("/api/news");

  if (!response.ok) {
    throw new HttpError(await response.text(), response.status);
  }

  const data: NewsResponse = await response.json();
  return data.articles;
}
