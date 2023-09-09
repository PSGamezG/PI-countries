import React from "react";

const SortCountries = ({ onChange }) => {
  return (
    <div>
      <label>Alphabetical Order</label>
      <select onChange={onChange}>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
    </div>
  );
};

export default SortCountries;

// const handlePopulationChange = (event) => {
//   console.log("Population Change Event:", event); // Log the event object
//   console.log("Population Value:", event.target.value);
//   handlePopulationOrder(event.target.value);
// };
