import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalStateProvider } from "./contexts/GlobalStateContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./global.css";
import Layout from "./Layout";
import Home from "./pages/Home";

const router = createBrowserRouter
(
    [
        {
            path: "/",
            element: <Layout />,
            children:
            [
                {
                    element: <Home />,
                    index: true
                }
            ]
        }
    ]
);

ReactDOM.createRoot(document.getElementById("root")).render
(
    <React.StrictMode>
        <GlobalStateProvider>
            <RouterProvider router={router} />
        </GlobalStateProvider>
    </React.StrictMode>
);
