import { useDispatch } from "react-redux";
import { addPopularMovies } from "../Utils/MoviesSlice";
import { API_OPTIONS } from "../Utils/Constants";
import { useEffect } from "react";

const usePopularMovies = () => {
     // Fetch Data from TMDB API and update store 
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies(); 
  },[])
}

export default usePopularMovies;