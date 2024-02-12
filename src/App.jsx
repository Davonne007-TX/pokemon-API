import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";
import TopHeader from "./components/TopHeader";
import { Pokemon } from "./components/Pokemon";
import "./App.css";
import SinglePokemon from "./components/SinglePokemon";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  return (
    <>
      <TopHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/pokemon"
          element={<Pokemon setSelectedPokemon={setSelectedPokemon} />}
        />

        <Route
          path="/singlePokemon"
          element={<SinglePokemon pokemon={selectedPokemon} />}
        />
      </Routes>
    </>
  );
}

export default App;
