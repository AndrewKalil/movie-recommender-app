import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [movie, setMovie] = useState("");
  const [movies, setMovies] = useState("");
  const url = `https://movie-recommender-appi.herokuapp.com/movies/`;

  const handleChange = (e) => {
    setMovie(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(movie);
    setMovie("");
  };

  const fetchData = useCallback(async () => {
    setLoading(true);
    const response = await fetch(`${url}${searchTerm}`);
    const data = await response.json();
    console.log(data);
    setLoading(false);
    setMovies(data);
  }, [searchTerm, url]);

  useEffect(() => {
    fetchData();
  }, [searchTerm, fetchData]);
  return (
    <AppContext.Provider
      value={{
        loading,
        handleChange,
        movie,
        handleSubmit,
        movies,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
