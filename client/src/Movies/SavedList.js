import React from "react";
import { NavLink } from "react-router-dom";

const SavedList = props => {
  return (
    <nav className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map((movie, index) => (
        <span key={index} className="saved-movie">
          <NavLink activeClassName="saved-active" to={`/movies/${movie.id}`}>
            {movie.title}
          </NavLink>
        </span>
      ))}
      <NavLink exact to="/" activeClassName="saved-active">
        Home
      </NavLink>
    </nav>
  );
};

export default SavedList;
