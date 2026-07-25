import mongoose from "mongoose";

const backendRoutePathSchema = new mongoose.Schema
(
    {
        key: String,
        base_path: String,
        route_script_file_name: String,
        routes:
        [
            {
                key: String,
                path: String,
                active: Boolean
            }
        ],
        create_date:
        {
            type: Date,
            default: Date.now
        }
    },
    {
        collection: "backend-route-paths"
    }
);

backendRoutePathSchema.index
(
    {
        key: 1
    },
    {
        unique: true,
        background: true
    }
);

export default mongoose.model("BackendRoutePath", backendRoutePathSchema);
