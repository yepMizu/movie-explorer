

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  if (!query) return [];

  const apiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY;
  
  try {
    // We use "s=" to get an array of multiple results
    const res = await fetch(
      `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${apiKey}`
    );
    const data = await res.json();

    if (data.Response === "True") {
      console.log(data)
      return data.Search; // OMDb returns a "Search" array
    }
    return [];
  } catch (error) {
    console.error("OMDb Fetch Error:", error);
    return [];
  }
};
