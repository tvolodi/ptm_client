/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import KeycloakService from './services/auth/keycloak';
import { BrowserProtocol, queryMiddleware } from 'farce';
import { createFarceRouter, createBrowserRouter, createRender, makeRouteConfig, Route } from 'found';
import { Resolver } from 'found-relay';
import RelayEnvironment from './contexts/graphql-environment';
import DataDesignerView from './components/entity-manager/data-designer/DataDesignerView';
import { RelayEnvironmentProvider, loadQuery, useQueryLoader } from 'react-relay';


// import {
//     Environment,
//     Network,
//     RecordSource,
//     Store
// } from "relay-runtime";
// import { fetchQuery } from 'react-relay';

// fetchQuery = (
//     operation,
//     variables,
//     cacheConfig,
//     uploadables
// ) => {
//     KeycloakService.GetKeycloakInstance().updateToken(5).then(
//         () => 
//             fetch("/graphql", {
//                 method: "POST",
//                 headers: {
//                     'content-type': 'application/json',
//                     'Authorization' : `Bearer ${KeycloakService.GetToken()}`,
//                 },
//                 body: JSON.stringify({
//                     query: operation.text,
//                     variables,
//                 }),
//             }).then(response => {
//                 response.json();
//             })
//     );
    
// }

// const network = Network.create(fetchQuery);
// const store = new Store(new RecordSource());

// const environment = new Environment({
//     network: network,
//     store: store,
// });


const Router = createBrowserRouter({
    routeConfig: [
        {
            path: "/",
            Component: App,
            children: [
                {
                    Component: () => <div></div>
                },
                {
                    path: "designer",
                    Component: DataDesignerView,
                    getData: () => {
                        // TODO! entityListQueryRef.dispose(); dispose somehow old reference if exists.
                        const entitiesQuery = require('./components/entity-manager/data-designer/__generated__/DataDesignerViewEntitiesQuery.graphql');
                        const entityListQueryRef = loadQuery(
                            RelayEnvironment,
                            entitiesQuery,
                            { fetchPolicy: 'store-or-network' }
                        )
                        // const [entityListQueryRef, entityListLoadQuery] = useQueryLoader(entitiesQuery,); // g_query_vars.domainEntityQueryRef
                        console.log("entityListQueryRef", entityListQueryRef)
                        return entityListQueryRef;
                    }
                }
            ]
        }
    ]
})

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderApp = () =>
    root.render(
    <React.StrictMode>
        <RelayEnvironmentProvider environment={RelayEnvironment}>
            <Router />
        </RelayEnvironmentProvider>
        {/* <App /> */}
    </React.StrictMode>
    );
 
KeycloakService.CallLogin(renderApp);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
