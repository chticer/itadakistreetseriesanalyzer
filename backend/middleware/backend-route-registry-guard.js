import { getBackendRoutesCacheAllRoutePaths, checkActiveBackendRoute } from "../services/backendRouteCache.js";

const BackendRouteRegistryGuard = async (req, res, next) =>
{
    const backendRouteCacheAllRoutePaths = getBackendRoutesCacheAllRoutePaths();

    if (backendRouteCacheAllRoutePaths.indexOf(req.path) === -1)
        return next();

    const backendRouteError = new Error("The backend route is not available.");
    backendRouteError.status = 503;

    if (!checkActiveBackendRoute(req.path))
        return next(backendRouteError);

    next();
};

export default BackendRouteRegistryGuard;
