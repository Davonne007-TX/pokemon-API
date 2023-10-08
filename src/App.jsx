import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";
import TopHeader from "./components/TopHeader";
import Login from "./components/Login";
import { Pokemon } from "./components/Pokemon";

import "./App.css";

function App() {
  return (
    <>
      <TopHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Pokemon" element={<Pokemon />} />
      </Routes>
    </>
  );
}

export default App;
