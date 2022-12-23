import { Movie, TMoviesByGenre } from "../types";


export const getMoviesByGenre = (movies: Movie[]): TMoviesByGenre => {
    const moviesByGenre: TMoviesByGenre = {};
  
    if (Boolean(movies.length)) {
      movies.forEach((movie: Movie) => {
        const genres = Array.from(movie["genres"]);
        genres.forEach((genre) => {
          const hasPrevValues = Boolean(moviesByGenre[genre]);
          moviesByGenre[genre] = hasPrevValues
            ? [...moviesByGenre[genre], movie]
            : [movie];
        });
      });
    }
  
    return moviesByGenre;
  };