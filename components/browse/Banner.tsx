"use client";
import { useQuery } from "@tanstack/react-query";
import { getNetflix, getVideos } from "../../requests/movies";
import { useMemo } from "react";
import { PlayIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import Skeleton from "react-loading-skeleton";
import Image from "next/image";

const Banner = () => {
  const { data: movies, isLoading: isMoviesLoading } = useQuery({
    queryKey: ["netflix"],
    queryFn: () => getNetflix(),
  });

  const movie = useMemo(
    () => movies?.results[(Math.random() * 20).toFixed(0)],
    [movies],
  );

  const { data: videos } = useQuery({
    queryKey: ["videos"],
    queryFn: () => getVideos(movie?.id),
    enabled: !!movie,
  });

  return (
    <>
      <section className="relative h-[40vw]">
        {isMoviesLoading ? (
          <Skeleton className="h-full w-full" baseColor="#b3b3b3" />
        ) : (
          <>
            <iframe
              className="absolute z-10 h-full w-full"
              src={`https://www.youtube.com/embed/${videos?.results[0]?.key}?autoplay=1&mute=1&loop=1&controls=0&cc_load_policy=0&rel=0`}
            ></iframe>

            <Image
              className="absolute z-30 h-full w-full animate-fade"
              src={`https://image.tmdb.org/t/p/original/${
                movie?.backdrop_path || movie?.poster_path
              }`}
              width={500}
              height={500}
              priority
              alt="banner..."
            />

            <div className="absolute left-[4%] top-[25%] z-20 max-w-[40vw]  text-white">
              <h1 className="mb-8 whitespace-nowrap text-[3vw]">
                {movie?.title}
              </h1>
              <p className="text-[1.2vw]">{movie?.overview}</p>

              <div className="mt-[5%] flex items-center text-[1.2vw] font-medium">
                <button className="icon-button mr-2 bg-white">
                  <PlayIcon className="w-[3vw] fill-black" />
                  <span className="text-black">Play</span>
                </button>

                <button className="icon-button bg-[rgb(109,109,110)] opacity-70 ">
                  <ExclamationCircleIcon className="w-[3vw] " />
                  <span>More Info</span>
                </button>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Banner;
