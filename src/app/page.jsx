import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "../libs/api-libs";
const Page = async () => {
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  // );
  // const topAnime = await response.json();

  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recommendAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recommendAnime = reproduce(recommendAnime, 8);

  return (
    <>
      {/* paling Populer */}
      <section>
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua"
          hrefTitle="/populer"
        />
        <AnimeList api={topAnime} />
      </section>
      {/* Rekomendasi */}
      <section>
        <Header title="Rekomendasi" />
        <AnimeList api={recommendAnime} />
      </section>
    </>
  );
};
export default Page;
