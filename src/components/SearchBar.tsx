
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { searchMovies } from '../data/movies';

interface SearchBarProps {
  className?: string;
}

const SearchBar = ({ className }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.length > 2) {
      const searchResults = searchMovies(query);
      setResults(searchResults.slice(0, 5)); // Limit to 5 results
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setIsOpen(false);
      setQuery('');
    }
  };

  const handleResultClick = (id: number) => {
    navigate(`/movie/${id}`);
    setIsOpen(false);
    setQuery('');
  };

  return (
    <div className={`relative ${className || ''}`}>
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          className="w-full bg-muted px-4 py-2 pl-10 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-primary"
          onClick={() => setIsOpen(true)}
        />
        <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <Search size={18} />
        </button>
      </form>
      
      {isOpen && results.length > 0 && (
        <div className="absolute z-10 mt-1 w-full bg-popover rounded-md shadow-lg max-h-60 overflow-auto">
          <ul>
            {results.map(movie => (
              <li 
                key={movie.id}
                onClick={() => handleResultClick(movie.id)}
                className="px-4 py-2 hover:bg-muted cursor-pointer"
              >
                <div className="flex items-center">
                  <img 
                    src={movie.posterUrl} 
                    alt={movie.title} 
                    className="w-8 h-12 object-cover mr-2 rounded"
                  />
                  <div>
                    <p className="font-medium">{movie.title}</p>
                    <p className="text-xs text-gray-400">{movie.year}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
