import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";
import menuIcon from "./menu-icon.svg";
import closeIcon from "./close-icon.svg";

const Header = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);
  return (
    <header className="primary-header | pt-600">
      <div className="container">
        <div className="nav-wrapper">
          <nav aria-label="Primary" className="primary-navigation">
            <button
              onClick={() => setMenuExpanded((prev) => !prev)}
              className="btn mobile-nav-toggle"
              aria-label="Toggle menu"
              aria-expanded={menuExpanded}
              aria-controls="nav-menu"
            >
              <img
                className="icon-menu"
                src={menuIcon}
                alt=""
                aria-hidden="true"
              />
              <img
                className="icon-close"
                src={closeIcon}
                alt=""
                aria-hidden="true"
              />
            </button>
            <ul
              role="list"
              className="nav-list"
              id="nav-menu"
              {...(menuExpanded && { "data-visible": "" })}
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About us</NavLink>
              </li>
              <li>
                <NavLink to="/profile">My Shelf</NavLink>
              </li>
              <li>
                <NavLink to="/browse">Browse</NavLink>
              </li>
            </ul>
          </nav>
          <form className="nav-search">
            <span className="nav-search-icon"></span>
            <input
              className="fs-500 bg-accent-700 text-white border-none border-rounded w-full"
              aria-label="Search by book name, author, ..."
              id="nav-search"
              type="text"
              placeholder="Search by book name, author, ..."
            />
          </form>
        </div>
      </div>
    </header>
  );
};

export { Header };
