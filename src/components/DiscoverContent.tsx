import BookIcon from "./svg/BookIcon";
import RefreshIcon from "./svg/RefreshIcon";
import DiscoverButton from "./ui/DiscoverButton";

const LIMIT_ARRAY = [1, 2, 3];

export default function DiscoverContent() {
  return (
    <div className="flex flex-col justify-center items-center py-15 bg-amber-100">
      <BookIcon width={50} height={50} color="#b66b02" />
      <h1 className="text-4xl font-bold py-4">Discover your next Great Read</h1>
      <h2 className="text-xl">
        Find new books, and build your personal library.
      </h2>

      <div className="flex  justify-center items-center gap-5 py-5 ">
        <p>Show:</p>
        {LIMIT_ARRAY.map((limit) => (
          <DiscoverButton key={limit}>{limit}</DiscoverButton>
        ))}
        <p>Books</p>
      </div>
      <button className="flex justify-center items-center bg-primary px-5 py-3 rounded-xl gap-2 cursor-pointer">
        <RefreshIcon width={20} height={20} color="black" />
        Refresh Recommendations
      </button>
    </div>
  );
}
