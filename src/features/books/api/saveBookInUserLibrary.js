import axios from "@/lib/axios";

export const addBookToUserLibrary = async (book) => {
 return await axios.put("/me/books", book);
}
