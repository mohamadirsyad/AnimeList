import Link from "next/link";

const Header = ({ title, linkTitle, hrefTitle }) => {
  return (
    <div className="p-4 flex justify-between items-center">
      <h2 className="text-md font-bold text-color-primary">{title}</h2>
      {linkTitle && hrefTitle ? (
        <Link
          href={hrefTitle}
          className="md:text-md text-sm underline text-color-primary hover:text-color-accent transition-all "
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};
export default Header;
