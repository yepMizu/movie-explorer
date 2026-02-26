// components/MovieGrid.tsx
import React from 'react';
import Image from 'next/image';
import { Movie } from '@/app/lib/ombd';

interface MovieGridProps {
  movies: Movie[];
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className='flex flex-col justify-center items-start'>
        <div className="font-bold ml-2">Recommended</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10 w-full place-items-center px-1">
        {movies.map((movie, index) => (
            <div
            key={`${movie.imdbID}-${index}`} 
            className="flex flex-col justify-center items-start group cursor-pointer"
            >
            <div className="w-46.25 h-66.25 relative shadow-md bg-slate-800 rounded-md">
                <Image
                src={
                    movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/300x450?text=No+Poster"
                }
                alt={movie.Title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-md"
                sizes="(max-width: 768px) 50vw, 20vw"
                />
            </div>

            <div className="mt-3">
                <h3 className="font-semibold text-sm md:text-base line-clamp-1 text-white hover:text-blue-400 transition-colors w-50">
                {movie.Title}
                </h3>
                <p className="text-xs text-slate-400">{movie.Year}</p>
            </div>
            </div>
        ))}
        </div>
    </div>
  );
};

export default MovieGrid;