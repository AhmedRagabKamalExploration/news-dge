import { NewsImage } from "@/app/features/news/list/components/list-container/news-image/news-image";

type ArticleHeroProps = {
  url: string | null;
  title: string;
};

export function ArticleHero({ url, title }: ArticleHeroProps) {
  return (
    <NewsImage url={url} variant="lg" alt={title} priority />
  );
}
