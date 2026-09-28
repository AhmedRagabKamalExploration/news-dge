import Link from "next/link";

type ArticleExternalLinkProps = {
  href: string;
};

export function ArticleExternalLink({ href }: ArticleExternalLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
    >
      Read original article
    </Link>
  );
}
