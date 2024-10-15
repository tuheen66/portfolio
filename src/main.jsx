import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Main/Main";
import Home from "./Pages/Home";
import ColorfulCanvas from "./Pages/Websites/ColorfulCanvas";
import HeartSync from "./Pages/Websites/HeartSync";
import Benevo from "./Pages/Websites/Benevo";
import TheTravelGeek from "./Pages/Websites/TheTravelGeek";
import ElysianMotorway from "./Pages/Websites/ElysianMotorway";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/heart-sync",
        element: <HeartSync></HeartSync>
      },
      {
        path: "/benevo",
        element: <Benevo></Benevo>
      },
      {
        path: "/travel-geek",
        element: <TheTravelGeek></TheTravelGeek>
      },
      {
        path: "/colorful-canvas",
        element: <ColorfulCanvas></ColorfulCanvas>
      },
      {
        path: "/elysian",
        element: <ElysianMotorway></ElysianMotorway>
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
