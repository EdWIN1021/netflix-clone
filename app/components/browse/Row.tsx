import MovieCard from "../browse/MovieCard";
import { Movie } from "../../types";

const Row = ({
  title,
  movies,
  type,
}: {
  title: string;
  movies: Movie[];
  type: string;
}) => {
  return (
    <div className="my-[3vw] text-[1.4vw] leading-[1.25vw] text-white">
      <h2 className="my-6 font-medium">{title}</h2>
      <div className="flex flex-row gap-2 overflow-x-scroll">
        {movies && (
          <>
            {movies?.map((movie: Movie) => (
              <MovieCard key={movie?.id} movie={movie} type={type} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Row;
