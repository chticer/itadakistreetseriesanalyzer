import RoutePath from "../models/RoutePath.js";

export const getRoutePaths = async (documentFilters) =>
{
    return await RoutePath.find(documentFilters).sort({ "path": "asc" }).lean();
}
