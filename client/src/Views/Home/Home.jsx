import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getByName,
  getCountries,
  alphabeticalOrder,
  populationOrder,
} from "../../Redux/actions";
import CardsContainer from "../../Components2/CardsContainer/CardsContainer";
import SearchBar from "../../Components2/SearchBar/SearchBar";
import SortCountries from "../../Components2/SortandFilter/SortCountries";
import Pagination from "../../Components2/Pagination";

const Home = () => {
  const dispatch = useDispatch();

  const countries = useSelector((state) => state.countries);

  const [searched, setSearched] = useState(false);

  const [currentSortOrder, setCurrentSortOrder] = useState("A-Z");

  const [searchString, setSearchString] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [searchResults, setSearchResults] = useState([]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const handleChange = async (name) => {
    try {
      if (name) {
        await dispatch(getByName(name));
        setSearched(true);
        setSearchResults(countries);
      } else {
        setSearched(false);
        setSearchResults([]);
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

  const filteredTotalItems = searched ? searchResults.length : countries.length;
  const filteredTotalPages = Math.ceil(filteredTotalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCountries = searched
    ? searchResults.slice(startIndex, endIndex)
    : countries.slice(startIndex, endIndex);

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
