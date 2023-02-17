import React, { useState, useEffect, createContext } from "react";
import storage from "@/utils/storage";
import { login } from '@/features/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = async (email, password) => {
    const response = await login(email, password);
    storage.setToken(response.token);
    setAuthenticated(true);
  };

  useEffect(() => {
    const token = storage.getToken();

    if (token) {
      setAuthenticated(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authenticated, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
