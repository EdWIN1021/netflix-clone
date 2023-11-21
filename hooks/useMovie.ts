import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getVideos } from "../requests/movies";

const useMovie = (id: number) => {
  const { data: videos, isLoading } = useQuery({
    queryKey: ["videos"],
    queryFn: () => getVideos(id),
  });

  return { videos, isLoading };
};

export default useMovie;
