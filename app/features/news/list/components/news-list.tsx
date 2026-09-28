import { ListContainer } from "./list-container/list-container";
import { Search } from "./search/search";
import { NewsTabs } from "./news-tabs/news-tabs";

export function NewsList() {
  return (
    <div className="flex flex-col gap-4 max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 pb-8">
      <div className="sticky top-0 z-10 -mx-8 flex flex-col gap-4 border-b border-zinc-200/80 bg-background/95 px-8 py-4 backdrop-blur-sm supports-backdrop-filter:bg-background/80 dark:border-zinc-800/80 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <Search />
        <NewsTabs />
      </div>
      <ListContainer />
    </div>
  );
}
