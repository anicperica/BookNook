import BookImage from "../assets/images/BookImage.jpg";
import HearthIcon from "./svg/HearthIcon";

interface BookCardProps {
  title: string;
  author: string;
}

export default function BookCard({ title, author }: BookCardProps) {
  return (
    <div className="flex flex-col justify-start items-start max-w-[400px] h-[550px] rounded-lg overflow-hidden bg-white  shadow-md transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative w-full h-[85%]">
        <button className="absolute top-2 right-2 rounded-full p-2 bg-white">
          <HearthIcon width={25} height={25} color="black" />
        </button>
        <img
          src={BookImage}
          alt="Book image"
          className="w-full h-full  object-cover object-center "
        />
      </div>
      <div className=" flex flex-col gap-2 px-4 pt-3  ">
        <h1 className="text-xl font-bold">{title}</h1>
        <h2 className="text-gray-600">{author}</h2>
      </div>
    </div>
  );
}
