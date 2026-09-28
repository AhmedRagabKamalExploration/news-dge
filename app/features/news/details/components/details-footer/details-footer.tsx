import { HeartIcon, MessageCircleIcon, BookmarkIcon } from "lucide-react";

export function DetailsFooter() {
  return (
    <footer className="mx-auto flex w-full max-w-3xl items-center justify-between">
      <div className="flex gap-2">
        <button
          type="button"
          aria-label="Like article"
          className="flex items-center gap-2 rounded-md p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900"
        >
          <HeartIcon className="size-6 text-pink-600 fill-pink-600" />
          <span className="text-sm font-medium">24.5k</span>
        </button>
        <button
          type="button"
          aria-label="Comment on article"
          className="flex items-center gap-2 rounded-md p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900"
        >
          <MessageCircleIcon className="size-6" />
          <span className="text-sm font-medium">1K</span>
        </button>
      </div>

      <button
        type="button"
        aria-label="Share article"
        className="rounded-md p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900"
      >
        <BookmarkIcon className="size-6 text-blue-400 fill-blue-500" />
      </button>
    </footer>
  );
}
