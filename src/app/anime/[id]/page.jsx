import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/utilities/VideoPlayer";
import Image from "next/image";

const Page = async ({ params }) => {
  const { id } = await params;
  const anime = await getAnimeResponse(`anime/${id}`);

  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-color-primary font-bold text-xl">
          {anime.data.title}
        </h3>
      </div>
      <div className="px-4 pt-4 gap-2 text-color-primary flex overflow-x-auto">
        <div className="flex flex-col w-36 p-2 justify-center items-center border rounded border-color-primary">
          <h3>Rank</h3>
          <p>{anime.data.rank}</p>
        </div>
        <div className="flex flex-col w-36 p-2 justify-center items-center border rounded border-color-primary">
          <h3>Score</h3>
          <p>{anime.data.score}</p>
        </div>
        <div className="flex flex-col w-36 p-2 justify-center items-center border rounded border-color-primary">
          <h3>Views</h3>
          <p>{anime.data.members}</p>
        </div>
        <div className="flex flex-col w-36 p-2 justify-center items-center border rounded border-color-primary">
          <h3>Popularity</h3>
          <p>{anime.data.popularity}</p>
        </div>
        <div className="flex flex-col w-36 p-2 justify-center items-center border rounded border-color-primary">
          <h3>Eps</h3>
          <p>{anime.data.episodes}</p>
        </div>
      </div>
      <div className="flex pt-4 px-4 md:flex-nowrap flex-wrap gap-2 text-color-primary">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={250}
          height={250}
          className="w-full object-cover rounded"
        />
        <p className="text-justify">{anime.data.synopsis}</p>
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
