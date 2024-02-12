import React from "react";
import "./css/Pokemon.css";
import { useNavigate } from "react-router-dom";

export function MainPokemon({
  name,
  image,
  setSelectedPokemon,
  height,
  weight,
  base_experience,
  order,
  abilities,
  species,
  backImage,
  id,
}) {
  const navigate = useNavigate();

  function pokemonDetails() {
    setSelectedPokemon({
      name,
      image,
      height,
      weight,
      species,
      base_experience,
      order,
      abilities,
      backImage,
      id,
    });

    navigate("/singlePokemon");
  }

  return (
    <div className="our-pokemon flex flex-col justify-center items-center">
      <div>
        {" "}
        <h2 className="text-3xl text-bright">{name.toUpperCase()}</h2>
      </div>
      <div>
        {" "}
        <img
          src={image}
          className="w-20 mt-20 ml-4 bg-white border-8 border-black rounded-full"
        />
      </div>
      <div>
        {" "}
        <button
          type="button"
          className="bg-white rounded-full p-1 hover:text-red text-blueBright mt-20 text-md font-mono"
          onClick={pokemonDetails}
        >
          See Details
        </button>
      </div>
    </div>
  );
}
