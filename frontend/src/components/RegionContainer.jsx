import { ReactSVG } from "react-svg";

const regionMapping =
{
    "europe":
    {
        "name": "Europe",
        "label": "EU",
        "flag_exists": true
    },
    "north_america":
    {
        "name": "North America",
        "label": "NA",
        "flag_exists": false
    },
    "australia":
    {
        "name": "Australia",
        "label": "AU",
        "flag_exists": true
    },
    "new_zealand":
    {
        "name": "New Zealand",
        "label": "NZ",
        "flag_exists": true
    },
    "japan":
    {
        "name": "Japan",
        "label": "JP",
        "flag_exists": true
    },
    "china":
    {
        "name": "China",
        "label": "CN",
        "flag_exists": true
    },
    "asia":
    {
        "name": "Asia",
        "label": "AS",
        "flag_exists": false
    },
    "worldwide":
    {
        "name": "Worldwide",
        "label": "WW",
        "flag_exists": false
    },
    "korea":
    {
        "name": "South Korea",
        "label": "KR",
        "flag_exists": true
    },
    "brazil":
    {
        "name": "Brazil",
        "label": "BR",
        "flag_exists": true
    }
};

const RegionContainer = ({ region }) =>
{
    try
    {
        const regionMappingSelected = regionMapping[region];

        return (
        <>
            <div className="flex flex-row-content">

                {
                    regionMappingSelected["flag_exists"] &&
                    (
                        <div className="flag">
                            <ReactSVG src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${regionMappingSelected["label"]}.svg`} />
                        </div>
                    )
                }

                <div>{regionMappingSelected["name"]} ({regionMappingSelected["label"]})</div>
            </div>
        </>
        );
    }
    catch
    {
        return <></>;
    }
};

export default RegionContainer;
