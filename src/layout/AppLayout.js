import React from "react";
import { Outlet, useLocation } from "react-router";
// import AuthStatus from "../components/user-profile/AuthStatus__";
import { MainViewContextProvider } from "./MainViewContext";
import Layout from "./Layout";

const AppLayout = () => {

    return(
        <>
            {/* <p>AppLayout</p> */}

            {/* <AuthStatus></AuthStatus> */}

            {/* <p>Layout from AppLayout</p> */}
            <MainViewContextProvider>
                <Layout></Layout>
            </MainViewContextProvider>

            {/* <Outlet></Outlet> */}

        </>

    );
}

export default AppLayout;