"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    const keyword = searchRef.current.value;

    if (!keyword || keyword.trim() == "") return;
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();

      router.push(`/search/${keyword}`);
    }
  };
  return (
    <div className="relative">
      <input
        placeholder="cari.."
        className="p-1 rounded-md w-full"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute end-2 top-1" onClick={handleSearch}>
        <MagnifyingGlass size={22} />
      </button>
    </div>
  );
};
export default InputSearch;
