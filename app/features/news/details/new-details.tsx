"use client";

import { ArticleDetails } from "./components/article-details/article-details";
import { ArticleDetailsError } from "./components/article-details-error/article-details-error";
import { ArticleDetailsLoading } from "./components/article-details-loading/article-details-loading";
import { DetailsFooter } from "./components/details-footer/details-footer";
import { DetailsHeader } from "./components/details-header/details-header";
import { useNewsDetails } from "./hooks/use-news-details";

export function NewDetails({ articleId }: { articleId: string }) {
  const { data: article, isLoading, error } = useNewsDetails(articleId);

  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-background">
      <div className="shrink-0 border-b border-zinc-200 bg-background/95 px-6 py-4 backdrop-blur-sm dark:border-zinc-800">
        <DetailsHeader backHref="/news" />
      </div>

      <main className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-6 py-6">
        {isLoading && <ArticleDetailsLoading />}

        {error && <ArticleDetailsError error={error} />}

        {article && <ArticleDetails article={article} />}
      </main>

      <div className="shrink-0 border-t border-zinc-200 bg-background/95 px-6 py-4 backdrop-blur-sm dark:border-zinc-800">
        <DetailsFooter />
      </div>
    </div>
  );
}
