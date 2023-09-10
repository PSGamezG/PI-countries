import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getByName,
  getCountries,
  alphabeticalOrder,
  populationOrder,
  continentFilter,
  getActivities,
  activityFilter,
} from "../../Redux/actions";
import CardsContainer from "../../Components2/CardsContainer/CardsContainer";
import SearchBar from "../../Components2/SearchBar/SearchBar";
import SortCountries from "../../Components2/SortandFilter/SortCountries";
import Pagination from "../../Components2/Pagination";
import FilterCountries from "../../Components2/SortandFilter/FilterCountries";
import FilterActivities from "../../Components2/SortandFilter/FilterActivities";

const Home = () => {
  const dispatch = useDispatch();

  const countries = useSelector((state) => state.countries);
  const filterContinent = useSelector((state) => state.filterContinent);
  const activities = useSelector((state) => state.allActivities);

  const [searched, setSearched] = useState(false);

  const [currentSortOrder, setCurrentSortOrder] = useState("A-Z");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [selectedContinent, setSelectedContinent] = useState("");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, []);

  const handleChange = async (name) => {
    try {
      if (name) {
        await dispatch(getByName(name));
        setSearched(true);
      } else {
        setSearched(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSort = (value) => {
    setCurrentSortOrder(value);
    dispatch(alphabeticalOrder(value));
  };

  const handlePopulationSort = (order) => {
    dispatch(populationOrder(order));
  };

  const handleFilter = (continent) => {
    setSelectedContinent(continent);
    dispatch(continentFilter(continent));
  };

  function handleFilterActivity(event) {
    event.preventDefault();
    event.target.value === "none"
      ? dispatch(getCountries())
      : dispatch(activityFilter(event.target.value));
  }

  const filteredCountries = searched
    ? countries
    : selectedContinent
    ? countries.filter((country) =>
        country.continents.includes(selectedContinent)
      )
    : countries;

  const filteredTotalItems = filteredCountries.length;
  const filteredTotalPages = Math.ceil(filteredTotalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCountries = filteredCountries.slice(startIndex, endIndex);

  // Si no, usa todos los países

  // const handleReset = () => {
  //   setSearched([]);
  // };

  return (
    <div>
      <h1>Este es el home</h1>
      <SortCountries onChange={(event) => handleSort(event.target.value)} />
      <SearchBar onSearch={handleChange} totalPages={filteredTotalPages} />
      <div>
        <label>Sort by Population:</label>
        <select onChange={(event) => handlePopulationSort(event.target.value)}>
          <option value="ASC">Ascending</option>
          <option value="DESC">Descending</option>
        </select>
      </div>
      <FilterActivities handleFilterActivity={handleFilterActivity} />
      <FilterCountries onChange={(event) => handleFilter(event.target.value)} />
      <CardsContainer countries={currentCountries} />
      <Pagination
        className="pagination"
        totalItems={filteredTotalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />

      {/* <button onClick={handleReset}>All countries</button> */}
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default Home;
