import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import KeycloakService from './services/auth/keycloak';
import { configureBearer } from './services/axios_client';

import {
    EntryPointContainer,
    RelayEnvironmentProvider,
    loadEntryPoint
} from "react-relay";

import {
    Environment,
    Network,
    RecordSource,
    Store
} from "relay-runtime";
import { fetchQuery } from 'react-relay';

fetchQuery = (
    operation,
    variables,
    cacheConfig,
    uploadables
) => {
    KeycloakService.GetKeycloakInstance().updateToken(5).then(
        () => 
            fetch("/graphql", {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                    'Authorization' : `Bearer ${KeycloakService.GetToken()}`,
                },
                body: JSON.stringify({
                    query: operation.text,
                    variables,
                }),
            }).then(response => {
                response.json();
            })
    );
    
}

const network = Network.create(fetchQuery);
const store = new Store(new RecordSource());

const environment = new Environment({
    network: network,
    store: store,
});

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderApp = () =>
    root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
    );

console.log("mark 2")    
KeycloakService.CallLogin(renderApp);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
