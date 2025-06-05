import HearthIcon from "../../components/svg/HearthIcon"

export default function LibraryHeroSection() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 pt-15 pb-10 bg-gradient-custom">
      <HearthIcon width={50} height={50} color="red" />
      <h1 className="text-4xl max-sm:text-3xl">My library</h1>
      <h2 className="text-2xl max-sm:text-xl max-md:text-center">
        Your personal collection of saved books. Save books you love or want to
        read later.
      </h2>
      <p className="text-xl max-sm:text-lg max-md:text-center"> “I have always imagined that Paradise will be a kind of library.” — Jorge Luis Borges</p>
    </div>
  );
}
