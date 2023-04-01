import React from "react";

import { useRoutes, BrowserRouter } from "react-router-dom";

import { Home, About } from "@/features/misc";
import { AuthRoutes } from "@/features/auth";
import { BooksRoutes } from "@/features/books";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    ...AuthRoutes,
    ...BooksRoutes,
  ]);
};

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};
