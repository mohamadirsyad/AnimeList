"use client";
import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen max-w-full mx-auto flex flex-col  items-center justify-center gap-3">
      <FileSearch size={50} className="text-color-accent " />
      <h3 className="text-color-accent font-bold text-3xl "> NOT FOUND</h3>
      <Link
        href="/"
        className="underline text-color-primary hover:text-color-accent transition-all"
      >
        Kembali
      </Link>
    </div>
  );
};
export default Page;
