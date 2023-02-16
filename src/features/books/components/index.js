import React from "react";
import { useSearchParams } from "react-router-dom";
import { searchBooks } from '../api/searchBooks';

const teste = async () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  if (!query) {
    return <h1>Error</h1>;
  }

  const books = await searchBooks(query);
  console.log(books);
  // return <h1>{books.map((book) => {
  //   return (book.volumeInfo.title);
  // })}</h1>;
  return <h1>Teste</h1>;
};

export default teste;
