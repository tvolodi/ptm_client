import React from "react";
import ProjectsView from "../components/projects/ProjectsView";
import UserLoginView from "../components/user-profile/UserLoginView";
import UsersView from "../components/users/UsersView";
import WorkTasksView from "../components/work-tasks/WorkTasksView";
import DataDesignerView from "../components/entity-manager/DataDesignerView";
import Layout from "./Layout";

import useMainViewContext from "./MainViewContext";
import DictionariesView from "../components/entity-manager/DictionariesView";

const MainScreenView = () => {

    const mainViewContext = useMainViewContext();

    console.log("mainViewContext from MainScreenView", mainViewContext)

    const currentView = mainViewContext.mainViewState.currentView;

    let result = null;

    switch (currentView) {
        case 'data-designer':
            result = (
                <DataDesignerView></DataDesignerView>
            );
            break;

        case 'data-dictionaries':
            result = (
                <DictionariesView></DictionariesView>
            );
            break;

        case 'login':
            result = (
                <UserLoginView></UserLoginView>
            );
            break;
        case 'projects':
            result = (
                <ProjectsView></ProjectsView>
            );
            break;
        case 'work-tasks':
            result = (
                <WorkTasksView></WorkTasksView>
            );
            break;
        case 'users':
            result = (
                <UsersView></UsersView>
            );
            break;
        default:
            result = (
                <p>Default view</p>
            );
    }

    return result;


}

export default MainScreenView;