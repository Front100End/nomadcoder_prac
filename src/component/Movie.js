import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../component/CSS/Movie.module.css";

const Movie = ({ id, coverImg, url, title, summary, genres }) => {
  return (
    <div className={styles.movieWrap}>
      <img className={styles.movieImg} src={coverImg} />
      <div className={styles.contents}>
        <h2>
          <Link className={styles.movieName} to={`/movie/${id}`}>
            {title}
          </Link>
        </h2>
        <p className={styles.movieSummary}>
          {summary.length > 265 ? `${summary.slice(0, 265)}...` : summary}
        </p>
        <ul className={styles.movieGenresWrap}>
          {genres.map((genres, index) => (
            <li className={styles.movieGenres} key={index}>
              {genres}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
