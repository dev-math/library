import axios from "@/lib/axios";

export const removeBookFromUserLibrary = async (bookKey) => {
  return await axios.delete("/me/books", { data: { bookKey } });
};
