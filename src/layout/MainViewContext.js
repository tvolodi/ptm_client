import React, { useState, useContext } from "react";

const MainViewContext = React.createContext();

export const MainViewContextProvider = (props) => {

    const [mainViewState, setMainViewState] = useState({
        currentView: "Layout",
    });

    const value = {
        mainViewState,
        setMainViewState,
    };

    return <MainViewContext.Provider value={value}>{props.children}</MainViewContext.Provider>
}

const useMainViewContext = () => useContext(MainViewContext);

export default useMainViewContext;