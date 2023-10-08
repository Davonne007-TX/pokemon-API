import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";
import TopHeader from "./components/TopHeader";
import Login from "./components/Login";
import { Pokemon } from "./components/Pokemon";
import { Tournament } from "./components/Tournament";
import { Profile } from "./components/Profile";
import { Shop } from "./components/Shop";
import "./App.css";

function App() {
  return (
    <>
      <TopHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/tournament" element={<Tournament />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;
