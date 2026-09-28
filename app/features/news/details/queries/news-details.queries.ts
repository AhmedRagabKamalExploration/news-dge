import { queryOptions } from "@tanstack/react-query";

import {
  ArticleNotFoundError,
  getNewsById,
} from "../services/news-details.service";

const QUERY_KEY = "news";

export const newsDetailsQueryOptions = (encodedId: string) =>
  queryOptions({
    queryKey: [QUERY_KEY, "detail", encodedId],
    queryFn: () => getNewsById(encodedId),
    enabled: encodedId.length > 0,
    retry: (failureCount, error) => {
      if (error instanceof ArticleNotFoundError) {
        return false;
      }
      return failureCount < 1;
    },
  });
