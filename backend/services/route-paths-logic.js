import { getSharedModulePath } from "../utils/project-directory.js";
import BackendRoutePath from "../models/BackendRoutePath.js";
import FrontendRoutePath from "../models/FrontendRoutePath.js";

const { BACKEND_ROUTE_PATHS, FRONTEND_ROUTE_PATHS, getBackendRoutePathsMapping, getBackendRoutePathsStatuses, getFrontendRoutePathsMapping, getFrontendRoutePathsStatuses } = await import(getSharedModulePath("route-paths-helper.js"));

export const getBackendRoutePaths = async (documentFilters) =>
{
    let backendRoutePaths = null;

    try
    {
        backendRoutePaths = await BackendRoutePath.find(documentFilters).lean();
    }
    catch
    {
        backendRoutePaths = BACKEND_ROUTE_PATHS;
    }

    const backendRoutePathsMapping = getBackendRoutePathsMapping(backendRoutePaths);
    const backendRoutePathsStatuses = getBackendRoutePathsStatuses(backendRoutePaths);

    return { backendRoutePaths, backendRoutePathsMapping, backendRoutePathsStatuses };
};

export const getFrontendRoutePaths = async (documentFilters) =>
{
    let frontendRoutePaths = null;

    try
    {
        frontendRoutePaths = await FrontendRoutePath.find(documentFilters).lean();
    }
    catch
    {
        frontendRoutePaths = FRONTEND_ROUTE_PATHS;
    }

    const frontendRoutePathsMapping = getFrontendRoutePathsMapping(frontendRoutePaths);
    const frontendRoutePathsStatuses = getFrontendRoutePathsStatuses(frontendRoutePaths);

    return { frontendRoutePaths, frontendRoutePathsMapping, frontendRoutePathsStatuses };
};

const initializeRoutePathsUpdate = (routePaths) => routePaths.map((routePath) =>
(
    {
        updateOne:
        {
            filter:
            {
                key: routePath["key"]
            },
            update:
            {
                $setOnInsert: routePath
            },
            upsert: true
        }
    }
));

export const syncRoutePaths = async () =>
{
    await BackendRoutePath.bulkWrite(initializeRoutePathsUpdate(BACKEND_ROUTE_PATHS));

    await FrontendRoutePath.bulkWrite(initializeRoutePathsUpdate(FRONTEND_ROUTE_PATHS));
};
