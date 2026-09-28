import { ArticleNotFoundError } from "../../services/news-details.service";

type ArticleDetailsErrorProps = {
  error: Error;
};

export function ArticleDetailsError({ error }: ArticleDetailsErrorProps) {
  const message =
    error instanceof ArticleNotFoundError
      ? "This article could not be found."
      : error.message;

  return <p className="text-red-500">{message}</p>;
}
