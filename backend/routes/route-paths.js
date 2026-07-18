import express from "express";
import { getBackendRoutePathsCache, getBackendRoutePathsMappingCache, getBackendRoutePathsStatusesCache, getFrontendRoutePathsCache, getFrontendRoutePathsMappingCache, getFrontendRoutePathsStatusesCache } from "../services/route-paths-cache.js";

const router = express.Router();

const BACKEND_ROUTES_PATHS = getBackendRoutePathsCache();
const BACKEND_ROUTE_PATHS_MAPPING = getBackendRoutePathsMappingCache();
const BACKEND_ROUTE_PATHS_STATUSES = getBackendRoutePathsStatusesCache();
const FRONTEND_ROUTES_PATHS = getFrontendRoutePathsCache();
const FRONTEND_ROUTES_PATHS_MAPPING = getFrontendRoutePathsMappingCache();
const FRONTEND_ROUTES_PATHS_STATUSES = getFrontendRoutePathsStatusesCache();

router.get(BACKEND_ROUTE_PATHS_MAPPING.ROUTE_PATHS.BACKEND.ROUTE, (req, res, next) =>
{
    try
    {
        res.status(200).json({ BACKEND_ROUTE_PATHS, BACKEND_ROUTE_PATHS_MAPPING, BACKEND_ROUTE_PATHS_STATUSES });
    }
    catch (err)
    {
        console.error(`Could not get backend route path documents: ${err.message}`);

        next(err);
    }
});

router.get(BACKEND_ROUTE_PATHS_MAPPING.ROUTE_PATHS.FRONTEND.ROUTE, (req, res, next) =>
{
    try
    {
        res.status(200).json({ FRONTEND_ROUTE_PATHS, FRONTEND_ROUTES_PATHS_MAPPING, FRONTEND_ROUTES_PATHS_STATUSES });
    }
    catch (err)
    {
        console.error(`Could not get frontend route path documents: ${err.message}`);

        next(err);
    }
});

export default router;
