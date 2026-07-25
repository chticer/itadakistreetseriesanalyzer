import { createContext, useContext, useEffect, useState } from "react";
import { setBackendRoutePathsMappingCache, setFrontendRoutePathsCache, setFrontendRoutePathsMappingCache, setFrontendRoutePathsStatusesCache } from "../utils/route-paths-cache.js";
import { getBackendRoutePaths, getFrontendRoutePaths } from "../api/route-paths.js";

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) =>
{
    const [ appData, setAppData ] = useState
    (
        {
            websiteSettings:
            {
                name: "Itadaki Street Series Analyzer"
            }
        }
    );

    const [ loading, setLoading ] = useState(true);

    useEffect(() =>
    {
        const backendRoutePathsController = new AbortController();
        const frontendRoutePathsController = new AbortController();

        let reactMounted = true;

        const loadRoutePaths = async () =>
        {
            try
            {
                setLoading(true);

                const { BACKEND_ROUTE_PATHS_MAPPING } = await getBackendRoutePaths(backendRoutePathsController);

                setBackendRoutePathsMappingCache(BACKEND_ROUTE_PATHS_MAPPING);

                const { FRONTEND_ROUTE_PATHS, FRONTEND_ROUTE_PATHS_MAPPING, FRONTEND_ROUTE_PATHS_STATUSES } = await getFrontendRoutePaths(frontendRoutePathsController);

                setFrontendRoutePathsCache(FRONTEND_ROUTE_PATHS);
                setFrontendRoutePathsMappingCache(FRONTEND_ROUTE_PATHS_MAPPING);
                setFrontendRoutePathsStatusesCache(FRONTEND_ROUTE_PATHS_STATUSES);

                if (!reactMounted)
                    throw new Error("React component useEffect is not mounted.");

                setLoading(false);
            }
            catch (err)
            {
                if (!reactMounted || err.name === "AbortError")
                    return;

                setLoading(false);
            }
        };

        loadRoutePaths();

        return () =>
        {
            reactMounted = false;

            backendRoutePathsController.abort();
            frontendRoutePathsController.abort();
        };
    }, []);

    if (loading)
        return null;

    return (
    <>
        <GlobalStateContext value={{ appData, setAppData }}>
            { children }
        </GlobalStateContext>
    </>
    );
};

export const useApp = () => useContext(GlobalStateContext);
