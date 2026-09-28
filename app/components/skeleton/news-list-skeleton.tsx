import { NewsCardSkeleton } from "./news-card-skeleton";
import { Skeleton } from "./skeleton";

type NewsListSkeletonProps = {
  cardCount?: number;
  showChrome?: boolean;
};

export function NewsListSkeleton({
  cardCount = 6,
  showChrome = true,
}: NewsListSkeletonProps) {
  return (
    <div
      className="flex flex-col gap-4"
      aria-busy
      aria-label="Loading news"
    >
      {showChrome && (
        <>
          <Skeleton className="h-10 w-full rounded-md" />
          <div className="flex justify-center gap-2">
            <Skeleton className="h-9 w-16 rounded-md" />
            <Skeleton className="h-9 w-20 rounded-md" />
            <Skeleton className="h-9 w-20 rounded-md" />
          </div>
        </>
      )}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: cardCount }, (_, index) => (
          <NewsCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
