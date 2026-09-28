type ArticleDescriptionProps = {
  description: string;
};

export function ArticleDescription({ description }: ArticleDescriptionProps) {
  return (
    <p className="text-lg text-zinc-700 dark:text-zinc-300">{description}</p>
  );
}
