import LibraryHeroSection from "../../components/library/LibraryHeroSection";

import LibraryBookList from "../../components/library/LibraryBookList";

export default function LibraryPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-primary-50">
      <LibraryHeroSection />
      <h1 className="p-5 text-3xl font-bold max-sm:text-2xl ">Saved Books</h1>
      <LibraryBookList />
    </div>
  );
}
