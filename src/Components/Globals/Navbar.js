import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark fixed-top bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Users Exercise
        </Link>
        <Link to="/about" className="link-white">
          About
        </Link>
      </div>
    </nav>
  );
}
