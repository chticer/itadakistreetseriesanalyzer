import mongoose from "mongoose";

const frontendRoutePathSchema = new mongoose.Schema
(
    {
        key: String,
        base_path: String,
        component_name: String,
        routes:
        [
            {
                key: String,
                path: String,
                component_name: String,
                tab_title: String,
                sitemap_label: String,
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
        collection: "frontend-route-paths"
    }
);

frontendRoutePathSchema.index
(
    {
        key: 1
    },
    {
        unique: true,
        background: true
    }
);

export default mongoose.model("FrontendRoutePath", frontendRoutePathSchema);
