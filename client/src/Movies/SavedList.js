import React from "react";
import { Link } from "react-router-dom";

const SavedList = props => {
  return (
    <nav className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map((movie, index) => (
        <span key={index} className="saved-movie">
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </span>
      ))}
      <Link to="/">
        <div className="home-button">Home</div>
      </Link>
    </nav>
  );
};

export default SavedList;
