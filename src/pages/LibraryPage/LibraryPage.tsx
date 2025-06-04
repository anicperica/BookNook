import LibraryHeroSection from "../../components/LibraryHeroSection";
import Navbar from "../../components/Navbar";
import LibraryBookList from "../../components/LibraryBookList";
import Footer from "../../components/Footer";
export default function LibraryPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-primary-50">
      <Navbar />
      <LibraryHeroSection />
      <h1 className="p-5 text-3xl font-bold max-sm:text-2xl ">Saved Books</h1>
      <LibraryBookList />
      <Footer />
    </div>
  );
}
