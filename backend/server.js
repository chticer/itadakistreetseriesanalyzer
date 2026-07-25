import "./utils/environment-variables.js";
import "./utils/telemetry.js";

import express from "express";
import helmet from "helmet";
import cors from "cors";
import path from "path";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import { syncRoutePaths } from "./services/route-paths-logic.js";
import { getBackendRoutePathsCache, initializeRoutePathsCache } from "./services/route-paths-cache.js";
import BackendRouteRegistryGuard from "./middleware/backend-route-registry-guard.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const startup = async () =>
{
    try
    {
        await mongoose.connect
        (
            process.env.MONGODB_URI,
            {
                serverApi:
                {
                    version: "1",
                    strict: true,
                    deprecationErrors: true
                }
            }
        );

        console.log(`Connected to MongoDB host ${mongoose.connection.host}`);

        app.set("trust proxy", 1);

        app.use(helmet());

        app.use((req, res, next) =>
        {
            res.setHeader("Permissions-Policy", "camera=(), geolocation=(), microphone=(), payment=(), usb=()");

            next();
        });

        app.use(cors());

        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));

        await syncRoutePaths();

        console.log("Synced all route paths cache");

        await initializeRoutePathsCache();

        console.log("Initialized route paths cache");

        app.use(BackendRouteRegistryGuard);

        const backendRoutePathsCache = getBackendRoutePathsCache();

        await Promise.all(backendRoutePathsCache.map(async (routePath) =>
        {
            const backendRouteModule = await import(`./routes/${routePath["route_script_file_name"]}.js`);

            app.use(routePath["base_path"], backendRouteModule.default);
        }));

        app.use(express.static(path.join(__dirname, "/")));

        app.get("/{*splat}", (req, res) =>
        {
            res.sendFile(path.join(__dirname, "index.html"));
        });

        app.use((err, req, res, next) =>
        {
            const statusCode = err.status || 500;

            res.status(statusCode).json({ error: err.message || "Internal Server Error" });
        });

        const PORT = process.env.PORT || 11004;

        app.listen(PORT, () =>
        {
            console.log(`Running on port ${PORT}`);
        });
    }
    catch (err)
    {
        console.error(`Could not start the backend server: ${err.message}`);

        process.exit(1);
    }
};

startup();
