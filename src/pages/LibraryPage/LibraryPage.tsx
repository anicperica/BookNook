import LibraryHeroSection from "../../components/LibraryHeroSection";
import Navbar from "../../components/Navbar";
import LibraryBookList from "../../components/LibraryBookList";
export default function LibraryPage(){
    return(
       <div>
        <Navbar/>
        <LibraryHeroSection/>
        <h1 className="p-5 text-3xl ">Saved Books</h1>
        <LibraryBookList/>
       </div>
    );
}