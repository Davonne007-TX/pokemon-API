import React from "react";
import "./css/Pokemon.css";
import { useNavigate } from "react-router-dom";

export function MainPokemon({ name, image, setSelectedPokemon }) {
  const navigate = useNavigate();

  function pokemonDetails() {
    setSelectedPokemon({ name, image });
    navigate("/singlePokemon");
  }

  return (
    <div className="our-pokemon">
      <div>
        {" "}
        <h2>{name.toUpperCase()}</h2>
      </div>
      <div>
        {" "}
        <img src={image} className="pokemon-image" />
      </div>
      <div>
        {" "}
        <button type="button" className="seeDetails" onClick={pokemonDetails}>
          See Details
        </button>
      </div>
    </div>
  );
}
