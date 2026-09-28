"use client";

import { SearchIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { useNewsListParams } from "../../hooks/use-news-list-params";

const SEARCH_DEBOUNCE_MS = 300;

export function Search() {
  const { q, setParams, isPending } = useNewsListParams();
  const [draft, setDraft] = useState(q);
  const [prevQ, setPrevQ] = useState(q);

  if (q !== prevQ) {
    setPrevQ(q);
    setDraft(q);
  }

  useEffect(() => {
    const nextQuery = draft.trim();
    const currentQuery = q.trim();

    if (nextQuery === currentQuery) {
      return;
    }

    if (nextQuery === "") {
      setParams({ q: null });
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setParams({ q: nextQuery });
    }, SEARCH_DEBOUNCE_MS);

    return () => window.clearTimeout(timeoutId);
  }, [draft, q, setParams]);

  const commitSearch = () => {
    setParams({ q: draft.trim() || null });
  };

  const clearSearch = () => {
    setDraft("");
    setParams({ q: null });
  };

  return (
    <form
      className="relative"
      onSubmit={(event) => {
        event.preventDefault();
        commitSearch();
      }}
    >
      <SearchIcon className="size-6 text-muted-foreground absolute left-2 top-1/2 -translate-y-1/2" />
      <input
        type="search"
        placeholder="Search for news"
        className="w-full rounded-md border border-gray-300 p-2 pl-10 pr-10"
        value={draft}
        aria-busy={isPending}
        onChange={(event) => setDraft(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            commitSearch();
          }
        }}
      />
      {draft.length > 0 && (
        <button
          type="button"
          aria-label="Clear search"
          className="absolute right-2 top-1/2 -translate-y-1/2"
          onClick={clearSearch}
        >
          <XIcon className="size-6" />
        </button>
      )}
    </form>
  );
}
