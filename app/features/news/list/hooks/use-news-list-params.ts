"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useTransition } from "react";

import {
  NEWS_LIST_SEARCH_PARAM,
  parseNewsTab,
} from "../constants/news-list-params";
import type { NewsTabValue } from "../constants/news-tabs";

type NewsListParamUpdates = {
  q?: string | null;
  tab?: NewsTabValue | null;
};

export function useNewsListParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const q = searchParams.get(NEWS_LIST_SEARCH_PARAM.q) ?? "";
  const tab = parseNewsTab(searchParams.get(NEWS_LIST_SEARCH_PARAM.tab));

  const setParams = useCallback(
    (updates: NewsListParamUpdates) => {
      startTransition(() => {
        const params = new URLSearchParams(searchParams.toString());

        if ("q" in updates) {
          const value = updates.q?.trim();
          if (value) {
            params.set(NEWS_LIST_SEARCH_PARAM.q, value);
          } else {
            params.delete(NEWS_LIST_SEARCH_PARAM.q);
          }
        }

        if ("tab" in updates) {
          const value = updates.tab;
          if (value && value !== "news") {
            params.set(NEWS_LIST_SEARCH_PARAM.tab, value);
          } else {
            params.delete(NEWS_LIST_SEARCH_PARAM.tab);
          }
        }

        const queryString = params.toString();
        router.replace(queryString ? `${pathname}?${queryString}` : pathname, {
          scroll: false,
        });
      });
    },
    [pathname, router, searchParams],
  );

  return { q, tab, setParams, isPending };
}
