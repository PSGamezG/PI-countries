import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="searchar">
      <input onChange={handleChange} value={name} type="search" />
      <button onClick={() => onSearch(name)}>Search</button>
    </div>
  );
};

export default SearchBar;
