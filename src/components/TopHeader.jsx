import React from "react";
import { Link } from "react-router-dom";

export default function TopHeader() {
  return (
    <div className="top-header">
      <div className="login-logout">
        <p>Login</p>
        <p>Logout</p>
      </div>
      <h1>Pokemon For Life</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/pokemon">Pokemon</Link>
      </nav>
    </div>
  );
}
