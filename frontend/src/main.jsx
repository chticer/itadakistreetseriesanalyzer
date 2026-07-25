import React, { lazy, Suspense, useMemo } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalStateProvider } from "./contexts/GlobalStateContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./global.css";
import { getFrontendRoutePathsCache } from "./utils/route-paths-cache.js";

const getRouteComponent = (route, pageFlag) =>
{
    if (pageFlag && !route["active"])
        return;

    const routeComponent = {};

    if (route["path"])
        routeComponent["path"] = route["path"];
    else if (route["base_path"])
        routeComponent["path"] = route["base_path"];
    else
        routeComponent["index"] = true;

    const FrontendComponent = lazy(() => import(`./${pageFlag ? "pages" : "layouts"}/${route["component_name"]}.jsx`));

    let ElementComponent = <FrontendComponent />;

    routeComponent["element"] = <Suspense>{ ElementComponent }</Suspense>;

    return routeComponent;
};

const DynamicRouterComponent = () =>
{
    const FRONTEND_ROUTE_PATHS = getFrontendRoutePathsCache();

    const router = useMemo(() => createBrowserRouter(FRONTEND_ROUTE_PATHS.map((routePath) =>
    {
        const mainRouteComponent = getRouteComponent(routePath, false);

        return {
            ...mainRouteComponent,
            children: routePath["routes"].map((routePathRoute) => getRouteComponent(routePathRoute, true))
        };
    })), []);

    return <RouterProvider router={router} />
};

ReactDOM.createRoot(document.getElementById("root")).render
(
    <React.StrictMode>
        <GlobalStateProvider>
            <DynamicRouterComponent />
        </GlobalStateProvider>
    </React.StrictMode>
);
