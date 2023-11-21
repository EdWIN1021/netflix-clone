import { useQuery } from "@tanstack/react-query";
import { getMovieOrSeries } from "../requests/movies";

const useMovieOrSeries = (id: number, type: string) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["movieOrSeries", id, type],
    queryFn: () => getMovieOrSeries(id, type),
    // enabled: false,
  });

  return { data, isLoading, refetch };
};

export default useMovieOrSeries;
