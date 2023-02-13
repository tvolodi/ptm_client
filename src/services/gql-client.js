import { ApolloClient, HttpLink, ApolloLink, InMemoryCache, ApolloProvider, gql, concat } from '@apollo/client';
import KeycloakService from "./auth/keycloak";

const httpLink = new HttpLink({
    uri: 'http://localhost:5098/graphql/',
    // uri: '/graphql',
});

const authMiddleware = new ApolloLink( (operation, forward) => {

    operation.setContext ( ({ headers = {} }) => ({
        headers: {
            ...headers,
            Authorization : `Bearer ${KeycloakService.GetToken()}`,
        }
    }));
    return forward(operation);
});

const gqlClient = new ApolloClient({
    // uri: "http://localhost:5098/",
    cache: new InMemoryCache(),
    link: concat(authMiddleware, httpLink),
});

///
export const callGqlQuery = async (docNode) => {

    console.log("KeycloakService.GetKeycloakInstance", KeycloakService.GetKeycloakInstance)

    await KeycloakService.GetKeycloakInstance().updateToken(5);

        const result = await gqlClient.query({
                query: docNode,
            });

            // .then(
            //     (result) => {
            //         console.log("gql.result:", result)
            //         return result;
            //     }
            // );
        return result;

    // UpdateToken(
        // (docNode) => {
        //     gqlClient.query({
        //         query: docNode,
        //     })
        //     .then(
        //         (result) => {
        //             console.log("gql.result:", result)
        //             return result;
        //         }
        //     )
        // }
    // );
}

export default gqlClient;
