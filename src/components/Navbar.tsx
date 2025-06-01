import { Link } from "react-router-dom";
import BookIcon from "./svg/BookIcon";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-10 py-4 bg-white text-xl">
      <div className="flex flex-row justify-center items-center" >
        <BookIcon width={30} height={30} color="#b66b02" />
        <h1>BookNook</h1>
      </div>
      <div className="flex gap-5">
        <Link to="/" className="hover:text-primary hover:underline">Discover</Link>
        <Link to="" className="hover:text-primary hover:underline">My Library</Link>
      </div>
    </div>
  );
}
