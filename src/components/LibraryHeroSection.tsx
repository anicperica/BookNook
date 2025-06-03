import HearthIcon from "../components/svg/HearthIcon";

export default function LibraryHeroSection() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 pt-20 pb-10 bg-amber-100">
      <HearthIcon width={50} height={50} color="red" />
      <h1 className="text-4xl">My library</h1>
      <h2 className="text-2xl">
        Your personal collection of saved books. Save books you love or want to
        read later.
      </h2>
    </div>
  );
}
