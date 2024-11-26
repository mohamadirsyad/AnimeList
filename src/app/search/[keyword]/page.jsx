import { getAnimeResponse } from "@/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

export default async function Page({ params }) {
  const { keyword } = await params;
  const decoded = decodeURI(keyword);

  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decoded}`
  // );
  // const searchAnime = await response.json();
  const searchAnime = await getAnimeResponse("anime", `q=${decoded}`);

  return (
    <>
      {/* paling Populer */}
      <section>
        <Header title={`Pencarian Untuk ${decoded} ....`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
}
