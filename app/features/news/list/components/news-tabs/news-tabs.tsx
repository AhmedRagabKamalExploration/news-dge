"use client";

import { cn } from "@/lib/utils";

import { NEWS_TABS } from "../../constants/news-tabs";
import { useNewsListParams } from "../../hooks/use-news-list-params";

export { NEWS_TABS };

export function NewsTabs() {
  const { tab, setParams, isPending } = useNewsListParams();

  return (
    <div
      className="flex gap-4 justify-center"
      role="tablist"
      aria-busy={isPending}
    >
      {NEWS_TABS.map((item) => {
        const isActive = tab === item.value;

        return (
          <button
            key={item.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            disabled={isPending}
            className={cn(
              "text-sm font-medium  py-1.5 transition-colors",
              isActive
                ? "border-b-4 border-blue-600 "
                : "border-b-4 border-transparent hover:border-blue-600 text-gray-500",
            )}
            onClick={() => setParams({ tab: item.value })}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
