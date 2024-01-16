import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function TopHeader() {
  const navigate = useNavigate();

  function goToHomePage() {
    navigate("/");
  }

  function goToLogin() {
    navigate("/login");
  }
  return (
    <>
      <div className="flex flex-col mt-10 top-header w-full">
        <h1 onClick={goToHomePage} className="text-4xl">
          Pokemon For Life
        </h1>

        <nav>
          <Link to="/pokemon" className="h2">
            Pokédex
          </Link>
        </nav>
      </div>
    </>
  );
}
