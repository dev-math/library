import axios from "@/lib/axios";

export const login = async (email, password) => {
  return await axios.post("/login", { email, password });
};

export const signUp = async (name, email, password) => {
  return await axios.post("/signup", { name, email, password });
};
