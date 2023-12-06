"use client";
import { useQuery } from "@tanstack/react-query";
import { getNetflix, getVideos } from "../../requests/movies";
import { useMemo } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";

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
      {!isMoviesLoading && (
        <section className="relative mt-[68px] h-[40vw]">
          <div className="absolute -z-20 h-[50vw] w-[100%]">
            <ReactPlayer
              url={`https://www.youtube.com/embed/${videos?.results[0]?.key}?autoplay=1&mute=1&controls=0&cc_load_policy=0&rel=0`}
              height={"100%"}
              width={"100%"}
              playing
              loop
              muted
            />
          </div>

          <Image
            className="absolute top-0 -z-20 h-[50vw] w-full animate-fade"
            src={`https://image.tmdb.org/t/p/original/${
              movie?.backdrop_path || movie?.poster_path
            }`}
            width={500}
            height={500}
            priority
            alt="banner..."
          />
          {/* 
          <div className="absolute left-[4%] top-[30%] max-w-[40vw]  text-white">
            <h1 className="mb-8 whitespace-nowrap text-[3vw]">
              {movie?.title}
            </h1>
            <p className="text-[1.2vw]">{movie?.overview}</p>

            <div className="mt-8 flex items-center text-[1.2vw] font-medium text-black">
              <button className="icon-button mr-4 h-[3vw]  bg-white">
                <Image
                  className="h-[2vw]"
                  src="/browse/play.svg"
                  alt="play..."
                  width={25.91}
                  height={25.91}
                />
                <span> Play</span>
              </button>

              <button className="icon-button h-[3vw] bg-[rgb(109,109,110)] text-white opacity-70 ">
                <Image
                  className="h-[2vw]"
                  src="/browse/more_info.svg"
                  alt="play..."
                  width={25.91}
                  height={25.91}
                />
                <span>More Info</span>
              </button>
            </div>
          </div> */}
        </section>
      )}
    </>
  );
};

export default Banner;
