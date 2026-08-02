import { Link } from "react-router-dom";
import { getFrontendRoutePathsCache, getFrontendRoutePathsMappingCache, getFrontendRoutePathsStatusesCache } from "../utils/route-paths-cache.js";
import Title from "../components/Title";

const Sitemap = () =>
{
    const FRONTEND_ROUTE_PATHS_MAPPING = getFrontendRoutePathsMappingCache();

    const PATH = FRONTEND_ROUTE_PATHS_MAPPING.INDEX.SITEMAP.FULL_PATH;

    const TitleComponent = () => <Title path={PATH} />;

    const FRONTEND_ROUTE_PATHS = getFrontendRoutePathsCache();
    const FRONTEND_ROUTE_PATHS_STATUSES = getFrontendRoutePathsStatusesCache();

    const frontendRoutePathsStatusesActiveFullPaths = FRONTEND_ROUTE_PATHS_STATUSES.filter((routePath) => routePath["ACTIVE"]).map((routePath) => routePath["FULL_PATH"]);

    const frontendRouteFullPaths = FRONTEND_ROUTE_PATHS.map((routePath) => routePath["routes"].map((routePathRoute) => ({ ...routePathRoute, full_path: `${routePath["base_path"]}${routePathRoute["path"] || ""}` }))).flat();

    const frontendRoutePathsRouteRecords = frontendRouteFullPaths.filter((routePathRoute) => frontendRoutePathsStatusesActiveFullPaths.indexOf(routePathRoute["full_path"]) > -1);

    return (
    <>
        <TitleComponent />

        <main>
            <div>
            <div>
                <ul className="list-group list-group-flush">

                    {
                        frontendRoutePathsRouteRecords.map((routePathRoute) =>
                            <li className="list-group-item list-group-item-action" key={routePathRoute["full_path"]}>
                                <Link to={routePathRoute["full_path"]}>
                                    <div>{routePathRoute["sitemap_label"]}</div>
                                </Link>
                            </li>
                        )
                    }

                </ul>
            </div>
            </div>
        </main>
    </>
    );
};

export default Sitemap;
