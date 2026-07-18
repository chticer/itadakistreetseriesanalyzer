import { getBackendRoutePathsStatusesCache } from "../services/route-paths-cache.js";

const BackendRouteRegistryGuard = (req, res, next) =>
{
    const BACKEND_ROUTE_PATHS_STATUSES = getBackendRoutePathsStatusesCache();

    const backendRoutePathsStatusRecord = BACKEND_ROUTE_PATHS_STATUSES.find((routePathsStatus) => req.path === routePathsStatus["FULL_PATH"]);

    if (!backendRoutePathsStatusRecord)
        return next();

    const backendRoutePathError = new Error("The backend route path is not available.");
    backendRoutePathError.status = 503;

    if (!backendRoutePathsStatusRecord["ACTIVE"])
        return next(backendRoutePathError);

    next();
};

export default BackendRouteRegistryGuard;
