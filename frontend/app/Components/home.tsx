import MovieGrid from "@/app/Components/Cards/MovieGrid";
import { fetchTrendingMovies } from "@/app/lib/tmdb";
import { Movie } from "@/app/lib/ombd";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

const TrendingMovies = async () => {
  const trending = await fetchTrendingMovies();

  const movies: Movie[] = trending.map((movie) => ({
    Title: movie.title,
    Year: movie.release_date
      ? movie.release_date.substring(0, 4)
      : "N/A",
    imdbID: movie.id.toString(),
    Type: "movie",
    Poster: movie.poster_path
      ? `${IMAGE_BASE}${movie.poster_path}`
      : "N/A",
  }));

  return (
    <>
    <div className="flex flex-col gap-1 justify-center items-center">
        <MovieGrid movies={movies} />
    </div>
    </>
    );
};

export default TrendingMovies;