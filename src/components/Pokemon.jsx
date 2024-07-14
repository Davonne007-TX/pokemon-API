import React from "react";
import { useState, useEffect } from "react";
import { SearchBar } from "./SearchBar";
import { MainPokemon } from "./MainPokemon";
import "./css/Pokemon.css";

export function Pokemon({ setSelectedPokemon }) {
  const [allPokemonData, setAllPokemonData] = useState([]);
  const [searchedPokemon, setSearchedPokemon] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  const getPokemon = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=50"
      );
      const data = await response.json();

      const promises = data.results.map(async (pokemon) => {
        const pokemonResponse = await fetch(pokemon.url);
        const pokemonData = await pokemonResponse.json();
        // console.log("More Details:", pokemonData);

        //fetch official artwork
        const officialArtWork = await fetch(
          pokemonData.sprites.other["official-artwork"].front_default
        );
        const artWorkData = await officialArtWork.blob();

        // Convert blob to data URL
        const image = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(artWorkData);
        });

        // Fetch abilities
        const abilities = pokemonData.abilities.map(
          (ability) => ability.ability.name
        );

        return {
          name: pokemonData.name,
          // image: pokemonData.sprites.front_shiny,
          image: image,
          backImage: pokemonData.sprites.back_shiny,
          height: pokemonData.height,
          weight: pokemonData.weight,
          base_experience: pokemonData.base_experience,
          abilities: abilities,
          order: pokemonData.order,
          species: pokemonData.species.name,
          id: pokemonData.id,
        };
      });
      const updatedPokemon = await Promise.all(promises);
      setAllPokemonData(updatedPokemon);
      setFilteredPokemon(updatedPokemon);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //useEffect and filtered Pokemon
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
        <main className="bg-darkBlue flex flex-col">
          <section className="max-w-xl mr-auto ml-auto ">
            {/* search bar component  */}
            <SearchBar
              value={searchedPokemon}
              setSearchedPokemon={setSearchedPokemon}
            />
          </section>
          <section className="flex justify-center items-center mt-2">
            <section
              className="pokemon-container flex flex-wrap bg-blueBright mt-10 border-8 border-white gap-10 p-5 rounded-2xl"
              key="pokemon.url"
            >
              {filteredPokemon.map((pokemon) => (
                <MainPokemon
                  key={pokemon.name}
                  name={pokemon.name}
                  height={pokemon.height}
                  weight={pokemon.weight}
                  base_experience={pokemon.base_experience}
                  abilities={pokemon.abilities}
                  order={pokemon.order}
                  species={pokemon.species}
                  id={pokemon.id}
                  image={pokemon.image}
                  backImage={pokemon.backImage}
                  setSelectedPokemon={setSelectedPokemon}
                />
              ))}
            </section>
          </section>
        </main>
      )}
    </>
  );
}
