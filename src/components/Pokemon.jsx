import React from "react";
import { useState, useEffect } from "react";
import { SearchBar } from "./SearchBar";
import "./css/Pokemon.css";

export function Pokemon() {
  const [allPokemonData, setAllPokemonData] = useState([]);

  const getPokemon = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=30"
      );
      const data = await response.json();
      console.log(data);

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
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div className="pokemon-container">
      <SearchBar />
    </div>
  );
}
