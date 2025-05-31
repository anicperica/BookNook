import BookIcon from "./IconComponents/BookICon";
import RefreshIcon from "./IconComponents/RefreshIcon";
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
        <button className="w-8 h-8 p-1 rounded-full bg-white hover:bg-primary-orange">
          1
        </button>
        <button className="w-8 h-8 p-1 rounded-full bg-white hover:bg-primary-orange">
          2
        </button>
        <button className="w-8 h-8 p-1 rounded-full bg-white hover:bg-primary-orange">
          3
        </button>
        <p>Books</p>
      </div>
      <button className="flex justify-center items-center bg-primary-orange px-5 py-3 rounded-xl gap-2 ">
        <RefreshIcon width={20} height={20}color="black"/>
        Refresh Recommendations
      </button>
    </div>
  );
}
