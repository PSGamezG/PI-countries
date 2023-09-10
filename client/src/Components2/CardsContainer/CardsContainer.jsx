import React from "react";
import Card from "../Card/Card";
//import { useSelector } from "react-redux";
import "./CardsContainer.css";

const CardsContainer = ({ countries }) => {
  if (!countries || countries.length === 0) {
    return <div>No countries available.</div>;
  }

  return (
    <div className="card-container">
      {countries.map((country) => {
        return (
          <Card
            key={country.ID}
            ID={country.ID}
            name={country.name}
            flagImage={country.flagImage}
            continent={country.continents}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
