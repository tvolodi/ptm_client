import React, { useCallback, useContext, useRef } from "react";

import { LayoutContext } from "./LayoutContext";

import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Menubar } from 'primereact/menubar';

import KeycloakService from "../services/auth/keycloak";

import './AppTopbar.css';
import useMainViewContext from "./MainViewContext";

import { useRouter } from "found";

const AppTopbar = () => {

    const { match, router } = useRouter();
    const { onAppSideMenuToggle } = useContext(LayoutContext);


    const mainViewContext = useMainViewContext();

    const menuRef = useRef(null);
    
    const setMainViewContent = (viewName) => {

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
                setMainViewContent("projects")
            },
            icon: 'project-icon',
        },
        {
            label: 'Tasks',
            icon: 'tasks-icon',
            command: (event) => setMainViewContent("work-tasks"),
        },
        {
            label: 'Profile',
            icon: 'pi pi-fw pi-user',
            items: [
                {
                    label: 'Edit Profile',
                    icon: 'pi pi-fw pi-user-edit',
                    command: async (event) => {
                        // await getMyProfile();
                    }
                },
                {
                    label: 'Logout',
                    command: async (event) => {
                        KeycloakService.CallLogout();
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
                        // setMainViewContent("data-designer");                        
                        router.replace("/designer");
                        
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