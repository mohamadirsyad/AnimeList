"use client";
import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/utilities/HeaderMenu";
import Pagination from "@/components/utilities/Pagination";
import { useState, useEffect } from "react";
import { getAnimeResponse } from "../../libs/api-libs";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch(
        //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
        // );
        // const data = await response.json();
        const populer = await getAnimeResponse("top/anime", `page=${page}`);
        setTopAnime(populer);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`Anime Terpopuler #${page}`} />
      <AnimeList api={topAnime} />
      <Pagination
        page={page}
        lastPage={topAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
};
export default Page;
