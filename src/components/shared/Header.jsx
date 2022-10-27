import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles/header.css";
import logo from "../../assets/shop.gif";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <Link className="links header__title" to="/">
          <img src={logo} alt="" />
          TECNOSHOP
        </Link>
      </h1>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <NavLink className="header__link" to="/login">
              <i class="fa-solid fa-user-large"></i>
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink className="header__link" to="/purchases">
              <i class="fa-solid fa-box-archive"></i>
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink className="header__link" to="/cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
