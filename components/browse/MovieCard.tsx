"use client";

import useMovieOrSeries from "../../hooks/useMovieOrSeries";

import {
  HandThumbUpIcon,
  PlusIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/24/solid";
import { Movie } from "@/app/types";
import { MouseEvent, useState } from "react";
import Image from "next/image";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MovieCard = ({ movie, type }: { movie: Movie; type: string }) => {
  const [leftPosition, setLeftPosition] = useState<number>();
  const { data, isLoading, refetch } = useMovieOrSeries(movie?.id, type);

  const handleMouseOver = (e: MouseEvent<HTMLElement>) => {
    refetch();
    setLeftPosition(e.currentTarget.getBoundingClientRect().left);
  };

  return (
    <div className="group min-w-[15.5%] cursor-pointer rounded">
      <div className="relative rounded group-hover:opacity-0">
        {isLoading ? (
          <Skeleton style={{ height: "8.2vw" }} baseColor="#b3b3b3" />
        ) : (
          <>
            <Image
              className="w-full"
              src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
              alt=""
              onMouseOver={handleMouseOver}
              width={150}
              height={10}
            />
            {data?.images?.logos[0]?.file_path && (
              <Image
                className="absolute left-1/2 top-1/2 w-[8vw] -translate-x-2/4 -translate-y-2/4"
                src={`https://image.tmdb.org/t/p/w500/${data?.images?.logos[0]?.file_path}`}
                width={150}
                height={150}
                alt=""
              />
            )}
          </>
        )}
      </div>

      <div
        className="group-hover:animate-scale_card z-50 hidden shadow-2xl group-hover:absolute group-hover:inline-block group-hover:w-[15%]"
        style={{ left: leftPosition }}
      >
        <Image
          className="h-full w-full rounded-t"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          width={150}
          height={150}
          alt=""
        />
        <div className="rounded-b bg-[rgb(20,20,20)] p-3">
          <div className="mb-6 flex">
            <div className="flex flex-1 gap-1">
              <PlusIcon className=" h-[2vw] w-[2vw] rounded-full border p-1" />
              <PlayIcon className=" h-[2vw] w-[2vw] rounded-full  bg-white fill-[black] p-1" />
              <HandThumbUpIcon className="h-[2vw] w-[2vw] rounded-full border p-1" />
            </div>

            <ChevronDownIcon className="h-[2vw] w-[2vw] rounded-full border p-1" />
          </div>

          <p className="mb-2 text-[1vw]">
            &quot;{data?.title || data?.original_name}&quot;
          </p>
          <ul>
            {data?.genres.map((genre: { id: number; name: string }) => (
              <li
                className="mr-1 inline-block text-center text-[.8vw]"
                key={genre.id}
              >
                <span>{genre.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
