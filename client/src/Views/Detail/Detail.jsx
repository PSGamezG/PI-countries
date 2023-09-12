import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getById } from "../../Redux/actions";
import "./Detail.css";

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
    <div className="detail-container">
      <h2 className="detail-title">Country Details</h2>
      {countryDetail && (
        <div className="card">
          <div className="card-front">
            <img
              className="detail-image"
              src={countryDetail.flagImage}
              alt={`${countryDetail.name} Flag`}
            />
          </div>
          <div className="card-back">
            <h3>{countryDetail.name}</h3>
            <p>ID: {countryDetail.ID}</p>
            <p>Continent: {countryDetail.continents}</p>
            <p>Capital: {countryDetail.capital}</p>
            <p>Subregion: {countryDetail.subregion || "null"}</p>
            <p>Area: {countryDetail.area || "null"}</p>
            <p>Population: {countryDetail.population || "null"}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
