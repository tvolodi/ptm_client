import React, {useState} from "react";

export const LayoutContext = React.createContext();

export const LayoutProvider = (props) => {

    const [layoutConfig, setLayoutConfig] = useState({
        ripple: false,
        inputStyle: 'outlined',
        menuMode: 'static',
        colorScheme: 'light',
        theme: 'lara-light-indigo',
        scale: 14
    });

    const [layoutState, setLayoutState] = useState({
        appSideMenuActive: false,
    });

    const onAppSideMenuToggle = () => {
        setLayoutState((prevLayoutState) => ({...prevLayoutState, appSideMenuActive: !prevLayoutState.appSideMenuActive}));
    };

    const value = {
        layoutConfig,
        setLayoutConfig,
        layoutState,
        setLayoutState,
        onAppSideMenuToggle
    };
    
    return <LayoutContext.Provider value={value}>{props.children}</LayoutContext.Provider>
};

