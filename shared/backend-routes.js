const BACKEND_ROUTE_METADATA =
[
    {
        key: "SITEMAP",
        base_path: "/",
        route_script_file_name: "sitemap"
    }
];

const BACKEND_ROUTES =
[
    {
        key: "SITEMAP",
        route_path: "sitemap.xml",
        active: true
    }
];

const addBackendRouteMetadata = () =>
{
    for (const currentBackendRoute of BACKEND_ROUTES)
        try
        {
            const currentBackendRouteMetadata = BACKEND_ROUTE_METADATA.find((route) => currentBackendRoute["key"] === route["key"]);

            currentBackendRoute["base_path"] = currentBackendRouteMetadata["base_path"];
            currentBackendRoute["route_script_file_name"] = currentBackendRouteMetadata["route_script_file_name"];
        }
        catch
        {
        }
};

addBackendRouteMetadata();

export { BACKEND_ROUTES };
