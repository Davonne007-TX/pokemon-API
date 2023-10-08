import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";
import TopHeader from "./components/TopHeader";
import Login from "./components/Login";

import "./App.css";

function App() {
  return (
    <>
      <TopHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
