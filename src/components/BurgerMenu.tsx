import { Link } from "react-router-dom";
interface BurgerProps {
  onClose: () => void;
  onClick: () => void;
}

export default function BurgerMenu({ onClose, onClick }: BurgerProps) {
  return (
    <div className="absolute top-15 right-0 w-full  z-10 flex flex-col justify-center items-center  gap-7 py-5 border-gray-200 border-t-1 bg-white shadow-md md:hidden">
      <Link
        to="/"
        onClick={onClose}
        className="hover:text-primary-600 hover:underline cursor-pointer "
      >
        Discover
      </Link>
      <Link
        to="/library"
        onClick={onClose}
        className="hover:text-primary-600 hover:underline cursor-pointer "
      >
        My Library
      </Link>
      <button
        onClick={onClick}
        className="hover:text-primary-600 hover:underline cursor-pointer "
      >
        Logout
      </button>
    </div>
  );
}
