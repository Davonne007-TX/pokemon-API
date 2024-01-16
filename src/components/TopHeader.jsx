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
    <div className="top-header">
      <div className="login-logout flex flex-row ">
        <p onClick={goToLogin}>Login</p>
        <p>Logout</p>
      </div>
      <h1 onClick={goToHomePage} className="">
        Pokemon For Life
      </h1>

      <nav>
        <Link to="/pokemon" className="h2">
          Pokédex
        </Link>
      </nav>
    </div>
  );
}
