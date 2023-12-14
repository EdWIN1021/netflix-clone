"use server";

export const getTrending = async () => {
  const res = await fetch(
    `${process.env.API_BASE_URL}/trending/all/week?api_key=${process.env.THEMOVIEBD_API_KEY}&language=en-US`,
  );
  const data = await res?.json();
  if (res?.ok) {
    return data;
  }
};

export const getPopularMovies = async () => {
  const res = await fetch(
    `${process.env.API_BASE_URL}/movie/popular?api_key=${process.env.THEMOVIEBD_API_KEY}&language=en-US`,
  );

  const data = await res?.json();

  if (res?.ok) {
    return data;
  }
};

export const getTopRatedMovies = async () => {
  const res = await fetch(
    `${process.env.API_BASE_URL}/movie/top_rated?api_key=${process.env.THEMOVIEBD_API_KEY}&language=en-US`,
  );

  const data = await res?.json();

  if (res?.ok) {
    return data;
  }
};

export const getUpcomingMovies = async () => {
  const res = await fetch(
    `${process.env.API_BASE_URL}/movie/upcoming?api_key=${process.env.THEMOVIEBD_API_KEY}&language=en-US`,
  );

  const data = await res?.json();

  if (res?.ok) {
    return data;
  }
};

export const getNowPlaying = async () => {
  const res = await fetch(
    `${process.env.API_BASE_URL}/movie/now_playing?api_key=${process.env.THEMOVIEBD_API_KEY}&language=en-US`,
  );

  const data = await res?.json();

  if (res?.ok) {
    return data;
  }
};

export const getPopularSeries = async () => {
  const res = await fetch(
    `${process.env.API_BASE_URL}/tv/popular?api_key=${process.env.THEMOVIEBD_API_KEY}&language=en-US`,
  );

  const data = await res?.json();

  if (res?.ok) {
    return data;
  }
};

export const getTopRatedSeries = async () => {
  const res = await fetch(
    `${process.env.API_BASE_URL}/tv/top_rated?api_key=${process.env.THEMOVIEBD_API_KEY}&language=en-US`,
  );

  const data = await res?.json();

  if (res?.ok) {
    return data;
  }
};
