import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";
import TopHeader from "./components/TopHeader";
import Login from "./components/Login";
import { Pokemon } from "./components/Pokemon";

import { Shop } from "./components/Shop";
import "./App.css";
import SinglePokemon from "./components/SinglePokemon";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  return (
    <>
      <TopHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/pokemon"
          element={<Pokemon setSelectedPokemon={selectedPokemon} />}
        />

        <Route path="/shop" element={<Shop />} />
        <Route
          path="/singlePokemon"
          element={
            <SinglePokemon
              setSelectedPokemon={setSelectedPokemon}
              pokemon={selectedPokemon}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
