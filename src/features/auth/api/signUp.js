import axios from "@/lib/axios";

export const signUp = async (name, email, password) => {
  return await axios.post("/signup", { name, email, password });
};
