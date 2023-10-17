import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemonById } from "./API/api.jsx";

export default function SinglePokemon({ setSelectedPokemon, pokemon }) {
  const [singlePokemon, setSinglePokemon] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    const fetchSinglePokemon = async () => {
      try {
        const data = await fetchPokemonById(id);
        setSinglePokemon(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchSinglePokemon();
  }, [id]);
  return (
    <>
      <h2 style={{ marginTop: "200px" }}>Selected Pokemon</h2>

      <div className="single-pokemon-container">
        {singlePokemon && <h3>{singlePokemon.name}</h3>}
      </div>
    </>
  );
}
