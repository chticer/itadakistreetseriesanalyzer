let backendRoutePathsMappingCache = {};
let frontendRoutePathsCache = [];
let frontendRoutePathsMappingCache = {};
let frontendRoutePathsStatusesCache = [];

export const getBackendRoutePathsMappingCache = () => backendRoutePathsMappingCache;
export const getFrontendRoutePathsCache = () => frontendRoutePathsCache;
export const getFrontendRoutePathsMappingCache = () => frontendRoutePathsMappingCache;
export const getFrontendRoutePathsStatusesCache = () => frontendRoutePathsStatusesCache;

export const setBackendRoutePathsMappingCache = (backendRoutePathsMapping) =>
{
    backendRoutePathsMappingCache = backendRoutePathsMapping;
};

export const setFrontendRoutePathsCache = (frontendRoutePaths) =>
{
    frontendRoutePathsCache.length = 0;
    frontendRoutePathsCache = frontendRoutePaths;
};

export const setFrontendRoutePathsMappingCache = (frontendRoutePathsMapping) =>
{
    frontendRoutePathsMappingCache = frontendRoutePathsMapping;
};

export const setFrontendRoutePathsStatusesCache = (frontendRoutePathsStatuses) =>
{
    frontendRoutePathsStatusesCache.length = 0;
    frontendRoutePathsStatusesCache = frontendRoutePathsStatuses;
};
