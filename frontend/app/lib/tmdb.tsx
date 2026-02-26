export interface TMDBMovie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
}

export const fetchTrendingMovies = async (): Promise<TMDBMovie[]> => {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  if (!apiKey) {
    throw new Error("TMDB_API_KEY is not defined");
  }

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3zc/trending/movie/day?api_key=${apiKey}`,
      { next: { revalidate: 3600 } } // cache for 1 hour
    );

    if (!res.ok) {
      throw new Error("Failed to fetch trending movies");
    }

    const data = await res.json();
    return data.results || [];
  } catch (error) {
    console.error("TMDB Fetch Error:", error);
    return [];
  }
};