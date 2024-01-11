"use client";

import useMovieOrSeries from "../../hooks/useMovieOrSeries";

import {
  HandThumbUpIcon,
  PlusIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { IoMdPlay } from "react-icons/io";
import { Movie } from "@/app/types";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import Skeleton from "react-loading-skeleton";

const MovieCard = ({
  parentRef,
  movie,
  type,
}: {
  parentRef: React.RefObject<HTMLDivElement>;
  movie: Movie;
  type: string;
}) => {
  const [leftPosition, setLeftPosition] = useState<number>();
  const { data, isLoading } = useMovieOrSeries(movie?.id, type);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateLeftPosition = () => {
      if (cardRef) {
        setLeftPosition(cardRef.current?.getBoundingClientRect().left);
      }
    };

    updateLeftPosition();

    const handleScroll = () => {
      updateLeftPosition();
    };

    const cardElement = parentRef.current;

    if (cardElement) {
      cardElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (cardElement) {
        cardElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, [parentRef, cardRef]);

  return (
    <div className="group min-w-[16.2%] cursor-pointer rounded">
      <div className="relative rounded group-hover:opacity-0">
        {isLoading ? (
          <div>asd</div>
        ) : (
          // <Skeleton style={{ height: "8.2vw" }} baseColor="#b3b3b3" />
          <div ref={cardRef}>
            <Image
              className="w-full"
              src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
              alt=""
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
          </div>
        )}
      </div>

      <div
        className="hidden shadow-2xl group-hover:absolute group-hover:z-50 group-hover:inline-block group-hover:w-[15%] group-hover:animate-scale_card"
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
            <div className="flex flex-1 gap-[.3vw]">
              <PlusIcon className="w-[2.5vw] rounded-full border p-1" />

              <div className="h-[2.5vw] w-[2.5vw] ">
                <IoMdPlay className="h-full w-full rounded-full bg-white  fill-black pl-[0.3vw]" />
              </div>
              <HandThumbUpIcon className="w-[2.5vw] rounded-full border p-1" />
            </div>

            <ChevronDownIcon className="w-[2.5vw] rounded-full border p-1" />
          </div>

          <p className="mb-2 text-[1vw]">
            &quot;
            {data?.title ||
              data?.original_name ||
              data?.original_title ||
              data?.name}
            &quot;
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
