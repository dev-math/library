import axios from "@/lib/axios";

export const searchBooks = async (query, pageNumber) =>
  await axios.get(`/search?q=${query}&limit=25&page=${pageNumber}`);
