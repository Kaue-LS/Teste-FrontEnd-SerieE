import React from "react";
import Home from "./pages/home";

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";

export const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Home />}>
        </Route>
    )
)

export default routes