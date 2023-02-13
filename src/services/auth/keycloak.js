import Keycloak from "keycloak-js";

import { setLocalServiceTokens } from "../local-services/local-services";

const keycloakInstance = new Keycloak();

/**
 * 
 * @param {function} onAuthenticatedCallback 
 */
const Login = (onAuthenticatedCallback) => {

    console.log("Keycloak login")

    keycloakInstance
        .init({onLoad: 'login-required'})
        .then(function (authenticated) {
            authenticated ? onAuthenticatedCallback() : alert("non authenticated");
            setLocalServiceTokens(keycloakInstance.token, keycloakInstance.refreshToken);
        })
        .catch( (error) => {
            console.log(`keycloak init exception: ${error}`);
        });
}

const doLogin = keycloakInstance.login;

const updateToken = (successCallback) => {
    let isExpired = keycloakInstance.isTokenExpired(5);
    console.log("Token will be expired in 5 or less sec", isExpired);

    keycloakInstance
        .updateToken(5)
            .then(successCallback)
            .catch(doLogin);
}

const Logout = keycloakInstance.logout;

const isLoggedIn = () => !!keycloakInstance.token;

const getKeycloakInstance = () => keycloakInstance;

const getToken = () => keycloakInstance.token;

const getRefreshToken = () => keycloakInstance.refreshToken;
    
const UserName = () => keycloakInstance.tokenParsed?.preferred_username;

const UserRoles = () => {
    if(keycloakInstance.resourceAccess === undefined) return undefined;
    else return keycloakInstance.resourceAccess["twm-client"].roles;
}

const KeycloakService = {
    CallLogin: Login,
    CallLogout: Logout,
    GetToken: getToken,
    GetRefreshToken: getRefreshToken,
    GetKeycloakInstance: getKeycloakInstance,
    UpdateToken: updateToken,
    GetUserName: UserName,
    GetUserRoles: UserRoles,
    IsLoggedIn: isLoggedIn,
}

export default KeycloakService;