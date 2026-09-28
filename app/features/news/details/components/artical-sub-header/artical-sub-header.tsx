import { formatRelativeTime } from "../../utils/format-relative-time";
import { AuthorLogo } from "../author-logo/author-logo";

type ArticalSubHeaderProps = {
  name: string;
  publishedAt: string;
};

export function ArticalSubHeader({ name, publishedAt }: ArticalSubHeaderProps) {
  const relativePublishedAt = formatRelativeTime(publishedAt);

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex min-w-0 items-center gap-2">
        <AuthorLogo name={name} />
        <div className="flex flex-col">
          <p className="truncate text-sm font-bold">{name}</p>
          <p className="truncate text-xs font-medium text-gray-500">
            {relativePublishedAt}
          </p>
        </div>
      </div>
      <button className="rounded-md py-1.5 px-2 text-sm font-bold text-white bg-blue-500 hover:bg-blue-600 dark:hover:bg-zinc-900">
        Following
      </button>
    </div>
  );
}
