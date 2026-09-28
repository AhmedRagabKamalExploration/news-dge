import { NEWS_TABS, type NewsTabValue } from "./news-tabs";

export const NEWS_LIST_SEARCH_PARAM = {
  q: "q",
  tab: "tab",
} as const;

export function parseNewsTab(value: string | null): NewsTabValue {
  const match = NEWS_TABS.find((tab) => tab.value === value);
  return match?.value ?? "news";
}
