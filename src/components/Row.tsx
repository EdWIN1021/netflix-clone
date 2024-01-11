import useFetch from "../hooks/useFetch";
import { Movie } from "../types";
import MovieCard from "./MovieCard";

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

  return (
    <div className="text-white overflow-y-visible">
      <h2>{title}</h2>

      <div className="flex relative overflow-x-scroll overflow-y-visible">
        <div className="flex gap-2">
          {!loading && (
            <>
              {data?.map((data: Movie) => (
                <MovieCard key={data?.id} movie={data} type={type} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Row;
