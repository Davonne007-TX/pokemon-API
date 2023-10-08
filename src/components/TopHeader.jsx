import React from "react";
import { Link } from "react-router-dom";

export default function TopHeader() {
  return (
    <div className="top-header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
}
