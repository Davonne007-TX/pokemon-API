import React from "react";

export function SearchBar({ value, setSearchedPokemon }) {
  const handleSearch = (e) => {
    const inputSearch = e.target.value;
    setSearchedPokemon(inputSearch);
  };
  return (
    <div className="mt-10 border-5 rounded-full p-2 font-mono">
      <input
        type="search"
        placeholder="Search For Pokemon"
        onChange={handleSearch}
        value={value}
        className="focus:outline-none bg-"
      />
    </div>
  );
}
