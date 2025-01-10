import React from "react";
import Image from "next/image";
import Link from "next/link";
import Dashboard from "@/components/Dashboard/Header";
const page = () => {
  return (
    <section className="mt-4 px-4">
      <Dashboard title="My Collection" />
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
        <Link href="/" className="relative border-2 border-color-accent">
          <Image src="" alt=".." width={350} height={350} className="w-full" />
          <div className="absolute flex items-center justify-center bottom-0 w-full bg-color-accent h-16">
            <h5 className="text-center text-xl">Judul Anime Judul Anime</h5>
          </div>
        </Link>
        <Link href="/" className="relative border-2 border-color-accent">
          <Image src="" alt=".." width={350} height={350} className="w-full" />
          <div className="absolute flex items-center justify-center bottom-0 w-full bg-color-accent h-16">
            <h5 className="text-center text-xl">Judul Anime Judul Anime</h5>
          </div>
        </Link>
        <Link href="/" className="relative border-2 border-color-accent">
          <Image src="" alt=".." width={350} height={350} className="w-full" />
          <div className="absolute flex items-center justify-center bottom-0 w-full bg-color-accent h-16">
            <h5 className="text-center text-xl">Judul Anime Judul Anime</h5>
          </div>
        </Link>
        <Link href="/" className="relative border-2 border-color-accent">
          <Image src="" alt=".." width={350} height={350} className="w-full" />
          <div className="absolute flex items-center justify-center bottom-0 w-full bg-color-accent h-16">
            <h5 className="text-center text-xl">Judul Anime Judul Anime</h5>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default page;
