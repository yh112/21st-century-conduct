// router.js
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Landing from "../pages/Landing";
import Background from "../pages/Background";
import Overview from "../pages/Overview";
import Conduct from "../pages/Conduct";
import PastandPresent from "../pages/PastandPresent";
import FadeInWrapper from "./FadeInWrapper";

const router = createBrowserRouter(
  [
    {
      children: [
        {
          path: "/",
          element: <FadeInWrapper><Landing /></FadeInWrapper>,
        },
        {
          path: "/home",
          element: <FadeInWrapper><Home /></FadeInWrapper>,
        },
        {
          path: "/background",
          element: <FadeInWrapper><Background /></FadeInWrapper>,
        },
        {
          path: "/overview",
          element: <FadeInWrapper><Overview /></FadeInWrapper>,
        },
        {
          path: "/conduct",
          element: <FadeInWrapper><Conduct /></FadeInWrapper>,
        },
        {
          path: "/pastandpresent",
          element: <FadeInWrapper><PastandPresent /></FadeInWrapper>,
        },
      ],
    },
    {
      basename: process.env.PUBLIC_URL,
    },
  ],
);

export default router;