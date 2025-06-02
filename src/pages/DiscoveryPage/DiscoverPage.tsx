import { useState } from "react";
import Navbar from "../../components/Navbar";
import DiscoverContent from "../../components/DiscoverContent";
import BookList from "../../components/BookList";
export default function DiscoverPage() {
  const [queryLimit, setQueryLimit] = useState(3);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => setRefreshKey((key) => key + 1);

  return (
    <>
      <div className="bg-amber-50">
        <Navbar />
        <DiscoverContent
          queryLimit={queryLimit}
          setQueryLimit={setQueryLimit}
          onRefresh={handleRefresh}
        />
        <h1 className="text-2xl p-10">Recomended for you</h1>
        <div className="flex flex-row gap-10 justify-center">
          <BookList limit={queryLimit} refreshkey={refreshKey} />
        </div>
      </div>
    </>
  );
}
