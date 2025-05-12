
import React from 'react';
import FeaturedMovie from '../components/FeaturedMovie';
import CategoryRow from '../components/CategoryRow';
import SearchBar from '../components/SearchBar';
import { movies, getMoviesByGenre } from '../data/movies';

const Index = () => {
  // Choose a random featured movie
  const featuredMovie = movies[Math.floor(Math.random() * movies.length)];
  
  // Categories
  const actionMovies = getMoviesByGenre('Action');
  const dramaMovies = getMoviesByGenre('Drama');
  const sciFiMovies = getMoviesByGenre('Sci-Fi');
  
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-primary font-bold text-2xl mr-8">MovieDB</h1>
              <nav className="hidden md:flex space-x-6">
                <a href="/" className="text-white hover:text-primary">Home</a>
                <a href="/movies" className="text-white hover:text-primary">Movies</a>
                <a href="/tv-shows" className="text-white hover:text-primary">TV Shows</a>
                <a href="/watchlist" className="text-white hover:text-primary">Watchlist</a>
              </nav>
            </div>
            <div className="w-56 md:w-64">
              <SearchBar />
            </div>
          </div>
        </div>
      </header>

      {/* Featured Movie */}
      <FeaturedMovie movie={featuredMovie} />

      {/* Movie Categories */}
      <div className="container mx-auto space-y-8 py-8">
        <CategoryRow title="Action Movies" movies={actionMovies} />
        <CategoryRow title="Drama" movies={dramaMovies} />
        <CategoryRow title="Sci-Fi" movies={sciFiMovies} />
        <CategoryRow title="Top Rated" movies={movies.sort((a, b) => b.rating - a.rating).slice(0, 10)} />
      </div>

      {/* Footer */}
      <footer className="bg-black py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-primary font-bold text-xl">MovieDB</h2>
              <p className="text-gray-400 text-sm mt-2">Your ultimate movie database</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary">About</a>
              <a href="#" className="text-gray-400 hover:text-primary">Contact</a>
              <a href="#" className="text-gray-400 hover:text-primary">Privacy</a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} MovieDB. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
