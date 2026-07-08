import mongoose from "mongoose";

const backendRouteSchema = new mongoose.Schema
(
    {
        key: String,
        base_path: String,
        route_script_file_name: String,
        route_path: String,
        active: Boolean,
        create_date:
        {
            type: Date,
            default: Date.now
        }
    },
    {
        collection: "backend-routes"
    }
);

backendRouteSchema.index
(
    {
        key: 1,
        route_path: 1
    },
    {
        unique: true,
        background: true
    }
);

export default mongoose.model("BackendRoute", backendRouteSchema);
