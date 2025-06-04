import BookIcon from "./svg/BookIcon";
import RefreshIcon from "./svg/RefreshIcon";
import DiscoverButton from "./ui/DiscoverButton";

const LIMIT_ARRAY = [1, 2, 3];

interface DiscoverContentProps {
  queryLimit: number;
  setQueryLimit: (number: number) => void;
  onRefresh: () => void;
}

export default function DiscoverContent({
  queryLimit,
  setQueryLimit,
  onRefresh,
}: DiscoverContentProps) {
  return (
    <div className="flex flex-col justify-center items-center py-15 bg-gradient-custom">
      <BookIcon width={50} height={50} color="#2563eb" />
      <h1 className="text-4xl font-bold py-4 max-sm:text-xl">Discover your next Great Read</h1>
      <h2 className="text-xl max-sm:text-xs">
        Find new books, and build your personal library.
      </h2>

      <div className="flex justify-center items-center gap-5 py-5">
        <p>Show:</p>
        {LIMIT_ARRAY.map((limit) => (
          <DiscoverButton
            key={limit}
            onClick={() => setQueryLimit(limit)}
            className={
              queryLimit === limit ? "bg-primary-600 text-black" : "bg-white"
            }
          >
            {limit}
          </DiscoverButton>
        ))}
        <p>Books</p>
      </div>
      <button
        onClick={onRefresh}
        className="flex justify-center items-center gap-2 px-5 py-3 rounded-xl cursor-pointer bg-primary-600 hover:bg-primary-700"
      >
        <RefreshIcon width={20} height={20} color="black" />
        Refresh Recommendations
      </button>
    </div>
  );
}
