import React from "react";

export function SearchBar({ value, setSearchedPokemon }) {
  const handleSearch = (e) => {
    const inputSearch = e.target.value;
    setSearchedPokemon(inputSearch);
  };
  return (
    <section className="mt-10 p-2 font-orb flex justify-center">
      <input
        type="search"
        placeholder="Search For Pokemon"
        onChange={handleSearch}
        value={value}
        className="focus:outline-none bg-bright p-3 rounded-full mt-10"
      />
    </section>
  );
}
