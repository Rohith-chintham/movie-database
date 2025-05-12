
import React from 'react';
import { Movie } from '../data/movies';
import MovieCard from './MovieCard';

interface CategoryRowProps {
  title: string;
  movies: Movie[];
}

const CategoryRow = ({ title, movies }: CategoryRowProps) => {
  return (
    <div className="category-row">
      <h2 className="text-xl font-medium mb-3 px-4">{title}</h2>
      <div className="flex gap-4 px-4 pb-4 overflow-x-auto">
        {movies.map(movie => (
          <div key={movie.id} className="min-w-[180px] md:min-w-[200px]">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryRow;
