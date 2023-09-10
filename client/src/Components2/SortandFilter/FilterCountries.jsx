import React from "react";

const FilterCountries = ({ onChange }) => {
  return (
    <div>
      <h1>Countries Filter: </h1>
      <select onChange={onChange}>
        <option value="">All</option>
        <option value="Africa">Africa</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default FilterCountries;
