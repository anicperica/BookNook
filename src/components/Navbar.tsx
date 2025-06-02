import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BookIcon from "./svg/BookIcon";

export default function Navbar() {
  const navigate =useNavigate();
  const handleLogout = () =>{
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <div className="flex justify-between items-center px-10 py-4 bg-white text-xl">
      <div className="flex flex-row justify-center items-center" >
        <BookIcon width={30} height={30} color="#b66b02" />
        <h1>BookNook</h1>
      </div>
      <div className="flex gap-5">
        <Link to="/" className="hover:text-primary hover:underline">Discover</Link>
        <Link to="/library" className="hover:text-primary hover:underline">My Library</Link>
        <button onClick={handleLogout} className="over:text-primary hover:underline">Logout</button>
      </div>
    </div>
  );
}
