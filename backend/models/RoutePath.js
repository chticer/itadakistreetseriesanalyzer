import mongoose from "mongoose";

const routePathSchema = new mongoose.Schema
(
    {
        path: String,
        title: String,
        name: String,
        active: Boolean,
        create_date:
        {
            type: Date,
            default: Date.now
        }
    },
    {
        collection: "route-paths"
    }
);

routePathSchema.index
(
    {
        path: 1
    },
    {
        unique: true,
        background: true
    }
);

routePathSchema.index({ active: 1 });

export default mongoose.model("RoutePath", routePathSchema);
