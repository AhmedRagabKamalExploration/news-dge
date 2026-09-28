type ArticleContentProps = {
  content: string;
};

export function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none whitespace-pre-wrap text-base leading-relaxed">
      {content}
    </div>
  );
}
