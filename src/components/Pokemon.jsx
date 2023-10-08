import React from "react";
import { SearchBar } from "./SearchBar";
import "./css/Pokemon.css";

export function Pokemon() {
  return (
    <div className="pokemon-container">
      <SearchBar />
    </div>
  );
}
