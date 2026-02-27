"use client";
import { useState } from "react";
import Navbar from "../Components/navbar/page";
import MovieGrid from "../Components/Cards/MovieGrid"; 
import { fetchMovies, Movie } from "../lib/ombd";


export default function Search() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSearch = async () => {
    setLoading(true);
    const results = await fetchMovies(query);
    if (results.length === 0 && query !== "") {
        alert("No movies found for that search.");
    }
    setMovies(results);
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="h-screen bg-[#151A24] text-white p-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6">Movie Search</h1>

        <div className="flex gap-2 w-full max-w-md">
          <input
            type="text"
            placeholder="Search for movies..."
            className="flex-1 px-4 py-2 text-black rounded outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button
            onClick={handleSearch}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded transition-colors disabled:bg-slate-700"
          >
            {loading ? "..." : "Search"}
          </button>
        </div>

      
        <MovieGrid movies={movies} />
        
        {!loading && movies.length === 0 && query && (
            <p className="mt-10 text-slate-500">Search results will appear here.</p>
        )}
      </div>
    </>
  );
}