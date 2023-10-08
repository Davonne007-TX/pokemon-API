import React from "react";

export function MainPokemon({ name, image }) {
  return (
    <div>
      <h2>{name.toUpperCase()}</h2>
      <img src={image} />
      <button>See Details</button>
    </div>
  );
}
