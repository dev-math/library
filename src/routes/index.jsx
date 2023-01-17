import React from "react";

import { useRoutes, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <h1>Header</h1>,
    },
    {
      path: "/browse",
      element: <h1>Header</h1>,
    },
    {
      path: "/profile",
      element: <h1>Header</h1>,
    },
  ]);
};

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};
