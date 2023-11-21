export const getTrending = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/trending/all/week?api_key=${process.env.NEXT_PUBLIC_THEMOVIEBD_API_KEY}&language=en-US`,
  );

  const data = await res?.json();

  if (res?.ok) {
    return data;
  }
};

export const getNetflix = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/discover/movie?api_key=${process.env.NEXT_PUBLIC_THEMOVIEBD_API_KEY}&with_networks=213&language=en-US`,
  );

  const data = await res?.json();

  if (res?.ok) {
    return data;
  }
};

export const getVideos = async (id: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/movie/${id}/videos?api_key=${process.env.NEXT_PUBLIC_THEMOVIEBD_API_KEY}&language=en-US`,
  );

  const data = await res?.json();

  if (res?.ok) {
    return data;
  }
};

export const getMovieOrSeries = async (id: number, type: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${type}/${id}?api_key=${process.env.NEXT_PUBLIC_THEMOVIEBD_API_KEY}&append_to_response=videos,images`,
  );

  const data = await res?.json();

  if (res?.ok) {
    return data;
  }
};

export const getWestern = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/discover/tv?api_key=${process.env.NEXT_PUBLIC_THEMOVIEBD_API_KEY}&language=en-US&with_genres=35`,
  );

  const data = await res?.json();

  if (res?.ok) {
    return data;
  }
};
