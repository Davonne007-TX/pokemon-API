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
      <div className="login-logout">
        <p onClick={goToLogin}>Login</p>
        <p>Logout</p>
      </div>
      <h1 onClick={goToHomePage}>Pokemon For Life</h1>

      <nav>
        <Link to="/pokemon">Pokemon</Link>
        <Link to="/tournament">Tournament</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/shop">Shop</Link>
      </nav>
    </div>
  );
}
