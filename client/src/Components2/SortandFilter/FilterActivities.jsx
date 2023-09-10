import React from "react";
import { useSelector } from "react-redux";

const FilterActivities = ({ handleFilterActivity }) => {
  const activities = useSelector((state) => state.allActivities);

  return (
    <div>
      <h2>Activity Filter:</h2>
      <div>
        Search by activity
        {!activities ? (
          <p>No se han creado actividades</p>
        ) : (
          <select onChange={(event) => handleFilterActivity(event)}>
            <option value="none"></option>
            {activities.map((activity) => (
              <option value={activity.name} key={activity.ID}>
                {activity.name}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
};

export default FilterActivities;
