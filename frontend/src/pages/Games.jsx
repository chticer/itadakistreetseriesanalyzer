import { getFrontendRoutePathsMappingCache } from "../utils/route-paths-cache.js";
import Title from "../components/Title";

const Games = () =>
{
    const FRONTEND_ROUTE_PATHS_MAPPING = getFrontendRoutePathsMappingCache();

    const PATH = FRONTEND_ROUTE_PATHS_MAPPING.INDEX.GAMES.FULL_PATH;

    const TitleComponent = () => <Title path={PATH} />;

    return (
    <>
        <TitleComponent />

        <main>
        </main>
    </>
    );
};

export default Games;
