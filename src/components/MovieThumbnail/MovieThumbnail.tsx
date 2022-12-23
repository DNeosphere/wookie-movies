import { Link } from "react-router-dom";

import { Movie } from "../../types";
import "./MovieThumbnail.css";

type MovieThumbnailProps = Movie;

export default function MovieThumbnail(props: MovieThumbnailProps) {
  const { title, backdrop, id } = props;
  return (
    <Link to="/detail" state={props}>
      <div className="movie-container" key={id}>
        <p className="movie__title">{title}</p>
        <img
          className="movie__thumbnail"
          alt={`poster of movie ${title}`}
          src={backdrop}
        />
      </div>
    </Link>
  );
}
