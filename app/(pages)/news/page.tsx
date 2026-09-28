import { Suspense } from "react";

import { NewsListSkeleton } from "@/app/components/skeleton/news-list-skeleton";
import { NewsList } from "@/app/features/news/list/components/news-list";

export default function NewsPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-8 pb-8 sm:px-6 lg:px-8">
          <NewsListSkeleton />
        </div>
      }
    >
      <NewsList />
    </Suspense>
  );
}
