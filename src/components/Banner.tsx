import { FaPlay } from "react-icons/fa";
import { PiWarningCircle } from "react-icons/pi";

import { useMemo } from "react";
import useFetch from "../hooks/useFetch";
// import useVideos from "../hooks/useVideos";
import Skeleton from "react-loading-skeleton";
import IconButton from "../ui/IconButton";

const Banner = () => {
  const { data: movies, loading } = useFetch(
    "discover/movie?with_networks=213"
  );

  const movie = useMemo(
    () => movies[Number((Math.random() * 20).toFixed(0))],
    [movies]
  );

  // const { data: videos } = useVideos(movie?.id);

  return (
    <section className="relative h-[40vw]">
      {loading ? (
        <Skeleton className="h-full w-full" baseColor="#b3b3b3" />
      ) : (
        <>
          {/* <iframe
            className="absolute z-10 h-full w-full"
            src={`https://www.youtube.com/embed/${videos[0]?.key}?autoplay=1&mute=1&loop=1&controls=0&cc_load_policy=0&rel=0`}
          ></iframe> */}

          <img
            className="absolute z-30 h-full w-full animate-fade"
            src={`https://image.tmdb.org/t/p/original/${
              movie?.backdrop_path || movie?.poster_path
            }`}
            width={500}
            height={500}
            alt="banner..."
          />

          <div className="absolute left-[4%] top-[25%] z-20 max-w-[40vw]  text-white">
            <h1 className="mb-8 whitespace-nowrap text-[3vw]">
              {movie?.title}
            </h1>
            <p className="text-[1.2vw]">{movie?.overview}</p>

            <div className="mt-[5%] flex items-center text-[1.2vw] font-medium">
              <IconButton className="mr-2 bg-white">
                <FaPlay className="w-[1.5vw] h-[1.5vw] fill-black" />
                <span className="text-black">Play</span>
              </IconButton>

              <IconButton className="mr-2 bg-[rgb(109,109,110)] opacity-70 ">
                <PiWarningCircle className="w-[1.5vw] h-[1.5vw]" />
                <span>More Info</span>
              </IconButton>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Banner;
