import { useState, useEffect } from "react";
import { KEY } from "./utilities";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    async function fetchMovies() {
      setIsLoading(true);
      setError("");
      try {
        const resp = await fetch(
          `http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${query}`,
          {
            signal: controller.signal,
          }
        );

        if (!resp.ok)
          throw new Error("Something went wrong with fetching movies!");
        const data = await resp.json();

        if (data.Response === "False") throw new Error("Movie not found");
        setMovies(data.Search);
        setError("");
      } catch (e) {
        //console.log(e.name);
        if (e.name !== "AbortError") {
          setError(`⛔Uppss! ${e.message}🔥`);
          console.error(`⛔Uppss! ${e.message}🔥`);
        }
      } finally {
        setIsLoading(false);
      }
    }
    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    //action?.();
    fetchMovies();

    return function () {
      controller.abort();
    };
  }, [query]);

  return { movies, isLoading, error };
}
