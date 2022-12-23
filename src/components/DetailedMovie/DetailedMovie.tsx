import { DateTime } from "luxon";

import { Movie } from "../../types";
import "./DetailedMovie.css";
import { StarRating } from "..";

export function DetailedMovie(props: Movie) {
  const {
    title,
    cast,
    overview,
    imdb_rating,
    released_on,
    poster,
    director,
    length,
  } = props;

  const { year } = DateTime.fromISO(released_on as string);

  return (
    <div className="container detail-container">
      <img className="detail-image" src={poster} alt={`Poster of ${title}`} />
      <div className="detail__description-container">
        <h1>
          {title} ({imdb_rating})
        </h1>
        <p className="detail__info">
          {year} | {length} | {director}
        </p>
        {cast.map((actor, index) => {
          return <span key={index}> {actor} |</span>;
        })}
        <p>{overview}</p>
      </div>
      <StarRating />
    </div>
  );
}
