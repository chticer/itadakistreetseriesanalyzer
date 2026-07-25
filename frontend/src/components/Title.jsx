import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useApp } from "../contexts/GlobalStateContext";
import { getFrontendRoutePathsCache } from "../utils/route-paths-cache.js";

const Title = ({ path }) =>
{
    const { appData } = useApp();

    const location = useLocation();

    const FRONTEND_ROUTE_PATHS = getFrontendRoutePathsCache();

    const frontendRouteFullPaths = FRONTEND_ROUTE_PATHS.map((routePath) => routePath["routes"].map((routePathRoute) => ({ ...routePathRoute, full_path: `${routePath["base_path"]}${routePathRoute["path"] || ""}` }))).flat();

    useEffect(() =>
    {
        let tabTitle = "";

        try
        {
            const frontendRoutePathsRouteRecord = frontendRouteFullPaths.find((routePathRoute) => path === routePathRoute["full_path"]);

            tabTitle = frontendRoutePathsRouteRecord && frontendRoutePathsRouteRecord["tab_title"] ? `${frontendRoutePathsRouteRecord["tab_title"]} - ` : "";
        }
        catch
        {
            console.warn("Could not set title from route path, setting default title.");

            tabTitle = "";
        }

        document.title = `${tabTitle}${appData.websiteSettings.name}`;
    }, [ location, path ]);

    return null;
};

export default Title;
