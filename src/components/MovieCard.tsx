
import React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../data/movies';
import { Star } from 'lucide-react';

interface MovieCardProps {
  movie: Movie;
  className?: string;
}

const MovieCard = ({ movie, className }: MovieCardProps) => {
  return (
    <Link to={`/movie/${movie.id}`} className={`block movie-card ${className || ''}`}>
      <div className="relative">
        <div className="movie-poster">
          <img 
            src={movie.posterUrl} 
            alt={`${movie.title} poster`} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
          <div className="flex items-center">
            <Star size={14} className="text-yellow-400 mr-1" />
            <span className="text-xs">{movie.rating.toFixed(1)}</span>
          </div>
          <h3 className="text-white font-medium truncate">{movie.title}</h3>
          <p className="text-xs text-gray-300">{movie.year}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
