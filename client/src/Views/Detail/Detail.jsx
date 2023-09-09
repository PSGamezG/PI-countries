import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getById } from "../../Redux/actions";

const Detail = () => {
  const { ID } = useParams();

  const dispatch = useDispatch();
  const countryDetail = useSelector((state) => state.countryDetail);

  useEffect(() => {
    dispatch(getById(ID));
  }, [dispatch, ID]);

  // Debugging
  console.log("Received countryDetail:", countryDetail);

  //const [countryDetail, setCountryDetail] = useState({});

  return (
    <div>
      <h2>Country Details</h2>
      {countryDetail && (
        <div>
          <img
            src={countryDetail.flagImage}
            alt={`${countryDetail.name} Flag`}
          />
          <h3>{countryDetail.name}</h3>
          <p>ID: {countryDetail.ID}</p>
          <p>Continent: {countryDetail.continents}</p>
          <p>Capital: {countryDetail.capital}</p>
          <p>Subregion: {countryDetail.subregion || "null"}</p>
          <p>Area: {countryDetail.area || "null"}</p>
          <p>Population: {countryDetail.population || "null"}</p>
        </div>
      )}
    </div>
  );
};

export default Detail;
