import React, { useState, useEffect } from "react";
import Movie from "../component/Movie";
import homeStyles from "../component/CSS/Home.module.css";

const Home = (props) => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    );
    const json = await response.json();
    setMovie(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className={homeStyles.wrap}>
      {loading ? (
        <h2 className={homeStyles.loader}>Loading...</h2>
      ) : (
        <div className={homeStyles.movies}>
          {movie.map((targetMovie) => (
            <Movie
              key={targetMovie.id}
              id={targetMovie.id}
              coverImg={targetMovie.medium_cover_image}
              url={targetMovie.url}
              title={targetMovie.title}
              summary={targetMovie.summary}
              genres={targetMovie.genres}
            ></Movie>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
