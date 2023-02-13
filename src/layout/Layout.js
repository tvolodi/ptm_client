import React, { useContext, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

import { OverlayPanel } from 'primereact/overlaypanel';

import AppSidebar from "./AppSidebar";
import AppTopbar from "./AppTopbar";
import ProjectsView from "../components/projects/ProjectsView";
import UserLoginView from "../components/user-profile/UserLoginView";
import { AuthContext } from "../hooks/AuthContext";
import { getMyProfile } from "../services/auth/auth";
import MainScreenView from "./MainScreenView";
import { MainViewContextProvider} from "./MainViewContext";

const Layout = (props) => {

    const isAppSidebarVisible = true;

    return (
        <>
        {/* <p>Layout</p> */}

            <AppTopbar></AppTopbar>
            <AppSidebar visible={isAppSidebarVisible}></AppSidebar>

            <MainScreenView></MainScreenView>
        </>
    );

};

export default Layout;