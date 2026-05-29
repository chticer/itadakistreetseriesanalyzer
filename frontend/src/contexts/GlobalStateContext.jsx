import { createContext, useContext, useState } from "react";

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) =>
{
    const [ appData, setAppData ] = useState
    (
        {
        }
    );

    return (
        <GlobalStateContext value={{ appData, setAppData }}>
            { children }
        </GlobalStateContext>
    );
};

export const useApp = () => useContext(GlobalStateContext);
