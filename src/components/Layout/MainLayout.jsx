import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const MainLayout = ({ children }) => {
  return (
    <>
      <header className="primary-header | pt-600">
        <div className="container">
          <Navbar />
        </div>
      </header>

      {children}
      <Footer />
    </>
  );
};
