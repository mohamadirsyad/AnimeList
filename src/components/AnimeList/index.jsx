import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4 ">
      {api.data?.map((anime, index) => {
        return (
          <div key={index}>
            <Link
              href={`/anime/${anime.mal_id}`}
              className="cursor-pointer text-color-primary hover:text-color-accent transition-all"
            >
              <Image
                src={anime.images.webp.image_url}
                width={600}
                height={400}
                alt="..."
                className="w-full max-h-80 min-h-40 object-cover"
              />
              <h3 className="font-bold md:text-xl sm:text-md text-sm p-4 ">
                {anime.title}
              </h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default AnimeList;
