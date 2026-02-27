export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}


export async function fetchMovies(query: string): Promise<Movie[]> {
  if (!query) return [];

  try {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&s=${query}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch movies");
    }

    const data = await res.json();

    if (data.Response === "False") {
      return [];
    }

    return data.Search || [];
  } catch (error) {
    console.error("OMDb Fetch Error:", error);
    return [];
  }
}