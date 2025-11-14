import React from "react";

export interface PageRoute {
  name: string;
  path: string;
  description: string;
  element: React.ReactNode;
}

import Home from "../Collection/Home/home";
import AKPlusV2 from "../Collection/AKPlusV2/akPlusV2";
import Register from "../Collection/Register";
import Login from "../Collection/Login";

export const collectionRoutes: PageRoute[] = [
  {
    name: "Home",
    path: "/home",
    description: "Go back to the main page",
    element: <Home />,
  },
  {
    name: "AKPlusV2",
    path: "/akplusv2",
    description: "View and edit your AKPlusV2",
    element: <AKPlusV2 />,
  },
];

export const otherRoutes: PageRoute[] = [
  {
    name: "Register",
    path: "/register",
    description: "Register a new account",
    element: <Register />,
  },
  {
    name: "Login",
    path: "/login",
    description: "Login to your account",
    element: <Login />,
  },
];
