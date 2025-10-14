import React from "react";

export interface PageRoute {
  name: string;
  path: string;
  description: string;
  element: React.ReactNode;
}

import Home from "../Collection/Home/home";
import AKPlusV2 from "../Collection/AKPlusV2/akPlusV2";

export const collectionRoutes: PageRoute[] = [
  { name: "Home", path: "/", description: "Go back to the main page", element: <Home/> },
  { name: "AKPlusV2", path: "/akplusv2", description: "View and edit your AKPlusV2", element: <AKPlusV2 /> },
];

export const otherRoutes: PageRoute[] = [];