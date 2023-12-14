"use client";
import MovieCard from "./MovieCard";
import { Movie } from "../../app/types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";

const Row = ({
  title,
  movies,
  type,
}: {
  title: string;
  movies: Movie[];
  type: string;
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 200;
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 200;
    }
  };

  // useEffect(() => {
  //   const updateLeftPosition = () => {
  //     console.log("here");
  //   };

  //   updateLeftPosition();

  //   const handleScroll = () => {
  //     updateLeftPosition();
  //   };

  //   const cardElement = scrollContainerRef.current;

  //   if (cardElement) {
  //     cardElement.addEventListener("scroll", handleScroll);
  //   }

  //   return () => {
  //     if (cardElement) {
  //       cardElement.removeEventListener("scroll", handleScroll);
  //     }
  //   };
  // }, []);

  return (
    <div className="my-[3vw] text-[1.4vw] leading-[1.25vw] text-white">
      <h2 className="my-6 font-medium">{title}</h2>

      <div className="relative flex ">
        <div
          className="absolute left-0 z-20 h-full w-[3vw] bg-[red]"
          onClick={scrollRight}
        >
          <FaChevronLeft />
        </div>

        <div
          className="ml-[4%] flex flex-row gap-2 overflow-x-scroll"
          ref={scrollContainerRef}
        >
          {movies && (
            <>
              {movies?.map((movie: Movie) => (
                <MovieCard
                  parentRef={scrollContainerRef}
                  key={movie?.id}
                  movie={movie}
                  type={type}
                />
              ))}
            </>
          )}
        </div>

        <div className="absolute right-0 z-20 h-full w-[3vw] bg-[red]">
          <FaChevronRight />
        </div>
      </div>
    </div>
  );
};

export default Row;
