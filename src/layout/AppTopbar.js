import React, { useContext, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';

import { LayoutContext } from "./LayoutContext";

import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";
import { Menu } from 'primereact/menu';
import { Menubar } from 'primereact/menubar';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Toolbar } from 'primereact/toolbar';

import logIn, { getMyProfile } from "../services/auth/auth";
import { checkLogin, logOut } from "../services/auth/auth";

import KeycloakService from "../services/auth/keycloak";

import './AppTopbar.css';
import useMainViewContext from "./MainViewContext";
import axiosClient, { doAxiosRequest } from "../services/axios_client";

const AppTopbar = () => {

    const { onAppSideMenuToggle } = useContext(LayoutContext);

    const mainViewContext = useMainViewContext();


    const menuRef = useRef(null);
    const loginPanelRef = useRef(null);

    // const navigate = useNavigate();

    const setMainViewContent = (viewName) => {
        console.log("viewName", viewName)
        mainViewContext.setMainViewState((prev) => {
            return {
                ...prev,
                currentView: viewName,
            }
        });
    }

    const leftBarSide = (
        <>
            <Button label="Menu" icon="pi pi-bars" className="mr-2" onClick={onAppSideMenuToggle}></Button>
            <Button label="Home" icon="pi pi-home" className="mr-2" />
        </>
    );

    const rightBarSide = (
        <>
            <Button label="Check login" className="mr-2" onClick={getMyProfile} />
            <Button label="Login" icon="pi pi-user" className="mr-2" onClick={logIn} />
        </>
    );

    const menuEndPartModel = [
        {
            label: 'Profile'
        },
        {
            label: 'Settings'
        }
    ];

    const menuItems = [
        {
            label: 'Projects',
            command: (event) => {
                console.log("Projects button pressed");
                setMainViewContent("projects")
                // navigate("/projects")
            },
            icon: 'project-icon',
        },
        {
            label: 'Tasks',
            icon: 'tasks-icon',
            command: (event) => setMainViewContent("work-tasks"),
        },
        // {
        //     label: 'Dictionaries',
        //     icon: 'pi pi-fw pi-database',
        //     items: [
        //         {
        //             label: 'Users',
        //             icon: 'pi pi-fw pi-users',
        //             command: (event) => {
        //                 setMainViewContent("users");
        //                 // navigate("/users")
        //             },
        //         },
        //     ]
        // },
        {
            label: 'Profile',
            icon: 'pi pi-fw pi-user',
            items: [
                {
                    label: 'Edit Profile',
                    icon: 'pi pi-fw pi-user-edit',
                    command: async (event) => {
                        await getMyProfile();
                    }
                },
                {
                    label: 'Login',
                    command: async (event) => {
                        setMainViewContent("login");
                        // await logIn();
                        // loginPanelRef.current.toggle(event);
                        // navigate("/user-login");
                    }
                },
                {
                    label: 'Logout',
                    command: async (event) => {
                        KeycloakService.CallLogout();

                        // await logOut();
                        // setMainViewContent("login");
                        // navigate("/");
                    }
                }
            ]
        },
        {
            label: "Data Manager",
            icon: 'pi pi-fw pi-database',
            items: [
                {
                    icon: "pi pi-copy",
                    label: "Dictionaries",
                    command: async (event) => {
                        setMainViewContent("data-dictionaries");
                    },
                },
                {
                    icon: "pi pi-wrench",
                    label: "Designer",
                    command: async (event) => {
                        setMainViewContent("data-designer");
                    },
                },

            ],



        },
    ]

    const menuEndPart = (
        <Menubar model={menuEndPartModel}></Menubar>
    );



    const toolsMenu = (
        <Menu model={menuEndPartModel} ref={menuRef}></Menu>
    );

    let loginName = '';

    return (
        <div className="layout-topbar">
            {/* <span>Test</span> */}

            {/* <Toolbar left={leftBarSide} right = {rightBarSide}></Toolbar> */}
            <Menubar model={menuItems} ></Menubar>

            {/* <OverlayPanel ref={loginPanelRef} showCloseIcon position="top-right">
                <InputText label='Login' value={loginName}></InputText>
                <InputText label='Login' value={loginName}></InputText>
            </OverlayPanel> */}
        </div>
    );
};

export default AppTopbar;