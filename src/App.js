import logo from './logo.svg';
import './App.css';
import AppLayout from './layout/AppLayout';
import Layout from './layout/Layout';
import HomeLayout from './layout/HomeLayout';
import UserLoginView from './components/user-profile/UserLoginView';
import ProjectsView from './components/projects/ProjectsView';
import UsersView from './components/users/UsersView';


import AppTopbar from './layout/AppTopbar';

import { LayoutProvider } from './layout/LayoutContext';
import { AuthProvider } from './contexts/AuthContextProvider';

import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

import { createBrowserRouter, RouterProvider, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './layout/ProtectedRoute';
import RequireAuth from './components/user-profile/RequireAuth';
import environment from './contexts/graphql-environment';

import { RelayEnvironmentProvider } from 'react-relay';



var g_IsLogged = false;

function App () {
  return (
    <LayoutProvider>
      <AuthProvider>
        <RelayEnvironmentProvider environment={environment}>
          <div className="App">
            {/* <RouterProvider router={router}> </RouterProvider> */}
            <AppLayout></AppLayout>
          </div>
        </RelayEnvironmentProvider>
      </AuthProvider>
    </LayoutProvider>
  );
}

export default App;
