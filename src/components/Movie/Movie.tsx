import { TMoviesByGenre } from "../../types";
import "./Movie.css";
import MovieThumbnail from "../MovieThumbnail/MovieThumbnail";

type MoviesProps = {
  moviesByGenre: TMoviesByGenre;
};

export function Movies({ moviesByGenre }: MoviesProps) {
  return (
    <div className="container">
      {Object.entries(moviesByGenre).map(([genre, movies], index) => {
        return (
          <div key={index} className="genre-row">
            <h2>{genre}</h2>
            <div className="movies-container">
              {movies.map((movie) => {
                return <MovieThumbnail key={movie.id} {...movie} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
