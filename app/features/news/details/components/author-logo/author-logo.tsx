import { cn } from "@/lib/utils";

const AUTHOR_LOGO_VARIANTS = {
  sm: {
    container: "size-8 text-[10px]",
  },
  md: {
    container: "size-12 text-xs",
  },
} as const;

export type AuthorLogoVariant = keyof typeof AUTHOR_LOGO_VARIANTS;

type AuthorLogoProps = {
  name: string;
  variant?: AuthorLogoVariant;
};

export function AuthorLogo({ name, variant = "md" }: AuthorLogoProps) {
  const { container } = AUTHOR_LOGO_VARIANTS[variant];

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full bg-zinc-100 font-semibold dark:bg-zinc-800",
        container,
      )}
    >
      {name.slice(0, 2).toUpperCase()}
    </div>
  );
}
