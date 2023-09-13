import React from "react";
import "../App.css";
import "./new.js";

const Header = () => {
  return (
    <header class="header">
      <a href="#" class="logo">
        Portfolio
      </a>
      <i class="bx bx-menu" id="menu-icon"></i>

      <nav class="navbar">
        <a href="#home" className="active link-underline-opacity-0">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
