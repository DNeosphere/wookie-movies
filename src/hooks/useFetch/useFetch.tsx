import { useEffect, useState } from "react";
import { Movie } from "../../types";

type TFetchResult = {
  data: Movie[];
  loading: boolean;
  error: any;
};

const fetchSettings = {
  url: "https://wookie.codesubmit.io/movies",
  token: "Bearer Wookie2021",
};

export const useFetchMovies = (searchTerm: string = ""): TFetchResult => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { url, token } = fetchSettings;

  const fetchUrlWithSearchTerm = `${url}?q=${searchTerm}`;

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(fetchUrlWithSearchTerm, {
          headers: new Headers({
            Authorization: token,
          }),
        });
        const data = await response.json();
        setData(data.movies);
      } catch (e: any) {
        setError(e);
        console.log(e);
      }
      setLoading(false);
    })();
  }, [searchTerm]);

  return { data, loading, error };
};
