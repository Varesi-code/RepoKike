import React from "react";
import navStyles from "./Nav.module.css";
import { useNavigate } from "react-router-dom";
const { nav, NavUl } = navStyles;

const Nav = () => {
  const navigate = useNavigate();
  return (
    <nav className={nav}>
      <ul className={NavUl}>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/about")}>About</li>
        <li onClick={() => navigate("/contact")}>Contact</li>
        <li onClick={() => navigate("/blog")}>Blog</li>
      </ul>
    </nav>
  );
};

export default Nav;
