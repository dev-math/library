import React from "react";

import { useRoutes, BrowserRouter } from "react-router-dom";

import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Login } from "@/pages/Login";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/browse",
      element: <h1>Browse</h1>,
    },
    {
      path: "/profile",
      element: <h1>Profile</h1>,
    },
    {
      path: '/login',
      element: <Login />
    }
  ]);
};

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};
