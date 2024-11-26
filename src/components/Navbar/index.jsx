import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex md:flex-row  sm:flex-row  flex-col md:items-center sm:items-center justify-between p-4 gap-2">
        <Link href="/" className="font-bold text-2xl ">
          CuyAnime
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};
export default Navbar;
