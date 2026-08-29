import convert from "convert";
import { Temporal } from "temporal-polyfill";

const getTimestampFromEpoch = (inputTime, outputFormat) =>
{
    inputTime["epoch"] = inputTime["epoch"] || Temporal.Now.instant().epochMilliseconds;
    inputTime["timezone"] = inputTime["timezone"] || Temporal.Now.timeZoneId();

    const instant = Temporal.Instant.fromEpochMilliseconds(inputTime["epoch"]);

    const zonedDateTime = instant.toZonedDateTimeISO(inputTime["timezone"]);

    const timestampPatterns =
    {
        "YYYY": zonedDateTime.year.toString(),
        "YY": zonedDateTime.year.toString().slice(-2),
        "MM": zonedDateTime.month.toString().padStart(2, "0"),
        "M": zonedDateTime.month.toString(),
        "DD": zonedDateTime.day.toString().padStart(2, "0"),
        "D": zonedDateTime.day.toString(),
        "HH": zonedDateTime.hour.toString().padStart(2, "0"),
        "H": zonedDateTime.hour.toString(),
        "mm": zonedDateTime.minute.toString().padStart(2, "0"),
        "ss": zonedDateTime.second.toString().padStart(2, "0")
    };

    return outputFormat.replace(/YYYY|YY|MM|M|DD|D|HH|H|mm|ss/g, (timestampPattern) => timestampPatterns[timestampPattern]);
};

export const getTimestampFromEpochSeconds = (inputTime, outputFormat) =>
{
    try
    {
        inputTime["epoch"] = inputTime["epoch"] * convert(1, "seconds").to("milliseconds");

        return getTimestampFromEpoch(inputTime, outputFormat);
    }
    catch
    {
        return getTimestampFromEpoch({}, outputFormat);
    }
};

export const getTimestampFromEpochMilliseconds = (inputTime, outputFormat) => getTimestampFromEpoch(inputTime, outputFormat);
