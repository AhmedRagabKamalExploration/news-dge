"use client";

import Link from "next/link";

import { NewsListSkeleton } from "@/app/components/skeleton/news-list-skeleton";
import { cn } from "@/lib/utils";

import { AuthorLogo } from "../../../details/components/author-logo/author-logo";
import { formatRelativeTime } from "../../../details/utils/format-relative-time";
import { useNews } from "../../hooks/use-news";
import { NewsImage } from "./news-image/news-image";
import { EllipsisIcon } from "lucide-react";

export function ListContainer() {
  const {
    data: articles,
    isLoading,
    isFetching,
    error,
    isTransitionPending,
  } = useNews();

  const showInitialLoading = isLoading && articles === undefined;
  const isRefreshing =
    isTransitionPending || (isFetching && articles !== undefined);

  if (showInitialLoading) {
    return <NewsListSkeleton showChrome={false} />;
  }

  if (error) {
    return <div className="py-8 text-red-500">Error: {error.message}</div>;
  }

  const list = articles ?? [];

  if (list.length === 0) {
    return (
      <div className="py-8 text-center text-zinc-500">
        No articles match your search. Try another keyword or tab.
      </div>
    );
  }

  return (
    <div aria-busy={isRefreshing} className="relative">
      <div
        className={cn(
          "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",
          isRefreshing && "opacity-60",
        )}
      >
        {list.map((article) => (
          <Link
            href={`/news/${encodeURIComponent(article.url)}`}
            key={article.url}
            className="flex gap-3 rounded-lg bg-white dark:bg-zinc-900 p-3 transition-colors hover:bg-zinc-50  dark:hover:bg-zinc-900"
          >
            <NewsImage url={article.urlToImage} />
            <div className="min-w-0 flex-1">
              <p className="mt-1 line-clamp-2 text-xs text-zinc-500">
                {article.source.name}
              </p>
              <h2 className="line-clamp-2 text-base font-medium">
                {article.title}
              </h2>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AuthorLogo name={article.source.name} variant="sm" />
                  <p className="mt-1 line-clamp-2 text-xs text-zinc-500">
                    {article.source.name}
                  </p>
                  <p className="mt-1 line-clamp-2 text-xs text-zinc-500">
                    {formatRelativeTime(article.publishedAt)}
                  </p>
                </div>
                <EllipsisIcon className="size-4 text-zinc-500" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
