const API_BASE_URL = "/api/v0";

const BACKEND_ROUTE_PATHS =
[
    {
        key: "INDEX",
        base_path: "/",
        route_script_file_name: "index",
        routes:
        [
            {
                key: "SITEMAP",
                path: "/sitemap.xml",
                active: true
            }
        ]
    },
    {
        key: "ROUTE_PATHS",
        base_path: `${API_BASE_URL}/route-paths`,
        route_script_file_name: "route-paths",
        routes:
        [
            {
                key: "BACKEND",
                path: "[base-path-placeholder]/backend",
                active: true
            },
            {
                key: "FRONTEND",
                path: "[base-path-placeholder]/frontend",
                active: true
            }
        ]
    }
];

const FRONTEND_ROUTE_PATHS =
[
    {
        key: "INDEX",
        base_path: "/",
        component_name: "Main",
        routes:
        [
            {
                key: "INDEX",
                component_name: "Home",
                sitemap_label: "Home",
                active: true
            }
        ]
    }
];

const getBackendRoutePaths = (routePaths) => routePaths.map((routePath) => ({ key: routePath["key"], base_path: routePath["base_path"], routes: routePath["routes"] }));
const getFrontendRoutePaths = (routePaths) => routePaths.map((routePath) => ({ key: routePath["key"], base_path: routePath["base_path"], routes: routePath["routes"].map((routePathRoute) => ({ key: routePathRoute["key"], path: `${routePath["base_path"]}${routePathRoute["path"] || ""}`, active: routePathRoute["active"] })) }));

const initializeRoutePathsMapping = (routePaths) =>
{
    const routePathsMapping = {};

    for (const currentRoutePath of routePaths)
        try
        {
            const currentRoutePathMapping = {};

            for (const currentRoutePathRoute of currentRoutePath["routes"])
                currentRoutePathMapping[currentRoutePathRoute["key"]] =
                {
                    ROUTE: currentRoutePathRoute["path"].replace("[base-path-placeholder]", ""),
                    FULL_PATH: currentRoutePathRoute["path"].replace("[base-path-placeholder]", currentRoutePath["base_path"])
                };

            routePathsMapping[currentRoutePath["key"]] = currentRoutePathMapping;
        }
        catch
        {
        }

    return routePathsMapping;
};

const initializeRoutePathsStatuses = (routePaths) =>
{
    const routePathsStatuses = [];

    for (const currentRoutePath of routePaths)
        try
        {
            for (const currentRoutePathRoute of currentRoutePath["routes"])
                routePathsStatuses.push
                (
                    {
                        FULL_PATH: currentRoutePathRoute["path"].replace("[base-path-placeholder]", currentRoutePath["base_path"]),
                        ACTIVE: currentRoutePathRoute["active"]
                    }
                );
        }
        catch
        {
        }

    return routePathsStatuses;
};

const getBackendRoutePathsMapping = (routePaths) => initializeRoutePathsMapping(getBackendRoutePaths(routePaths));
const getBackendRoutePathsStatuses = (routePaths) => initializeRoutePathsStatuses(getBackendRoutePaths(routePaths));
const getFrontendRoutePathsMapping = (routePaths) => initializeRoutePathsMapping(getFrontendRoutePaths(routePaths));
const getFrontendRoutePathsStatuses = (routePaths) => initializeRoutePathsStatuses(getFrontendRoutePaths(routePaths));

export { BACKEND_ROUTE_PATHS, FRONTEND_ROUTE_PATHS, getBackendRoutePathsMapping, getBackendRoutePathsStatuses, getFrontendRoutePathsMapping, getFrontendRoutePathsStatuses };
