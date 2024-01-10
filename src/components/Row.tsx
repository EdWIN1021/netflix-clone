import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { Movie } from "../types";
import MovieCard from "./MovieCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Row = ({
  title,
  type,
  url,
}: {
  title: string;
  type: string;
  url: string;
}) => {
  const { data, loading } = useFetch(url);
  const [left, setLeft] = useState(0);

  return (
    <div className="text-white">
      <h2>{title}</h2>

      <div className="flex relative">
        <div className="absolute flex h-full bg-red-500 left-0 justify-center items-center">
          <FaAngleLeft className="w-[1.5vw] h-[1.5vw]" />
        </div>

        <div
          className="flex gap-2"
          style={{ transform: `translateX(-${left}vw)` }}
        >
          {!loading && (
            <>
              {data?.map((data: Movie) => (
                <MovieCard key={data?.id} movie={data} type={type} />
              ))}
            </>
          )}
        </div>

        <div
          className="absolute h-full bg-red-500 right-0 flex justify-center items-center"
          onClick={() => setLeft((pre) => pre + 20)}
        >
          <FaAngleRight className="w-[1.5vw] h-[1.5vw]" />
        </div>
      </div>
    </div>
  );
};

export default Row;
