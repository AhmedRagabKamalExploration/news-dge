import Image from "next/image";

import { cn } from "@/lib/utils";

const IMAGE_VARIANTS = {
  sm: {
    width: 100,
    height: 100,
    imageClassName: "h-[100px] w-[100px]",
    placeholderClassName: "size-[100px]",
  },
  md: {
    width: 320,
    height: 180,
    imageClassName: "h-[180px] w-full max-w-sm",
    placeholderClassName: "h-[180px] w-full max-w-sm",
  },
  lg: {
    width: 960,
    height: 960,
    imageClassName: "aspect-video h-auto w-full max-h-[960px]",
    placeholderClassName: "aspect-video w-full min-h-[200px]",
  },
} as const;

export type NewsImageVariant = keyof typeof IMAGE_VARIANTS;

function isValidImageUrl(url: string | null | undefined): url is string {
  if (!url?.trim()) {
    return false;
  }

  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

type NewsImageProps = {
  url: string | null | undefined;
  variant?: NewsImageVariant;
  alt?: string;
  priority?: boolean;
};

export function NewsImage({
  url,
  variant = "sm",
  alt = "",
  priority = false,
}: NewsImageProps) {
  const { width, height, imageClassName, placeholderClassName } =
    IMAGE_VARIANTS[variant];

  if (!isValidImageUrl(url)) {
    return (
      <div
        aria-hidden
        className={cn(
          "shrink-0 rounded-md bg-zinc-200 dark:bg-zinc-800",
          placeholderClassName,
        )}
      />
    );
  }

  return (
    <Image
      src={url}
      alt={alt}
      decoding="async"
      loading={priority ? "eager" : "lazy"}
      priority={priority}
      width={width}
      height={height}
      sizes={
        variant === "lg"
          ? "(max-width: 768px) 100vw, 960px"
          : variant === "md"
            ? "(max-width: 768px) 100vw, 320px"
            : "150px"
      }
      className={cn("shrink-0 rounded-md object-cover", imageClassName)}
    />
  );
}
