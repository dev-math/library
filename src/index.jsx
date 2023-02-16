import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Router } from "@/routes";
import { AuthProvider } from "@/context/AuthProvider";

import "@/style.css";
import "@/assets/top-decoration.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </StrictMode>
);
