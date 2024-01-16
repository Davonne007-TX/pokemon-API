import { useEffect, useState } from "react";

export default function SinglePokemon({ pokemon }) {
  const [singlePokemon, setSinglePokemon] = useState("");

  useEffect(() => {
    console.log("Received Pokemon:", pokemon);
    if (pokemon) {
      setSinglePokemon(pokemon);
    }
  }, [pokemon]);

  if (!pokemon) {
    return <div>Pokemon is loading...</div>;
  }
  return (
    <>
      <div>
        <h2>{singlePokemon.name}</h2>
        <img src={singlePokemon.image} alt="Pokemon Selected Image" />
      </div>
    </>
  );
}
