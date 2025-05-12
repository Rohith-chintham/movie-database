
export interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  backdropUrl?: string;
  year: number;
  rating: number;
  runtime?: number;
  genres: string[];
  overview: string;
  director?: string;
  cast?: string[];
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    posterUrl: "https://source.unsplash.com/random/300x450?movie,inception",
    backdropUrl: "https://source.unsplash.com/random/1920x1080?movie,inception",
    year: 2010,
    rating: 8.8,
    runtime: 148,
    genres: ["Action", "Sci-Fi", "Thriller"],
    overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"]
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    posterUrl: "https://source.unsplash.com/random/300x450?movie,prison",
    backdropUrl: "https://source.unsplash.com/random/1920x1080?movie,prison",
    year: 1994,
    rating: 9.3,
    runtime: 142,
    genres: ["Drama"],
    overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    director: "Frank Darabont",
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"]
  },
  {
    id: 3,
    title: "The Dark Knight",
    posterUrl: "https://source.unsplash.com/random/300x450?movie,batman",
    backdropUrl: "https://source.unsplash.com/random/1920x1080?movie,batman",
    year: 2008,
    rating: 9.0,
    runtime: 152,
    genres: ["Action", "Crime", "Drama"],
    overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"]
  },
  {
    id: 4,
    title: "Pulp Fiction",
    posterUrl: "https://source.unsplash.com/random/300x450?movie,pulp",
    backdropUrl: "https://source.unsplash.com/random/1920x1080?movie,pulp",
    year: 1994,
    rating: 8.9,
    runtime: 154,
    genres: ["Crime", "Drama"],
    overview: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    director: "Quentin Tarantino",
    cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"]
  },
  {
    id: 5,
    title: "The Matrix",
    posterUrl: "https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    backdropUrl: "https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    year: 1999,
    rating: 8.7,
    runtime: 136,
    genres: ["Action", "Sci-Fi"],
    overview: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    director: "Lana Wachowski, Lilly Wachowski",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
  },
  {
    id: 6,
    title: "Goodfellas",
    posterUrl: "https://source.unsplash.com/random/300x450?movie,mafia",
    backdropUrl: "https://source.unsplash.com/random/1920x1080?movie,mafia",
    year: 1990,
    rating: 8.7,
    runtime: 146,
    genres: ["Biography", "Crime", "Drama"],
    overview: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
    director: "Martin Scorsese",
    cast: ["Robert De Niro", "Ray Liotta", "Joe Pesci"]
  },
  {
    id: 7,
    title: "Fight Club",
    posterUrl: "https://source.unsplash.com/random/300x450?movie,fight",
    backdropUrl: "https://source.unsplash.com/random/1920x1080?movie,fight",
    year: 1999,
    rating: 8.8,
    runtime: 139,
    genres: ["Drama"],
    overview: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    director: "David Fincher",
    cast: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"]
  },
  {
    id: 8,
    title: "Interstellar",
    posterUrl: "https://source.unsplash.com/random/300x450?movie,space",
    backdropUrl: "https://source.unsplash.com/random/1920x1080?movie,space",
    year: 2014,
    rating: 8.6,
    runtime: 169,
    genres: ["Adventure", "Drama", "Sci-Fi"],
    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
  },
  {
    id: 9,
    title: "The Godfather",
    posterUrl: "https://source.unsplash.com/random/300x450?movie,godfather",
    backdropUrl: "https://source.unsplash.com/random/1920x1080?movie,godfather",
    year: 1972,
    rating: 9.2,
    runtime: 175,
    genres: ["Crime", "Drama"],
    overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    director: "Francis Ford Coppola",
    cast: ["Marlon Brando", "Al Pacino", "James Caan"]
  },
  {
    id: 10,
    title: "Forrest Gump",
    posterUrl: "https://source.unsplash.com/random/300x450?movie,running",
    backdropUrl: "https://source.unsplash.com/random/1920x1080?movie,running",
    year: 1994,
    rating: 8.8,
    runtime: 142,
    genres: ["Drama", "Romance"],
    overview: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.",
    director: "Robert Zemeckis",
    cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"]
  },
  {
    id: 11,
    title: "The Silence of the Lambs",
    posterUrl: "https://source.unsplash.com/random/300x450?movie,thriller",
    backdropUrl: "https://source.unsplash.com/random/1920x1080?movie,thriller",
    year: 1991,
    rating: 8.6,
    runtime: 118,
    genres: ["Crime", "Drama", "Thriller"],
    overview: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    director: "Jonathan Demme",
    cast: ["Jodie Foster", "Anthony Hopkins", "Scott Glenn"]
  },
  {
    id: 12,
    title: "Gladiator",
    posterUrl: "https://source.unsplash.com/random/300x450?movie,roman",
    backdropUrl: "https://source.unsplash.com/random/1920x1080?movie,roman",
    year: 2000,
    rating: 8.5,
    runtime: 155,
    genres: ["Action", "Adventure", "Drama"],
    overview: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    director: "Ridley Scott",
    cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"]
  }
];

export const getMoviesByGenre = (genre: string): Movie[] => {
  return movies.filter(movie => movie.genres.includes(genre));
};

export const getMovieById = (id: number): Movie | undefined => {
  return movies.find(movie => movie.id === id);
};

export const searchMovies = (query: string): Movie[] => {
  const lowercaseQuery = query.toLowerCase();
  return movies.filter(movie => 
    movie.title.toLowerCase().includes(lowercaseQuery) ||
    movie.overview.toLowerCase().includes(lowercaseQuery) ||
    movie.genres.some(genre => genre.toLowerCase().includes(lowercaseQuery))
  );
};
