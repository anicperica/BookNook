import BookImage from "../assets/images/BookImage.jpg";
import HearthIcon from "./svg/HearthIcon";
interface BookCardProps {
  title: string;
  author: string;
  onSave?: () => void;
  isSaved?: boolean;
}

export default function BookCard({
  title,
  author,
  isSaved,
  onSave,
}: BookCardProps) {
  return (
    <div className="flex flex-col justify-start items-start max-w-[400px] min-w-[200px] h-[450px] rounded-lg overflow-hidden bg-white  shadow-md transform transition duration-300 hover:-translate-y-2 hover:shadow-xl group">
      <div className="relative w-full h-[85%]">
        <button
          onClick={onSave}
          className="absolute top-2 right-2 rounded-full p-2 bg-white"
        >
          <HearthIcon
            width={25}
            height={25}
            color={isSaved ? "red" : "black"}
          />
        </button>
        <img
          src={BookImage}
          alt="Book image"
          className="w-full h-full  object-cover object-center "
        />
      </div>
      <div className=" flex flex-col gap-2 px-4 py-3  ">
        <h1 className="text-xl font-bold group-hover:text-primary-700">{title}</h1>
        <h2 className="text-gray-600">{`by ${author}`}</h2>
      </div>
    </div>
  );
}
