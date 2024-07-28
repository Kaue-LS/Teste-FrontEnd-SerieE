import React from "react";
import Home from "./pages/home";

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";
import HeroePage from "./pages/heroPage";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/:heroId",
        element: <HeroePage />,
    }
]);

export default routes;