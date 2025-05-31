import BookIcon from "./iconComponents/BookICon";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-10 py-4 bg-white text-xl">
      <div className="flex flex-row justify-center items-center" >
        <BookIcon width={30} height={30} color="#b66b02" />
        <h1>BookNook</h1>
      </div>
      <div className="flex gap-5">
        <button className="hover:text-primary-orange hover:underline">Discover</button>
        <button className="hover:text-primary-orange hover:underline">My Library</button>
      </div>
    </div>
  );
}
