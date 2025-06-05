import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import BookIcon from "../svg/BookIcon";
import BurgerIcon from "../svg/BurgerIcon";
import BurgerMenu from "../BurgerMenu";
import XIcon from "../svg/XICon";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("JWT");
    navigate("/login");
  };
  return (
    <div className=" relative flex justify-between items-center  px-10 py-4 bg-white text-xl">
      <div className="flex flex-row justify-center items-center">
        <BookIcon width={30} height={30} color="#1d4ed8" />
        <h1>BookNook</h1>
      </div>
      <div className="flex gap-5">
        <Link
          to="/"
          className="hover:text-primary-600 hover:underline cursor-pointer max-md:hidden"
        >
          Discover
        </Link>
        <Link
          to="/library"
          className="hover:text-primary-600 hover:underline cursor-pointer max-md:hidden"
        >
          My Library
        </Link>
        <button
          onClick={handleLogout}
          className="hover:text-primary-600 hover:underline cursor-pointer max-md:hidden"
        >
          Logout
        </button>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden"
        >
          {isOpen ? (
            <XIcon width={30} height={30} color="black" />
          ) : (
            <BurgerIcon width={30} height={30} color="black" />
          )}
        </button>

        {isOpen && (
          <BurgerMenu
            onClose={() => setIsOpen(!isOpen)}
            onClick={handleLogout}
          />
        )}
      </div>
    </div>
  );
}
