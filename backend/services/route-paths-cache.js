import { getBackendRoutePaths, getFrontendRoutePaths } from "../services/route-paths-logic.js";

let backendRoutePathsCache = [];
let backendRoutePathsMappingCache = {};
let backendRoutePathsStatusesCache = [];
let frontendRoutePathsCache = [];
let frontendRoutePathsMappingCache = {};
let frontendRoutePathsStatusesCache = [];

export const getBackendRoutePathsCache = () => backendRoutePathsCache;
export const getBackendRoutePathsMappingCache = () => backendRoutePathsMappingCache;
export const getBackendRoutePathsStatusesCache = () => backendRoutePathsStatusesCache;
export const getFrontendRoutePathsCache = () => frontendRoutePathsCache;
export const getFrontendRoutePathsMappingCache = () => frontendRoutePathsMappingCache;
export const getFrontendRoutePathsStatusesCache = () => frontendRoutePathsStatusesCache;

const setBackendRoutePathsCache = (backendRoutePaths) =>
{
    backendRoutePathsCache.length = 0;
    backendRoutePathsCache = backendRoutePaths;
};

const setBackendRoutePathsMappingCache = (backendRoutePathsMapping) =>
{
    backendRoutePathsMappingCache = backendRoutePathsMapping;
}

const setBackendRoutePathsStatusesCache = (backendRoutePathsStatuses) =>
{
    backendRoutePathsStatusesCache.length = 0;
    backendRoutePathsStatusesCache = backendRoutePathsStatuses;
};

const setFrontendRoutePathsCache = (frontendRoutePaths) =>
{
    frontendRoutePathsCache.length = 0;
    frontendRoutePathsCache = frontendRoutePaths;
};

const setFrontendRoutePathsMappingCache = (frontendRoutePathsMapping) =>
{
    frontendRoutePathsMappingCache = frontendRoutePathsMapping;
}

const setFrontendRoutePathsStatusesCache = (frontendRoutePathsStatuses) =>
{
    frontendRoutePathsStatusesCache.length = 0;
    frontendRoutePathsStatusesCache = frontendRoutePathsStatuses;
};

export const initializeRoutePathsCache = async () =>
{
    const { backendRoutePaths, backendRoutePathsMapping, backendRoutePathsStatuses } = await getBackendRoutePaths({});

    setBackendRoutePathsCache(backendRoutePaths);
    setBackendRoutePathsMappingCache(backendRoutePathsMapping);
    setBackendRoutePathsStatusesCache(backendRoutePathsStatuses);

    const { frontendRoutePaths, frontendRoutePathsMapping, frontendRoutePathsStatuses } = await getFrontendRoutePaths({});

    setFrontendRoutePathsCache(frontendRoutePaths);
    setFrontendRoutePathsMappingCache(frontendRoutePathsMapping);
    setFrontendRoutePathsStatusesCache(frontendRoutePathsStatuses);
};

export const refreshRoutePathsCache = async () =>
{
    await initializeRoutePathsCache();
};
