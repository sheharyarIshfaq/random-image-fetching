import React from "react";

import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        GoDev Project
      </Link>
      <div className="navLinks">
        <Link to="/random-quote">Random Quote</Link>
        <Link to="/about">About us</Link>
        <Link to="/contact-us">Contact us</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
