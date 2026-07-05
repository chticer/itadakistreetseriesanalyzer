import express from "express";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import mongoose from "mongoose";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const startup = async () =>
{
    try
    {
        dotenv.config();

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
