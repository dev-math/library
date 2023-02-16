import React from "react";

import "./SearchInput.css";

export const SearchInput = () => {
  return (
    <form action="/search" role="search" className="nav-search" aria-label="Books">
      <span className="nav-search-icon" aria-hidden="true"></span>
      <label className="visually-hidden" for="nav-search">
        Search books by title, author, ...
      </label>
      <input
        className="fs-500 bg-accent-700 text-white border-none border-rounded w-full"
        id="nav-search"
        type="text"
        name="q"
        aria-label="Search books by title, author, ..."
        placeholder="Search books by title, author, ..."
        required
      />
      <button type="submit" className="visually-hidden">
        Search
      </button>
    </form>
  );
};
