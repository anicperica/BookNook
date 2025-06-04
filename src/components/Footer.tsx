import BookIcon from "./svg/BookIcon";
import GitHubIcon from "../components/svg/GithubIcon";
import MailIcon from "../components/svg/MailIcon";
export default function Footer() {
  const handleNavigateGit = () => {
    window.location.href = "https://github.com/anicperica";
  };
  const handleNavigateMail = () => {
    window.location.href = "mailto:anicperica18@gmail.com";
  };

  return (
    <div className="flex justify-between items-center px-10 bg-gray-900 py-10 max-sm:flex-col max-sm:gap-8 " >
      <div className="flex justify-center items-center">
        <BookIcon width={40} height={40} color="#1d4ed8" />
        <h1 className="text-white text-2xl">BookNook</h1>
      </div>
      <p className="text-white text-center ">
        © 2025 BookNook. All rights reserved.
        <br /> Created for internship project demonstration
      </p>
      <div className="flex justify-center items-center gap-3">
        <button onClick={handleNavigateGit} className="cursor-pointer">
          <GitHubIcon width={35} height={35} color="white" />
        </button>
        <button onClick={handleNavigateMail} className="cursor-pointer">
          <MailIcon width={35} height={35} color="white" />
        </button>
      </div>
    </div>
  );
}
