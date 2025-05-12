
import React from 'react';
import { Movie } from '../data/movies';
import { Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FeaturedMovieProps {
  movie: Movie;
}

const FeaturedMovie = ({ movie }: FeaturedMovieProps) => {
  const navigate = useNavigate();

  return (
    <div 
      className="relative h-[70vh] bg-cover bg-center flex items-end"
      style={{ 
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.4) 100%), url(${movie.backdropUrl})` 
      }}
    >
      <div className="container mx-auto px-4 pb-16 pt-32">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{movie.title}</h1>
        
        <div className="flex items-center text-sm mb-4 space-x-4">
          <span className="bg-primary text-white px-2 py-1 rounded">
            {movie.rating.toFixed(1)}
          </span>
          <span>{movie.year}</span>
          <span>{movie.runtime} min</span>
        </div>
        
        <div className="mb-6 max-w-2xl">
          <p className="text-gray-200">{movie.overview}</p>
        </div>
        
        <div className="flex flex-wrap gap-3">
          <button 
            onClick={() => navigate(`/movie/${movie.id}`)}
            className="bg-primary hover:bg-red-700 text-white font-medium px-6 py-3 rounded-md flex items-center"
          >
            <Play size={18} className="mr-2" />
            Watch Now
          </button>
          <button className="bg-muted hover:bg-gray-700 text-white font-medium px-6 py-3 rounded-md">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMovie;
