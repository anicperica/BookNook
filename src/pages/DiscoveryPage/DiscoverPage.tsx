import { useState } from "react";

import DiscoverContent from "../../components/DiscoveryPage/DiscoverContent";
import BookList from "../../components//DiscoveryPage/BookList";

export default function DiscoverPage() {
  const [queryLimit, setQueryLimit] = useState(3);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => setRefreshKey((key) => key + 1);

  return (
    <>
      <div className="bg-blue-50 scroll-smooth">
        <DiscoverContent
          queryLimit={queryLimit}
          setQueryLimit={setQueryLimit}
          onRefresh={handleRefresh}
        />
        <h1 className=" p-10 text-2xl font-bold max-sm:text-xl max-sm:py-10 max-sm:px-5">
          Recomended for you
        </h1>
        <div className="flex flex-row  justify-center gap-10 ">
          <BookList limit={queryLimit} refreshkey={refreshKey} />
        </div>
      </div>
    </>
  );
}
