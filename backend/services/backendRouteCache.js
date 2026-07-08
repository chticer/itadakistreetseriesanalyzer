import { getSharedModulePath } from "../utils/project-directory.js";
import BackendRoute from "../models/BackendRoute.js";
import { getBackendRoutes } from "./backendRouteLogic.js";

const { BACKEND_ROUTES } = await import(getSharedModulePath("backend-routes.js"));

let backendRoutesCache = [];

export const getBackendRoutesCache = () => backendRoutesCache;
export const getBackendRoutesCacheAllRoutePaths = () => backendRoutesCache.map((route) => route["all_route_paths"]).flat();
export const getBackendRoutesCacheActiveRoutePaths = () => backendRoutesCache.map((route) => route["active_route_paths"]).flat();

export const syncBackendRoutes = () =>
{
    BACKEND_ROUTES.map(async (route) => await BackendRoute.updateOne({ key: route["key"], route_path: route["route_path"] }, { $setOnInsert: route }, { upsert: true }));
};

export const initializeBackendRoutesCache = async () =>
{
    let backendRoutesCopy = structuredClone(BACKEND_ROUTES);

    try
    {
        backendRoutesCopy = await getBackendRoutes({});
    }
    catch
    {
    }

    backendRoutesCache.length = 0;

    for (const currentBackendRoute of backendRoutesCopy)
    {
        let currentBackendRouteCacheItem = backendRoutesCache.find((route) => currentBackendRoute["key"] === route["key"]);

        if (!currentBackendRouteCacheItem)
        {
            currentBackendRouteCacheItem =
            {
                key: currentBackendRoute["key"],
                base_path: currentBackendRoute["base_path"],
                route_script_file_name: currentBackendRoute["route_script_file_name"],
                all_route_paths: [],
                active_route_paths: []
            };

            backendRoutesCache.push(currentBackendRouteCacheItem);
        }

        const currentBackendRoutePath = `${currentBackendRoute["base_path"]}${currentBackendRoute["route_path"]}`;

        currentBackendRouteCacheItem["all_route_paths"].push(currentBackendRoutePath);

        if (currentBackendRoute["active"])
            currentBackendRouteCacheItem["active_route_paths"].push(currentBackendRoutePath);
    }
};

export const checkActiveBackendRoute = (path) =>
{
    const backendRouteCacheActiveRoutePaths = getBackendRoutesCacheActiveRoutePaths();

    return backendRouteCacheActiveRoutePaths.indexOf(path) > -1;
};
