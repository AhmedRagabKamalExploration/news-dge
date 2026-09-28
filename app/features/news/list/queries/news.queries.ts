import { keepPreviousData, queryOptions } from "@tanstack/react-query";

import type { NewsTabValue } from "../constants/news-tabs";
import { getNews } from "../services/new.service";
import { filterArticles } from "../utils/filter-articles";

const QUERY_KEY = "news";

export type NewsListFilters = {
  q: string;
  tab: NewsTabValue;
};

export const newsQueryOptions = ({ q, tab }: NewsListFilters) =>
  queryOptions({
    queryKey: [QUERY_KEY, { q, tab }],
    queryFn: getNews,
    placeholderData: keepPreviousData,
    select: (data) => filterArticles(data, { q, tab }),
  });
