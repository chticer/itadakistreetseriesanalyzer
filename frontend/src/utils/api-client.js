const APIClient = async (APIRoute, options) =>
{
    const APIRouteURL = new URL(APIRoute["route_path"], window.location.origin);

    if (APIRoute["query_parameters"])
        for (const currentQueryParameterKey in APIRoute["query_parameters"])
        {
            const currentQueryParameterValue = APIRoute["query_parameters"][currentQueryParameterKey];

            if (currentQueryParameterValue)
                APIRouteURL.searchParams.append(currentQueryParameterKey, currentQueryParameterValue);
        }

    const response = await fetch(APIRouteURL.toString(), options);

    if (!response.ok)
    {
        const errorMessage = await response.text();

        console.error(`${options["method"]} ${APIRouteURL}: ${response.status} ${errorMessage}`);

        throw new Error(`Could not complete API request call successfully: ${options["method"]} ${APIRouteURL}: ${response.status} ${errorMessage}`);
    }

    return await response.json();
};

export default APIClient;
