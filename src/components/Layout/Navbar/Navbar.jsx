import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import { SearchInput } from "@/components/Layout/SearchInput";
import menuIcon from "./assets/menu-icon.svg";
import closeIcon from "./assets/close-icon.svg";
import "./Navbar.css";

export const Navbar = () => {
  const { authenticated } = useAuth();
  const [menuExpanded, setMenuExpanded] = useState(false);

  const commonRoutes = [
    { name: "Home", to: "/" },
    { name: "About us", to: "/about" },
  ];

  const publicRoutes = [
    { name: "Registrate", to: "/registrate" },
    { name: "Login", to: "/login" },
  ];

  const privateRoutes = [
    { name: "My shelf", to: "/profile" },
    { name: "Browse", to: "/browse" },
  ];

  const routes = [
    ...commonRoutes,
    ...(authenticated ? privateRoutes : publicRoutes),
  ];

  return (
    <div className="nav-wrapper">
      <nav aria-label="Primary" className="primary-navigation">
        <button
          onClick={() => setMenuExpanded((prev) => !prev)}
          className="btn mobile-nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuExpanded}
          aria-controls="nav-menu"
        >
          <img className="icon-menu" src={menuIcon} alt="" aria-hidden="true" />
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
          {routes.map((route) => {
            return (
              <li key={route.name}>
                <NavLink className="hover:text-accent-400" to={route.to}>
                  {route.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {authenticated && (
        <>
          <SearchInput />
          <button className="border-none w-10 h-10 overflow-hidden bg-gray-100 text-accent-700 border-rounded cursor-pointer">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </>
      )}
    </div>
  );
};
