import { Link } from "react-router-dom";
import { getTimestampFromEpochSeconds } from "../../../shared/temporal-helper.js";
import { getFrontendRoutePathsMappingCache } from "../utils/route-paths-cache.js";
import { games } from "../utils/games-temp.js";
import Title from "../components/Title";
import CarouselContainer from "../components/CarouselContainer";
import RegionContainer from "../components/RegionContainer";

const Home = () =>
{
    const FRONTEND_ROUTE_PATHS_MAPPING = getFrontendRoutePathsMappingCache();

    const PATH = FRONTEND_ROUTE_PATHS_MAPPING.INDEX.INDEX.FULL_PATH;

    const TitleComponent = () => <Title path={PATH} />;

    const GAMES_PATH = FRONTEND_ROUTE_PATHS_MAPPING.INDEX.GAMES.FULL_PATH;

    const gameData = games;

    const initializeGameCarouselItems = () => gameData.map((game, index) =>
    {
        const carouselItemClasses = [ "carousel-item" ];

        if (index === 0)
            carouselItemClasses.push("active");

        return (
            <div className={carouselItemClasses.join(" ")} key={game["id"]}>
                <div className="flex flex-column-content spacing-vertical-separator-container">
                    <div className="flex flex-fluid-content stats-container text-center">
                        <div className="flex flex-column-content">
                            <div>0</div>

                            <div>Trained Instances</div>
                        </div>

                        <div className="flex flex-column-content">
                            <div>0</div>

                            <div>Predicted Instances</div>
                        </div>
                    </div>

                    <div className="flex flex-column-content flex-center-content spacing-vertical-separator-container">

                        {
                            game["cover"] &&
                            (
                                <div>
                                    <img src={`https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${game["cover"]["image_id"]}.webp`} alt={`${game["name"]} (IGDB Game ID ${game["id"]}) Cover`} height="500" />
                                </div>
                            )
                        }

                        <div>
                            <h3>{game["name"]}</h3>
                        </div>

                        {
                            game["summary"] &&
                            (
                                <div className="game-information-description-container">
                                    <div>{game["summary"]}</div>
                                </div>
                            )
                        }

                        <div className="flex flex-fluid-content">

                            {
                                game["release_dates"] &&
                                (
                                    <div className="card">
                                        <h5 className="card-header">Platforms & Releases</h5>

                                        <div className="card-body card-text list-group list-group-flush">

                                            {
                                                game["release_dates"].map((releaseDate, index) =>
                                                    <div className="flex flex-column-content list-group-item" key={index}>
                                                        <div>{releaseDate["platform"]["name"]}</div>

                                                        <div>
                                                            <RegionContainer region={releaseDate["release_region"]["region"]} />
                                                        </div>

                                                        <div>{getTimestampFromEpochSeconds({ epoch: releaseDate["date"], timezone: "UTC" }, "MM/DD/YYYY")}</div>
                                                    </div>
                                                )
                                            }

                                        </div>
                                    </div>
                                )
                            }

                            {
                                game["involved_companies"] &&
                                (
                                    <div className="card">
                                        <h5 className="card-header">Developers & Publishers</h5>

                                        <div className="flex flex-column-content card-body card-text list-group list-group-flush">

                                            {
                                                game["involved_companies"].map((involvedCompany, index) =>
                                                    <div className="flex flex-column-content flex-fill-content list-group-item" key={index}>
                                                        <div className="flex flex-row-content">{involvedCompany["company"]["name"]}</div>
                                                    </div>
                                                )
                                            }

                                        </div>
                                    </div>
                                )
                            }

                        </div>

                        <div className="flex flex-fluid-content flex-center-content">
                            <div>
                                <Link to={`${GAMES_PATH}?igdb-id=${game["id"]}`} className="btn disabled">View Page on Itadaki Street Series Analyzer</Link>
                            </div>

                            <div>
                                <Link to={game["url"]} className="btn" target="_blank">View Page on IGDB</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    const gameCarouselItems = initializeGameCarouselItems();

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

            <div>
                <CarouselContainer carouselid="games-carousel" carouselitemlabels={ gameData.map((game) => game["name"]) }>
                    {gameCarouselItems}
                </CarouselContainer>
            </div>
        </main>
    </>
    );
};

export default Home;
