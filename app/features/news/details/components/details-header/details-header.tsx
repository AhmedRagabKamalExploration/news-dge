import Link from "next/link";
import { ArrowLeftIcon, EllipsisVertical, Share2Icon } from "lucide-react";

type DetailsHeaderProps = {
  backHref?: string;
};

export function DetailsHeader({ backHref = "/news" }: DetailsHeaderProps) {
  return (
    <header className="flex items-center justify-between gap-4">
      <Link
        href={backHref}
        aria-label="Back to news list"
        className="rounded-md p-1 hover:bg-zinc-100 dark:hover:bg-zinc-900"
      >
        <ArrowLeftIcon className="size-6 text-gray-500" />
      </Link>

      <div className="flex gap-2">
        <button
          type="button"
          aria-label="Share article"
          className="rounded-md p-1"
        >
          <Share2Icon className="size-6 text-gray-500" />
        </button>
        <button
          type="button"
          aria-label="More options"
          className="rounded-md p-1"
        >
          <EllipsisVertical className="size-6 text-gray-500" />
        </button>
      </div>
    </header>
  );
}
