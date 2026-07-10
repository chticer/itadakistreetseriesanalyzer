import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";

let BACKEND_PORT = 11004;

try
{
    BACKEND_PORT = import.meta.env.VITE_BACKEND_PORT;
}
catch
{
}

let PORT = 10004;

try
{
    PORT = import.meta.env.VITE_PORT;
}
catch
{
}

// https://vite.dev/config/
export default defineConfig
(
    {
        plugins:
        [
            react(),
            svgrPlugin()
        ],
        server:
        {
            port: PORT,
            proxy:
            {
                "/api":
                {
                    target: `http://localhost:${BACKEND_PORT}`,
                    changeOrigin: true
                }
            }
        }
    }
);
