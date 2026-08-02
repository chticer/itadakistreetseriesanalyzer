import { Outlet, Link } from "react-router-dom";
import { useApp } from "../contexts/GlobalStateContext";
import { getFrontendRoutePathsMappingCache } from "../utils/route-paths-cache.js";
import ScrollToTop from "../components/ScrollToTop";

const Main = () =>
{
    const FRONTEND_ROUTE_PATHS_MAPPING = getFrontendRoutePathsMappingCache();

    const GAMES_PATH = FRONTEND_ROUTE_PATHS_MAPPING.INDEX.GAMES.FULL_PATH;

    const { appData } = useApp();

    return (
    <>
        <ScrollToTop />

        <header className="flex flex-fluid-content sticky-top">
            <div className="flex flex-fluid-content flex-spacing-around">
                <div className="flex flex-fluid-content flex-fill-content spacing-fluid-separator-container">
                    <div>
                        <Link to={FRONTEND_ROUTE_PATHS_MAPPING.INDEX.INDEX.FULL_PATH} id="website-link">{appData.websiteSettings.name}</Link>
                    </div>

                    <div className="flex flex-row-content flex-fill-content dropdown">
                        <div className="flex flex-column-content flex-center-content">
                            <Link to="#" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Games</Link>

                            <ul className="dropdown-menu">
                                <li>
                                    <Link to={`${GAMES_PATH}?igdb-id=69176`} className="dropdown-item disabled" aria-disabled="true">Dragon Quest & Final Fantasy in Itadaki Street Portable</Link>
                                </li>

                                <li>
                                    <Link to={`${GAMES_PATH}?igdb-id=19930`} className="dropdown-item disabled" aria-disabled="true">Fortune Street</Link>
                                </li>

                                <li>
                                    <Link to={`${GAMES_PATH}?igdb-id=64398`} className="dropdown-item disabled" aria-disabled="true">Fortune Street Smart</Link>
                                </li>

                                <li>
                                    <Link to={`${GAMES_PATH}?igdb-id=54550`} className="dropdown-item disabled" aria-disabled="true">Itadaki Street: Dragon Quest & Final Fantasy 30th Anniversary</Link>
                                </li>

                                <li>
                                    <Link to={`${GAMES_PATH}?igdb-id=60478`} className="dropdown-item disabled" aria-disabled="true">Itadaki Street: Gorgeous King</Link>
                                </li>

                                <li>
                                    <Link to={`${GAMES_PATH}?igdb-id=48751`} className="dropdown-item disabled" aria-disabled="true">Itadaki Street: Watashi no Oten ni Yottette</Link>
                                </li>

                                <li>
                                    <Link to={`${GAMES_PATH}?igdb-id=38345`} className="dropdown-item disabled" aria-disabled="true">Itadaki Street 2: Neon Sign ha Bara Iro ni</Link>
                                </li>

                                <li>
                                    <Link to={`${GAMES_PATH}?igdb-id=60477`} className="dropdown-item disabled" aria-disabled="true">Itadaki Street 3</Link>
                                </li>

                                <li>
                                    <Link to={`${GAMES_PATH}?igdb-id=71885`} className="dropdown-item disabled" aria-disabled="true">Itadaki Street DS</Link>
                                </li>

                                <li>
                                    <Link to={`${GAMES_PATH}?igdb-id=72987`} className="dropdown-item disabled" aria-disabled="true">Itadaki Street Special</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-row-content dropdown">
                        <div className="flex flex-column-content flex-center-content">
                            <Link to="#" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Analyzer Instances</Link>

                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <Link to="#" className="dropdown-item disabled" aria-disabled="true">Load Previous Instance</Link>
                                </li>

                                <li>
                                    <Link to="#" className="dropdown-item disabled" aria-disabled="true">Create New Instance</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-row-content dropdown">
                        <div className="flex flex-column-content flex-center-content">
                            <Link to="#" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Theme</Link>

                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <Link to="#" className="dropdown-item disabled" aria-disabled="true">System</Link>
                                </li>

                                <li>
                                    <Link to="#" className="dropdown-item disabled" aria-disabled="true">Light</Link>
                                </li>

                                <li>
                                    <Link to="#" className="dropdown-item disabled" aria-disabled="true">Dark</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <Outlet />

        <footer className="flex flex-fluid-content">
            <div className="flex flex-fluid-content flex-spacing-around">
                <div className="flex flex-fluid-content flex-fill-content spacing-fluid-separator-container">
                    <div>&copy; {new Date().getFullYear()} {appData.websiteSettings.name} - All Rights Reserved</div>
                </div>

                <div className="flex flex-fluid-content spacing-fluid-separator-container">
                    <div className="dropup">
                        <Link to="#" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Policies</Link>

                        <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                                <Link to="/policies?name=privacy-policy" className="dropdown-item disabled" aria-disabled="true">Privacy Policy</Link>
                            </li>

                            <li>
                                <Link to="/policies?name=security-policy" className="dropdown-item disabled" aria-disabled="true">Security Policy</Link>
                            </li>

                            <li>
                                <Link to="/policies?name=terms-of-service" className="dropdown-item disabled" aria-disabled="true">Terms of Service</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div>
                            <Link to={FRONTEND_ROUTE_PATHS_MAPPING.INDEX.SITEMAP.FULL_PATH}>
                                <div>Sitemap</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
    );
};

export default Main;
