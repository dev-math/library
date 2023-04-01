import React, { useState } from "react";

import HeartIcon from "./HeartIcon";
import "./BookCard.css";

import { addBookToUserLibrary } from "../../api/saveBookInUserLibrary";
import { removeBookFromUserLibrary } from "../../api/removeBookFromUserLibrary";

export const BookCard = ({ book }) => {
  const [bookSaved, setBookSaved] = useState(book.saved);
  console.debug("[Book Saved]", book.saved);

  const saveBook = async () => {
    await addBookToUserLibrary(book);
    setBookSaved(true);
  };

  const removeBook = async () => {
    await removeBookFromUserLibrary(book.key);
    setBookSaved(false);
  };

  return (
    <article className="max-w-xl">
      <img
        className="w-full rounded-tr-500 aspect-book bg-book-fallback"
        src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
        alt="Book cover"
      />
      <div className="w-full rounded-br-500 bg-accent-700 text-white flex justify-between gap-400 p-200">
        <div className="w-full book-data truncate">
          <h3 className="fs-400 truncate">{book.title}</h3>
          <small className="fs-300">{book.pages || "???"} pages</small>
        </div>
        <button
          className="bg-none border-none cursor-pointer hover:-translate-y-2 transition"
          onClick={() => (bookSaved ? removeBook() : saveBook())}
        >
          <span className="visually-hidden">
            {bookSaved
              ? "Remove book from your library"
              : "Save book on your library"}
          </span>
          <HeartIcon
            className={`${bookSaved ? "fill-red" : "fill-white"}`}
            aria-hidden="true"
          />
        </button>
      </div>
    </article>
  );
};
