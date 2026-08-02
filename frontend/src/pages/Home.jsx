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
            <div>
                <div className="flex flex-column-content flex-center-content spacing-vertical-content spacing-vertical-separator-container text-center">
                    <div>
                        <h1>Itadaki Street Series Analyzer</h1>
                    </div>

                    <div className="spacing-vertical-separator-header-container">
                        <div>Ever wondered what hidden secrets and other unknown game mechanics are part of Itadaki Street games to be exploited and unveiled for speedruns, game theory research, or just plain fun? Wonder no more!</div>

                        <div>This website allows you to contribute your own game experiences to train machine learning models for predicting outcomes of any Itadaki Street game. See Itadaki Street game information and how to get started with training and predicting game outcomes below!</div>
                    </div>
                </div>
            </div>
        </main>
    </>
    );
};

export default Home;
