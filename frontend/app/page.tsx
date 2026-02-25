"use client"
import { useState } from "react"

interface MovieData {
  Title: string;
  Year: string;
  imdbRating: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Plot: string;
  Poster: string;
}

export default function Home() {
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(false) 
  const [movie, setMovie] = useState<MovieData | null>(null);

  const searchMovie = async () => {
    if (!query) return; 
    
    setLoading(true)
    try {
      
      const apiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY;
      
      
      const res = await fetch(
        `https://www.omdbapi.com/?t=${encodeURIComponent(query)}&apikey=${apiKey}`
      );
      
      const data = await res.json();
      
      if (data.Response === "True") {
        setMovie(data);
      } else {
        alert("Movie not found!");
        setMovie(null);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 flex justify-center items-center ">
      <h1 className="text-3xl font-bold mb-4">Movie Search</h1>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter movie title..."
          className="px-4 py-2 text-black rounded outline-none focus:ring-2 focus:ring-blue-400 bg-blue-300"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          // Trigger search on "Enter" key
          onKeyDown={(e) => e.key === 'Enter' && searchMovie()}
        />
        <button
          onClick={searchMovie}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded transition-colors disabled:bg-slate-600"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {movie && (
        <div className="mt-6 bg-slate-800 p-6 rounded-lg shadow-xl max-w-md">
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Poster"}
            alt={movie.Title}
            className="w-full rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold">
            {movie.Title} <span className="text-slate-400">({movie.Year})</span>
          </h2>
          <div className="flex gap-4 my-2 text-yellow-400 font-bold">
            <p>⭐ {movie.imdbRating}</p>
            <p className="text-slate-300 font-normal">| {movie.Runtime}</p>
          </div>
          <p className="text-slate-300 italic mb-2">{movie.Genre}</p>
          <p className="text-sm text-slate-400"><span className="font-bold text-white">Director:</span> {movie.Director}</p>
          <p className="mt-4 text-slate-200 line-clamp-3">{movie.Plot}</p>
        </div>
      )}
    </div>
  )
}