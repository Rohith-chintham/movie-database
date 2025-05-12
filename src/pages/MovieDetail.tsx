
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieById, Movie } from '../data/movies';
import { Star, Clock, CalendarIcon, ArrowLeft, Play } from 'lucide-react';

const MovieDetail = () => {
  const { id } = useParams<{id: string}>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const movieData = getMovieById(parseInt(id));
      if (movieData) {
        setMovie(movieData);
      }
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Movie not found</h1>
        <button 
          onClick={() => navigate('/')} 
          className="text-primary hover:underline flex items-center mx-auto"
        >
          <ArrowLeft size={16} className="mr-2" /> Go back to home
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Backdrop */}
      <div 
        className="relative h-[70vh] bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.5) 100%), url(${movie.backdropUrl || movie.posterUrl})` 
        }}
      >
        <div className="container mx-auto px-4">
          <button 
            onClick={() => navigate('/')} 
            className="text-white hover:text-primary flex items-center absolute top-4 left-4"
          >
            <ArrowLeft size={20} className="mr-1" /> Back
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 -mt-40 relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Poster */}
          <div className="md:w-1/3 lg:w-1/4">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src={movie.posterUrl} 
                alt={`${movie.title} poster`}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Details */}
          <div className="md:w-2/3 lg:w-3/4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{movie.title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
              <div className="flex items-center">
                <Star size={18} className="text-yellow-400 mr-1" />
                <span>{movie.rating.toFixed(1)}</span>
              </div>
              <div className="flex items-center">
                <CalendarIcon size={16} className="mr-1" />
                <span>{movie.year}</span>
              </div>
              {movie.runtime && (
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  <span>{movie.runtime} min</span>
                </div>
              )}
              <div className="flex flex-wrap gap-2">
                {movie.genres.map(genre => (
                  <span key={genre} className="bg-muted px-2 py-1 rounded text-xs">
                    {genre}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Overview</h2>
              <p className="text-gray-300">{movie.overview}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Cast</h2>
              <div className="flex flex-wrap gap-2">
                {movie.cast?.map(actor => (
                  <span key={actor} className="text-gray-300">
                    {actor}{movie.cast && movie.cast.indexOf(actor) < movie.cast.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Director</h2>
              <p className="text-gray-300">{movie.director}</p>
            </div>

            <button className="bg-primary hover:bg-red-700 text-white font-medium px-6 py-3 rounded-md flex items-center">
              <Play size={18} className="mr-2" />
              Watch Trailer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
