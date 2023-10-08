import React from "react";
import "./css/SearchBar.css";

export function SearchBar({ value, setSearchedPokemon }) {
  const handleSearch = (e) => {
    const inputSearch = e.target.value;
    setSearchedPokemon(inputSearch);
  };
  return (
    <div className="searchBar">
      <input
        type="search"
        placeholder="Search For Pokemon"
        onChange={handleSearch}
        value={value}
      />
    </div>
  );
}
