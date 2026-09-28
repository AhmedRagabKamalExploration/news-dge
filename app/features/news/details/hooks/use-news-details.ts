"use client";

import { useQuery } from "@tanstack/react-query";

import { newsDetailsQueryOptions } from "../queries/news-details.queries";

export function useNewsDetails(encodedId: string) {
  return useQuery(newsDetailsQueryOptions(encodedId));
}
