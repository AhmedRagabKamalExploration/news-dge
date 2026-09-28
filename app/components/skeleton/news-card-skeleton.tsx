import { Skeleton } from "./skeleton";

export function NewsCardSkeleton() {
  return (
    <div className="flex gap-3 rounded-lg bg-white p-3">
      <Skeleton className="h-[75px] w-[150px] shrink-0 rounded-md" />
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
        <div className="mt-1 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Skeleton className="size-8 shrink-0 rounded-full" />
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-3 w-14" />
          </div>
          <Skeleton className="size-4 rounded-full" />
        </div>
      </div>
    </div>
  );
}
