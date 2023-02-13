import React, { setState, useContext, useState } from "react";

import { Button  } from "primereact/button";
import { Sidebar } from 'primereact/sidebar';
import { TieredMenu } from 'primereact/tieredmenu';

import { LayoutContext } from "./LayoutContext";


const AppSidebar = (props) => {

    const { layoutConfig, layoutState, onAppSideMenuToggle} = useContext(LayoutContext);

    const [visible, setVisible] = useState(layoutState.appSideMenuActive);

    const menuItems = [
        {
            label:'Users',
            icon: 'pi pi-fw pi-users'
        }
    ];

    return(
        <>
            <Sidebar visible={layoutState.appSideMenuActive} onHide={onAppSideMenuToggle} icons={() => (
                <>
                </>
            )}>
                <TieredMenu model={menuItems}></TieredMenu>
            </Sidebar>
        </>
    );

};

export default AppSidebar;