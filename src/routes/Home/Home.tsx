import { useState } from "react";

import { useFetchMovies } from "../../hooks";
import { getMoviesByGenre } from "../../utils/getMoviesByGenre";
import { Header, Loading, Movies } from "../../components";
import { Movie } from "../../types";

export function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, loading } = useFetchMovies(searchTerm);
  const moviesByGenre = getMoviesByGenre(data as Movie[]);
  return (
    <>
      <Header onInputChange={setSearchTerm} />
      <Movies moviesByGenre={moviesByGenre} />
      {loading && <Loading />}
      {!data.length && !loading && (
        <div className="info-container">No results Found T-T</div>
      )}
    </>
  );
}
