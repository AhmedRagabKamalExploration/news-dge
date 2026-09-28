import { formatPublishedAt } from "../../utils/format-published-at";

type ArticleMetaProps = {
  sourceName: string;
  title: string;
  author: string | null;
  publishedAt: string;
};

export function ArticleMeta({
  sourceName,
  title,
  author,
  publishedAt,
}: ArticleMetaProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm text-zinc-500">{sourceName}</p>
      <h1 className="text-2xl font-semibold leading-tight">{title}</h1>
      <p className="text-sm text-zinc-500">
        {author ? `${author} · ` : null}
        {formatPublishedAt(publishedAt)}
      </p>
    </div>
  );
}
