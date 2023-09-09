import React from "react";
import { NavLink } from "react-router-dom";
import "./Card.css";

const Card = ({ name, flagImage, continent, ID }) => {
  return (
    <div className="card">
      <NavLink to={`/countries/${ID}`}>
        <img src={flagImage} alt={`Flag of ${name}`} />
      </NavLink>
      <p>Name: {name}</p>
      <p>Continent: {continent}</p>
    </div>
  );
};
export default Card;
