import React from "react";
import "./css/Pokemon.css";

export function MainPokemon({ name, image }) {
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
        <button type="button" className="seeDetails">
          See Details
        </button>
      </div>
    </div>
  );
}
