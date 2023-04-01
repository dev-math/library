import { useEffect, useState } from "react";
import { searchBooks } from "../api/searchBooks";

const useSearchBooks = (query, pageNumber) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { books } = await searchBooks(query, pageNumber);
        setBooks((prevBooks) => {
          const seen = new Set();

          const filteredBooks = [...prevBooks, ...books].filter((book) => {
            const duplicate = seen.has(book.key);
            seen.add(book.key);
            return !duplicate;
          });
          return filteredBooks;
        });
        setHasMore(books.length > 0);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [pageNumber]);

  return { books, loading, hasMore, error };
};

export default useSearchBooks;
