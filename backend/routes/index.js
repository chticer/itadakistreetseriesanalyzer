import express from "express";
import { getBackendRoutePathsMappingCache, getFrontendRoutePathsStatusesCache } from "../services/route-paths-cache.js";

const router = express.Router();

const BACKEND_ROUTE_PATHS_MAPPING = getBackendRoutePathsMappingCache();
const FRONTEND_ROUTE_PATHS_STATUSES = getFrontendRoutePathsStatusesCache();

router.get(BACKEND_ROUTE_PATHS_MAPPING.INDEX.SITEMAP.ROUTE, (req, res, next) =>
{
    try
    {
        const sitemap =
        `
            <?xml version="1.0" encoding="UTF-8"?>
            <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

                ${
                    FRONTEND_ROUTE_PATHS_STATUSES.filter((routePathsStatus) => routePathsStatus["ACTIVE"]).map((routePathsStatus) =>
                    `
                        <url>
                            <loc>${req.protocol}://${req.get("host")}${routePathsStatus["FULL_PATH"]}</loc>
                        </url>
                    `).join("")
                }

            </urlset>
        `;

        res.header("Content-Type", "application/xml");

        res.send(sitemap.trim());
    }
    catch (err)
    {
        console.error(`Could not generate sitemap: ${err.message}`);

        next(err);
    }
});

export default router;
