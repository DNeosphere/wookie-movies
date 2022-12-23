export type Movie = {
    backdrop: string;
    cast: string[];
    director: string;
    genres: string[];
    id: string;
    imdb_rating: number;
    length: string;
    overview: string;
    poster: string;
    released_on: string;
    slug: string;
    title: string;
  };

export type  TMoviesByGenre = Record<string, Movie[]>;
