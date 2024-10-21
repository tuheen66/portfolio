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
import Tourismo from "./Pages/Websites/Tourismo";
import About from "./Pages/About";
import MyPortfolio from "./Pages/MyPortfolio";
import Contact from "./Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      // {
      //   path: "/",
      //   element: <Old-Home></Old-Home>,
      // },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/portfolio",
        element: <MyPortfolio></MyPortfolio>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/heartsync",
        element: <HeartSync></HeartSync>
      },
      {
        path: "/tourismo",
        element: <Tourismo></Tourismo>
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
