
"use client"
import { useState } from "react"

export default function Home() {
  const [query, setQuery] = useState("")
  const [movie, setMovie] = useState(null)

  const searchMovie = async () => {
    const res = await fetch(
      `https://www.omdbapi.com/?t=${query}&apikey=YOUR_API_KEY`
    )
    const data = await res.json()
    setMovie(data)
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Movie Search</h1>

      <div className="flex gap-2">
        <input
          type="text"
          className="px-4 py-2 text-black rounded"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={searchMovie}
          className="bg-blue-500 px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      {movie && (
        <div className="mt-6 bg-slate-800 p-4 rounded">
          <h2 className="text-2xl font-semibold">
            {movie.Title} ({movie.Year})
          </h2>
          <p>⭐ {movie.imdbRating}</p>
          <p>{movie.Genre}</p>
          <p>{movie.Director}</p>
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="mt-4 w-60"
          />
        </div>
      )}
    </div>
  )
}