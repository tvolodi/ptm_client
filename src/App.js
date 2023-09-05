import logo from './logo.svg';
import './App.css';
import AppLayout from './layout/AppLayout';
import Layout from './layout/Layout';
import HomeLayout from './layout/HomeLayout';
import UserLoginView from './components/user-profile/UserLoginView';
import ProjectsView from './components/projects/ProjectsView';
import UsersView from './components/users/UsersView';


import AppTopbar from './layout/AppTopbar';
import AppSidebar from './layout/AppSidebar';

import { LayoutProvider } from './layout/LayoutContext';
import { AuthProvider } from './contexts/AuthContextProvider';

import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

import { createBrowserRouter, RouterProvider, Route, Routes } from 'react-router-dom';
// import ProtectedRoute from './layout/ProtectedRoute';
import RequireAuth from './components/user-profile/RequireAuth';
import RelayEnvironment from './contexts/graphql-environment';
import { RelayEnvironmentProvider } from 'react-relay';
import { MainViewContextProvider } from './layout/MainViewContext';

const App = (props) => {
  return (
    <LayoutProvider>      
        <RelayEnvironmentProvider environment={RelayEnvironment}>
          <div className="App">
            <MainViewContextProvider>
              <AppTopbar></AppTopbar>
              <AppSidebar visible={true}></AppSidebar>
              {props.children}
            </MainViewContextProvider>
          </div>
        </RelayEnvironmentProvider>
    </LayoutProvider>
  );
}

export default App;
