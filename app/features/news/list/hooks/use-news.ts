"use client";

import { useQuery } from "@tanstack/react-query";

import { newsQueryOptions } from "../queries/news.queries";
import { useNewsListParams } from "./use-news-list-params";

export function useNews() {
  const { q, tab, isPending: isTransitionPending } = useNewsListParams();

  const query = useQuery(newsQueryOptions({ q, tab }));

  return {
    ...query,
    isTransitionPending,
  };
}
