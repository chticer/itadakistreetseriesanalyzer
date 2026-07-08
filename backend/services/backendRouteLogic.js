import BackendRoute from "../models/BackendRoute.js";

export const getBackendRoutes = async (documentFilters) =>
{
    return BackendRoute.find(documentFilters).sort({ "key": "asc", "route_path": "asc" }).lean();
};
