import React from "react";

import { useRoutes, BrowserRouter } from "react-router-dom";

import { Home, About } from "@/features/misc";
import { AuthRoutes } from "@/features/auth";
import Teste from "@/features/books/components";

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
    {
      path: "/search",
      element: <Teste />,
    },
    ...AuthRoutes,
  ]);
};

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};
