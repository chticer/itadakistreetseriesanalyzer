import APIClient from "../utils/api-client.js";
import { BACKEND_ROUTE_PATHS, getBackendRoutePathsMapping } from "../../../shared/route-paths-helper.js";

const getRequestRoutePaths = (routePathKey, controller) =>
{
    const BACKEND_ROUTE_PATHS_MAPPING = getBackendRoutePathsMapping(BACKEND_ROUTE_PATHS);

    return APIClient
    (
        {
            route_path: BACKEND_ROUTE_PATHS_MAPPING.ROUTE_PATHS[routePathKey].FULL_PATH
        },
        {
            method: "GET",
            header:
            {
                "Content-Type": "application/json"
            },
            signal: controller.signal
        }
    );
};

export const getBackendRoutePaths = (controller) => getRequestRoutePaths("BACKEND", controller);
export const getFrontendRoutePaths = (controller) => getRequestRoutePaths("FRONTEND", controller);
