import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Landing from "../pages/Landing";
import Background from "../pages/Background";
import Overview from "../pages/Overview";
import Conduct from "../pages/Conduct";
import PastandPresent from "../pages/PastandPresent";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/background",
        element: <Background />,
      },
      {
        path: "/overview",
        element: <Overview />,
      },
      {
        path: "/conduct",
        element: <Conduct />,
      },
      {
        path: "/pastandpresent",
        element: <PastandPresent />,
      }
    ],
  },
]);

export default router;
