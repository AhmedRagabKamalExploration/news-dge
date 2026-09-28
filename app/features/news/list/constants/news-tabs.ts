export const NEWS_TABS = [
  { label: "News", value: "news" },
  { label: "Topics", value: "topic" },
  { label: "Authors", value: "author" },
] as const;

export type NewsTabValue = (typeof NEWS_TABS)[number]["value"];
