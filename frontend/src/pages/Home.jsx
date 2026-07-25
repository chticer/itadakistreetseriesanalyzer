import { getFrontendRoutePathsMappingCache } from "../utils/route-paths-cache.js";
import Title from "../components/Title";

const Home = () =>
{
    const FRONTEND_ROUTE_PATHS_MAPPING = getFrontendRoutePathsMappingCache();

    const PATH = FRONTEND_ROUTE_PATHS_MAPPING.INDEX.INDEX.FULL_PATH;

    const TitleComponent = () => <Title path={PATH} />;

    return (
    <>
        <TitleComponent />

        <main>
        </main>
    </>
    );
};

export default Home;
