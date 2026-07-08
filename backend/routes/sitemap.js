import express from "express";
import { getRoutePaths } from "../services/routePathsLogic.js";

const router = express.Router();

router.get("/sitemap.xml", async (req, res, next) =>
{
    try
    {
        const getRoutePathsResponse = await getRoutePaths({ active: true });

        const sitemap =
        `
            <?xml version="1.0" encoding="UTF-8"?>
            <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

                ${
                    getRoutePathsResponse.map((route) =>
                    `
                        <url>
                            <loc>${req.protocol}://${req.get("host")}${route.path}</loc>
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
