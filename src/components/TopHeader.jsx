import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function TopHeader() {
  const navigate = useNavigate();

  function goToHomePage() {
    navigate("/");
  }

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center mt-8">
        <h1
          onClick={goToHomePage}
          className="text-4xl mb-8 animate-pulse hover:text-bright hover:underlaine cursor-pointer"
        >
          Pokemon For Life
        </h1>
        <Link to="/pokemon" className="h2 text-blueBright hover:text-bright">
          Pokédex
        </Link>{" "}
      </div>
    </>
  );
}
