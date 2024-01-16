import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemonById } from "./API/api.jsx";

export default function SinglePokemon({ pokemon }) {
  if (!pokemon) {
    return <div>Pokemon is loading</div>;
  }
  return (
    <>
      <h2 style={{ marginTop: "200px" }}>Selected Pokemon</h2>

      <div className="single-pokemon-container">
        <h3>{pokemon.name}</h3>
        <img src={pokemon.image} />
      </div>
    </>
  );
}
