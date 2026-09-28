import type { Article } from "@/app/features/news/list/schemas/new.schema";

import { ArticleContent } from "../article-content/article-content";
import { ArticleDescription } from "../article-description/article-description";
import { ArticleExternalLink } from "../article-external-link/article-external-link";
import { ArticleHero } from "../article-hero/article-hero";
import { ArticleMeta } from "../article-meta/article-meta";
import { ArticalSubHeader } from "../artical-sub-header/artical-sub-header";

type ArticleDetailsProps = {
  article: Article;
};

export function ArticleDetails({ article }: ArticleDetailsProps) {
  return (
    <article className="mx-auto flex w-full max-w-3xl flex-col gap-6">
      <ArticalSubHeader
        name={article.source.name}
        publishedAt={article.publishedAt}
      />
      <ArticleHero url={article.urlToImage} title={article.title} />
      <ArticleMeta
        sourceName={article.source.name}
        title={article.title}
        author={article.author}
        publishedAt={article.publishedAt}
      />
      {article.description && (
        <ArticleDescription description={article.description} />
      )}
      {article.content && <ArticleContent content={article.content} />}
      <ArticleExternalLink href={article.url} />
    </article>
  );
}
