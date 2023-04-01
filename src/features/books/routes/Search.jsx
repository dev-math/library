import React, { useState, useRef, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { BookCard } from "../components/BookCard";

import { MainLayout } from "@/components/Layout/MainLayout";
import useSearchBooks from "../hooks/useSearchBooks";

export const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const [pageNumber, setPageNumber] = useState(1);
  const { books, loading, hasMore } = useSearchBooks(query, pageNumber);

  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <MainLayout className="pt-900">
      <ul className="grid grid-cols-8 gap-600 px-900" role="list">
        {books.map((book, index) => {
          const isLastElement = books.length === index + 1;
          return isLastElement ? (
            <li ref={lastBookElementRef} key={book.key}>
              <BookCard book={book} />
            </li>
          ) : (
            <li key={book.key}>
              <BookCard book={book} />
            </li>
          );
        })}
      </ul>
    </MainLayout>
  );
};
