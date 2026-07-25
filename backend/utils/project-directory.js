import path from "path";
import { pathToFileURL } from "url";

const rootDirectoryBase = process.env.ROOT_DIRECTORY || "./";

const ROOT_DIRECTORY = path.resolve(process.cwd(), rootDirectoryBase);

const PROJECT_DIRECTORY =
{
    "ROOT": ROOT_DIRECTORY,
    "SHARED": path.join(ROOT_DIRECTORY, "shared")
};

export const getSharedModulePath = (fileName) =>
{
    return pathToFileURL(path.join(PROJECT_DIRECTORY["SHARED"], fileName)).href;
};
