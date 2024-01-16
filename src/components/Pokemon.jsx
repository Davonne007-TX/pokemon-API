import React from "react";
import { useState, useEffect } from "react";
import { SearchBar } from "./SearchBar";
import { MainPokemon } from "./MainPokemon";
import "./css/Pokemon.css";

export function Pokemon(setSelectedPokemon) {
  const [allPokemonData, setAllPokemonData] = useState([]);
  const [searchedPokemon, setSearchedPokemon] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  const getPokemon = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=30"
      );
      const data = await response.json();

      const promises = data.results.map(async (pokemon) => {
        const pokemonResponse = await fetch(pokemon.url);
        const pokemonData = await pokemonResponse.json();
        console.log("More Details:", pokemonData);
        return {
          name: pokemonData.name,
          image: pokemonData.sprites.front_default,
        };
      });
      const updatedPokemon = await Promise.all(promises);
      setAllPokemonData(updatedPokemon);
      setFilteredPokemon(updatedPokemon);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  useEffect(() => {
    const filteredPokemon = allPokemonData.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchedPokemon.toLowerCase())
    );
    setFilteredPokemon(filteredPokemon);
  }, [searchedPokemon, allPokemonData]);

  return (
    <>
      {allPokemonData.length > 0 && (
        <>
          <SearchBar
            value={searchedPokemon}
            setSearchedPokemon={setSearchedPokemon}
          />
          <div className="pokemon-container" key="pokemon.url">
            {/* <SearchBar
            value={searchedPokemon}
            setSearchedPokemon={setSearchedPokemon}
          /> */}
            {filteredPokemon.map((pokemon) => (
              <MainPokemon
                key={pokemon.name}
                name={pokemon.name}
                image={pokemon.image}
                setSelectedPokemon={setSelectedPokemon}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}
