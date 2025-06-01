import Navbar from "../../components/Navbar";
import DiscoverContent from "../../components/DiscoverContent";
import BookCard from "../../components/BookCard";
export default function DiscoverPage() {
  return (
    <>
      <div className="bg-amber-50">
        <Navbar />
        <DiscoverContent />

        <h1 className="text-2xl p-10">Recomended for you</h1>
        <div className="flex flex-row gap-10 justify-center">
          <BookCard title="War and peace" author="By Lav tolstoj" />
        </div>
      </div>
    </>
  );
}
