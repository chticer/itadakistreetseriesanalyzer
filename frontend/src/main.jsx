import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStateProvider } from "./contexts/GlobalStateContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render
(
    <React.StrictMode>
        <GlobalStateProvider>
            <App />
        </GlobalStateProvider>
    </React.StrictMode>
);
