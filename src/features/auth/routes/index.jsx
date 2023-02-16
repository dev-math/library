import React from 'react';

import { Login } from "./Login";
import { Register } from "./Register";

export const AuthRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];
